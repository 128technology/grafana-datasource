'use strict';

System.register(['lodash', 'app/plugins/sdk', './css/query-editor.css!'], function (_export, _context) {
  "use strict";

  var _, QueryCtrl, _createClass, analytics, GenericDatasourceQueryCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }, function (_appPluginsSdk) {
      QueryCtrl = _appPluginsSdk.QueryCtrl;
    }, function (_cssQueryEditorCss) {}],
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

      analytics = ['bandwidth', 'utilization', 'gross_entitlement', 'packets_lost', 'payload', 'payload_ratio', 'retransmissions', 'session_count', 'session_arrivals', 'session_arrival_rate', 'session_departure_rate', 'time_to_first_packet', 'total_data', 'tx_data', 'rx_data', 'tx_rx_ratio', 'total_tcp_data', 'tx_tcp_data', 'rx_tcp_data', 'tcp_tx_rx_ratio', 'total_udp_data', 'tx_udp_data', 'rx_udp_data', 'udp_tx_rx_ratio', 'total_packets', 'tx_packets', 'rx_packets', 'tx_rx_packets_ratio', 'tx_packets_dropped', 'rx_packets_dropped', 'total_tcp_packets', 'tx_tcp_packets', 'rx_tcp_packets', 'tx_rx_tcp_packets_ratio', 'tx_tcp_packets_dropped', 'rx_tcp_packets_dropped', 'total_udp_packets', 'tx_udp_packets', 'rx_udp_packets', 'tx_rx_udp_packets_ratio', 'tx_udp_packets_dropped', 'rx_udp_packets_dropped', 'tx_tcp_retransmissions', 'rx_tcp_retransmissions'];

      _export('GenericDatasourceQueryCtrl', GenericDatasourceQueryCtrl = function (_QueryCtrl) {
        _inherits(GenericDatasourceQueryCtrl, _QueryCtrl);

        function GenericDatasourceQueryCtrl($scope, $injector, uiSegmentSrv, $q) {
          _classCallCheck(this, GenericDatasourceQueryCtrl);

          var _this = _possibleConstructorReturn(this, (GenericDatasourceQueryCtrl.__proto__ || Object.getPrototypeOf(GenericDatasourceQueryCtrl)).call(this, $scope, $injector));

          console.log(_this);

          _this.q = $q;
          _this.scope = $scope;
          _this.uiSegmentSrv = uiSegmentSrv;
          _this.target.metric = _this.target.metric || 'select metric';
          return _this;
        }

        _createClass(GenericDatasourceQueryCtrl, [{
          key: 'getMetricSegments',
          value: function getMetricSegments() {
            var _this2 = this;

            return this.q.resolve(analytics.map(function (x) {
              return _this2.uiSegmentSrv.newSegment({
                value: x
              });
            }));
          }
        }, {
          key: 'onChangeInternal',
          value: function onChangeInternal() {
            this.panelCtrl.refresh();
          }
        }]);

        return GenericDatasourceQueryCtrl;
      }(QueryCtrl));

      _export('GenericDatasourceQueryCtrl', GenericDatasourceQueryCtrl);

      GenericDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
    }
  };
});
//# sourceMappingURL=query_ctrl.js.map
