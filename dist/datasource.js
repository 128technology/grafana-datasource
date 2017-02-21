'use strict';

System.register(['lodash', 'moment'], function (_export, _context) {
  "use strict";

  var _, moment, _createClass, GenericDatasource;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }, function (_moment) {
      moment = _moment.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('GenericDatasource', GenericDatasource = function () {
        function GenericDatasource(instanceSettings, $q, backendSrv, templateSrv) {
          _classCallCheck(this, GenericDatasource);

          this.token = instanceSettings.jsonData.token;
          this.type = instanceSettings.type;
          this.url = instanceSettings.url;
          this.name = instanceSettings.name;
          this.q = $q;
          this.backendSrv = backendSrv;
          this.templateSrv = templateSrv;
        }

        _createClass(GenericDatasource, [{
          key: 'query',
          value: function query(options) {
            var _this = this;

            var requests = options.targets.filter(function (t) {
              return !t.hide;
            }).map(function (x) {
              var target = _this.templateSrv.replace(x.target);
              var parameters = target.split(',').map(function (x) {
                return x.trim();
              }).map(function (x) {
                var args = x.split('=');
                return { name: _.toLower(args[0]), value: args[1] };
              });

              return _this.backendSrv.datasourceRequest({
                url: _this.url + '/api/v1/analytics/runningTransform',
                data: {
                  metric: x.metric,
                  transform: 'sum',
                  parameters: parameters,
                  window: {
                    end: moment(options.range.to).utc().format('YYYY-MM-DDTHH-mm-ss') + 'Z',
                    start: moment(options.range.from).utc().format('YYYY-MM-DDTHH-mm-ss') + 'Z',
                    resolution: options.intervalMs / 1000
                  }
                },
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + _this.token
                }
              }).then(function (resp) {
                return {
                  target: x.alias || target,
                  datapoints: resp.data.map(function (p) {
                    return [p.value, moment(p.date).unix() * 1000];
                  })
                };
              });
            });

            return this.q.all(requests).then(function (x) {
              return {
                data: x
              };
            });
          }
        }, {
          key: 'testDatasource',
          value: function testDatasource() {
            return this.graphQuery('query { authority { name } }').then(function (response) {
              if (response.status !== 200) {
                return { status: "error", message: 'Target returned a ' + response.status, title: "Error" };
              }

              if (_.get(response, 'data.data.authority.name', null) === null) {
                return { status: "error", message: 'Connection successful but query returned invalid data.', title: "Error" };
              }

              return { status: "success", message: "Data source is working", title: "Success" };
            });
          }
        }, {
          key: 'annotationQuery',
          value: function annotationQuery(options) {
            return this.backendSrv.datasourceRequest({
              url: this.url + '/api/v1/alarm',
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
              }
            }).then(function (result) {
              return result.data.map(function (alarm, idx) {
                return {
                  annotation: {
                    name: 'Alarm #' + alarm.number,
                    datasource: options.annotation.datasource,
                    enable: options.annotation.enable,
                    showLine: true
                  },
                  title: 'Alarm #' + alarm.number,
                  time: moment(alarm.time).unix() * 1000 + idx,
                  text: alarm.message,
                  tags: alarm.severity
                };
              });
            });
          }
        }, {
          key: 'graphQuery',
          value: function graphQuery(query, variables) {
            return this.backendSrv.datasourceRequest({
              url: this.url + '/api/v1/graphql',
              data: { query: query, variables: variables },
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
              }
            });
          }
        }]);

        return GenericDatasource;
      }());

      _export('GenericDatasource', GenericDatasource);
    }
  };
});
//# sourceMappingURL=datasource.js.map
