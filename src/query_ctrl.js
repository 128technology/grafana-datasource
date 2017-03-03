/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-webpack-loader-syntax */

import { QueryCtrl } from 'app/plugins/sdk';
import './css/query-editor.css!';

const analytics = [
  'bandwidth',
  'utilization',
  'gross_entitlement',
  'packets_lost',
  'payload',
  'payload_ratio',
  'retransmissions',
  'session_count',
  'session_arrivals',
  'session_arrival_rate',
  'session_departure_rate',
  'time_to_first_packet',
  'total_data',
  'tx_data',
  'rx_data',
  'tx_rx_ratio',
  'total_tcp_data',
  'tx_tcp_data',
  'rx_tcp_data',
  'tcp_tx_rx_ratio',
  'total_udp_data',
  'tx_udp_data',
  'rx_udp_data',
  'udp_tx_rx_ratio',
  'total_packets',
  'tx_packets',
  'rx_packets',
  'tx_rx_packets_ratio',
  'tx_packets_dropped',
  'rx_packets_dropped',
  'total_tcp_packets',
  'tx_tcp_packets',
  'rx_tcp_packets',
  'tx_rx_tcp_packets_ratio',
  'tx_tcp_packets_dropped',
  'rx_tcp_packets_dropped',
  'total_udp_packets',
  'tx_udp_packets',
  'rx_udp_packets',
  'tx_rx_udp_packets_ratio',
  'tx_udp_packets_dropped',
  'rx_udp_packets_dropped',
  'tx_tcp_retransmissions',
  'rx_tcp_retransmissions',
];

export default class GenericDatasourceQueryCtrl extends QueryCtrl {

  constructor($scope, $injector, uiSegmentSrv, $q) {
    super($scope, $injector);

    this.q = $q;
    this.scope = $scope;
    this.uiSegmentSrv = uiSegmentSrv;
    this.target.metric = this.target.metric || 'select metric';
  }

  getMetricSegments() {
    return this.q.resolve(analytics.map(x => this.uiSegmentSrv.newSegment({
      value: x,
    })));
  }

  onChangeInternal() {
    this.panelCtrl.refresh();
  }
}

GenericDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';

