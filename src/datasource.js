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

  query(options) {
    const requests = options.targets.filter(t => !t.hide).map(targetObj => {
      const target = this.templateSrv.replace(targetObj.target);
      const parameters = target.split(',').map(x => x.trim()).map((x) => {
        const args = x.split('=');
        return { name: _.toLower(args[0]), value: args[1] };
      });

      return this.backendSrv.datasourceRequest({
        url: `${this.url}/api/v1/analytics/runningTransform`,
        data: {
          metric: targetObj.metric,
          transform: 'sum',
          parameters,
          resolution: options.intervalMs / 1000,
          window: {
            end: `${moment(options.range.to).utc().format('YYYY-MM-DDTHH-mm-ss')}Z`,
            start: `${moment(options.range.from).utc().format('YYYY-MM-DDTHH-mm-ss')}Z`,
          },
        },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      })
      .then(resp => ({
        target: targetObj.alias || target,
        datapoints: resp.data.map(p => [p.value, moment(p.date).unix() * 1000]),
      }));
    });

    return this.q.all(requests).then(x => ({
      data: x,
    }));
  }

  testDatasource() {
    return this.graphQuery('query { authority { name } }')
      .then((response) => {
        if (response.status !== 200) {
          return { status: 'error', message: `Target returned a ${response.status}`, title: 'Error' };
        }

        if (_.get(response, 'data.data.authority.name', null) === null) {
          return { status: 'error', message: 'Connection successful but query returned invalid data.', title: 'Error' };
        }

        return { status: 'success', message: 'Data source is working', title: 'Success' };
      });
  }

  annotationQuery(options) {
    return this.backendSrv.datasourceRequest({
      url: `${this.url}/api/v1/alarm`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    }).then(result => result.data.map((alarm, idx) => ({
      annotation: {
        name: `Alarm #${alarm.number}`,
        datasource: options.annotation.datasource,
        enable: options.annotation.enable,
        showLine: true,
      },
      title: `Alarm #${alarm.number}`,
      time: (moment(alarm.time).unix() * 1000) + idx,
      text: alarm.message,
      tags: alarm.severity,
    })));
  }

  graphQuery(query, variables) {
    return this.backendSrv.datasourceRequest({
      url: `${this.url}/api/v1/graphql`,
      data: { query, variables },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    });
  }
}
