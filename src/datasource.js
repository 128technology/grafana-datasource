import _ from 'lodash';
import moment from 'moment';

function toIdentifiers(root) {
  function select(data) {
    if (_.isArray(data)) {
      const obj = _.fromPairs(data.map(x => [x.id, x]));
      return select(obj);
    }
    if (_.isObject(data)) {
      return _.flatMap(_.keys(data), x => select(data[x]).map(y => [x, y]));
    }
    return [data];
  }

  return select(root)
    .map(_.flattenDeep)
    .map(x => {
      const ptrn = _.initial(x).join('.');
      const val = _.last(x);
      return `${ptrn}:${val}`;
    });
}

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
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  getVersion() {
    return this.jsonRequest('/api/v1/system')
      .then(x => x.softwareVersion);
  }

  query(options) {
    const {
      range = {},
      intervalMs,
      targets = [],
    } = options;

    const rangeTo = moment(range.to).utc().format('YYYY-MM-DDTHH-mm-ss');
    const rangeFrom = moment(range.from).utc().format('YYYY-MM-DDTHH-mm-ss');
    const resolution = Math.max(intervalMs / 1000, 1);

    const requests = targets.filter(t => !t.hide).map(targetObj => {
      const target = this.templateSrv.replace(targetObj.target);
      const parameters = target.split(',').map(x => x.trim()).map((x) => {
        const args = x.split('=');
        return { name: _.toLower(args[0]), value: args[1] };
      });

      return this.jsonRequest('/api/v1/analytics/runningTransform', 'POST', {
        metric: targetObj.metric,
        transform: targetObj.transform || 'sum',
        order: 'ascending',
        parameters,
        resolution,
        window: {
          end: `${rangeTo}Z`,
          start: `${rangeFrom}Z`,
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
    return this.jsonRequest('/api/v1/system')
      .then((response) => {
        if (response.status !== 200) {
          return {
            status: 'error',
            message: `Target returned a ${response.status}`,
            title: 'Error',
          };
        }

        return {
          status: 'success',
          message: 'Data source is working',
          title: 'Success',
        };
      });
  }

  annotationQuery(options) {
    return this.jsonRequest('/api/v1/alarm')
      .then(result => result.data.map((alarm, idx) => ({
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
    return this.jsonRequest('/api/v1/graphql', 'POST', { query, variables });
  }

  metricFindQuery(query) {
    const formattedQuery = query.replace('*', '([^.]+)');
    const interpolated = this.templateSrv.replace(formattedQuery, null, 'regex');
    const regexStr = `^${interpolated}:`;
    const regex = new RegExp(regexStr);

    return this.graphQuery(`query {
      authority {
        router {
          id: name
          node {
            id: name
          }
        }
      }
    }`)
    .then(x => x.data.data)
    .then(x => toIdentifiers(x)
      .filter(p => regex.test(p))
      .map(p => _.last(p.split(':'))))
    .then(x => x.map(val => ({ text: val })));
  }
}
