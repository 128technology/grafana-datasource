import _ from 'lodash';
import moment from 'moment';

export default class GenericDatasource {
  constructor(instanceSettings, $q, backendSrv, templateSrv) {
    this.token = instanceSettings.jsonData.token;
    this.type = instanceSettings.type;
    this.url = instanceSettings.url;
    this.name = instanceSettings.name;
    this.q = $q;
    this.backendSrv = backendSrv;
    this.templateSrv = templateSrv;
  }

  jsonRequest(url, method = 'GET', data) {
    return this.backendSrv.datasourceRequest({
      url: `${this.url}${url}`,
      method,
      data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`
      }
    });
  }

  getRouters() {
    return this.jsonRequest('/api/v1/router').then(res => res.data);
  }

  getPermutations(metric, keys, router) {
    const url = `/api/v1/router/${router}/stats/${metric}`;
    const data = {
      parameters: _.map(keys, name => ({ name, itemize: true }))
    };

    return this.jsonRequest(url, 'POST', data).then(res => {
      const permutations = _.get(res, ['data', 0, 'permutations'], []);
      const returnParams = _.flatMap(permutations, p => p.parameters);
      const group = _.groupBy(returnParams, x => _.snakeCase(x.name));
      return _.mapValues(group, x => _.uniq(_.map(x, 'value')));
    });
  }

  query(options) {
    const { range = {}, intervalMs, targets = [] } = options;
    const resolution = Math.max(intervalMs / 1000, 1);

    const rangeTo = moment(range.to)
      .utc()
      .format('YYYY-MM-DDTHH-mm-ss');
    const rangeFrom = moment(range.from)
      .utc()
      .format('YYYY-MM-DDTHH-mm-ss');

    const requests = targets.filter(t => !t.hide).map(targetObj =>
      this.jsonRequest(`/api/v1/router/${targetObj.router}/metrics`, 'POST', {
        id: `/stats/${targetObj.metric}`,
        transform: targetObj.transform || 'sum',
        order: 'ascending',
        filters: [targetObj.params],
        resolution,
        window: {
          end: `${rangeTo}Z`,
          start: `${rangeFrom}Z`
        }
      }).then(resp => ({
        target: targetObj.alias || targetObj.metric,
        datapoints: resp.data.map(p => [p.value, moment(p.date).unix() * 1000])
      }))
    );

    return this.q.all(requests).then(data => ({ data }));
  }

  testDatasource() {
    return this.jsonRequest('/api/v1/system').then(response => {
      if (response.status !== 200) {
        return {
          status: 'error',
          message: `Target returned a ${response.status}`,
          title: 'Error'
        };
      }

      return {
        status: 'success',
        message: 'Data source is working',
        title: 'Success'
      };
    });
  }

  annotationQuery(options) {
    return this.jsonRequest('/api/v1/alarm').then(result =>
      result.data.map((alarm, idx) => ({
        annotation: {
          name: `Alarm #${alarm.number}`,
          datasource: options.annotation.datasource,
          enable: options.annotation.enable,
          showLine: true
        },
        title: `Alarm #${alarm.number}`,
        time: moment(alarm.time).unix() * 1000 + idx,
        text: alarm.message,
        tags: alarm.severity
      }))
    );
  }
}
