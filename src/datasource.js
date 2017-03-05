import _ from 'lodash';
import moment from 'moment';

function walkQuery(tokens, root) {
  if (_.isNil(root)) {
    return [];
  }
  const tok = _.head(tokens);
  const rTok = _.tail(tokens);

  if (rTok.length === 0) {
    return root[tok] || [];
  }

  if (_.isArray(root)) {
    if (tok === '*') {
      return _.flatMap(root, x => walkQuery(rTok, x));
    }

    const nextRoot = _.find(root, x => x.id === tok);
    return walkQuery(rTok, nextRoot);
  }

  return walkQuery(rTok, root[tok]);
}

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

  query(options) {
    const rangeTo = moment(options.range.to);
    const rangeFrom = moment(options.range.from);
    const resolution = Math.max(options.intervalMs / 1000, 1);

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
          order: 'ascending',
          parameters,
          resolution,
          window: {
            end: `${rangeTo.utc().format('YYYY-MM-DDTHH-mm-ss')}Z`,
            start: `${rangeFrom.utc().format('YYYY-MM-DDTHH-mm-ss')}Z`,
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
