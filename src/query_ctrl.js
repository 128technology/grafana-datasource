/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-webpack-loader-syntax */

import _ from 'lodash';
import { QueryCtrl } from 'app/plugins/sdk';
import metrics from './metrics';
import './css/query-editor.css!';

const transforms = ['average', 'sum', 'min', 'max'];

export default class GenericDatasourceQueryCtrl extends QueryCtrl {
  constructor($scope, $injector, uiSegmentSrv, $q) {
    super($scope, $injector);

    this.q = $q;
    this.scope = $scope;
    this.uiSegmentSrv = uiSegmentSrv;
    this.target.metric = this.target.metric;
    this.target.transform = this.target.transform || 'sum';
    this.target.params = this.target.params || {};
    this.metricMap = _.keyBy(metrics, x => x.ID);

    this.routerCache = null;
    this.permutationsCache = null;

    this.whereSegments = this.createWhereSegments(this.target.params);
    this.metricSegment = uiSegmentSrv.getSegmentForValue(this.target.metric, 'select metric');
    this.routerSegment = uiSegmentSrv.getSegmentForValue(this.target.router, 'select router');
  }

  getMetricSegments() {
    const segments = metrics.map(x => this.uiSegmentSrv.newKeyValue(x.ID));
    return this.q.resolve(segments);
  }

  getMetricTransforms() {
    const segments = transforms.map(x => this.uiSegmentSrv.newKeyValue(x));
    return this.q.resolve(segments);
  }

  getRouterSegments() {
    if (!this.routerCache) {
      this.routerCache = this.datasource
        .getRouters()
        .then(routers => routers.map(x => this.uiSegmentSrv.newKeyValue(x.name)));
    }

    return this.routerCache;
  }

  getPermutations() {
    const metric = this.metricMap[this.target.metric];
    if (_.isNil(metric)) {
      return this.q.reject(new Error('no metric selected'));
    }

    if (!this.permutationsCache) {
      this.permutationsCache = this.datasource.getPermutations(metric.ID, metric.Keys, this.target.router);
    }

    return this.permutationsCache;
  }

  onAnalyticChanged() {
    this.target.params = {};
    this.permutationsCache = null;

    const metric = this.metricMap[this.target.metric];
    if (_.isNil(metric) || _.isNil(this.target.router)) {
      return;
    }

    this.whereSegments = [];
    this.getPermutations().then(permutations => {
      this.whereSegments = this.createWhereSegments(permutations);
    });
  }

  createWhereSegments(params) {
    const whereSegments = [];

    _.forEach(params, (val, key) => {
      whereSegments.push({
        type: 'label',
        value: `${key}:`
      });

      const segment = this.uiSegmentSrv.getSegmentForValue(this.target.params[key], `select ${key}`);

      whereSegments.push({
        segment,
        type: 'segment',
        getOptions: () => {
          return this.getPermutations().then(x => _.map(x[key], y => this.uiSegmentSrv.newKeyValue(y)));
        },
        onChanged: () => {
          this.target.params[key] = segment.value;
          this.onChangeInternal();
        }
      });
    });

    return whereSegments;
  }

  onMetricChanged() {
    this.target.metric = this.metricSegment.value;
    this.onAnalyticChanged();
  }

  onRouterChanged() {
    this.target.router = this.routerSegment.value;
    this.onAnalyticChanged();
  }

  onChangeInternal() {
    if (_.isNil(this.target.router) || _.isNil(this.target.transform) || _.some(this.target.params, _.isNil)) {
      return;
    }

    this.panelCtrl.refresh();
  }
}

GenericDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
