/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-webpack-loader-syntax */

import { QueryCtrl } from 'app/plugins/sdk';
import './css/query-editor.css!';

const analytics = [
  'bandwidth',
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
  'total_packets',
  'tx_packets',
  'rx_packets',
  'tx_rx_packets_ratio',
  'tx_packets_dropped',
  'rx_packets_dropped',
];

const transforms = [
  'average',
  'sum',
  'min',
  'max',
];

export default class GenericDatasourceQueryCtrl extends QueryCtrl {

  constructor($scope, $injector, uiSegmentSrv, $q) {
    super($scope, $injector);

    this.q = $q;
    this.scope = $scope;
    this.uiSegmentSrv = uiSegmentSrv;
    this.target.metric = this.target.metric || 'select metric';
    this.target.transform = this.target.transform || 'sum';
  }

  getMetricSegments() {
    return this.q.resolve(analytics.map(x => this.uiSegmentSrv.newSegment({
      value: x,
    })));
  }

  getMetricTransforms() {
    return this.q.resolve(transforms.map(x => this.uiSegmentSrv.newSegment({
      value: x,
    })));
  }

  onChangeInternal() {
    this.panelCtrl.refresh();
  }
}

GenericDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';

