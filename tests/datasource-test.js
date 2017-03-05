/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import Q from 'q';
import { Datasource } from '../module';

describe('Datasource', () => {
  const ctx = {};

  beforeEach(() => {
    ctx.instanceSettings = {
      jsonData: 'token',
      type: 'type',
      url: 'url',
      name: 'name',
    };

    ctx.$q = Q;
    ctx.backendSrv = {};
    ctx.templateSrv = {};
    ctx.ds = new Datasource(ctx.instanceSettings, ctx.$q, ctx.backendSrv, ctx.templateSrv);
  });

  it('should return an empty array when no targets are set', () => {
    ctx.ds.query({ targets: [] }).then(result => {
      expect(result.data).to.have.length(0);
    });
  });

  it('tests the datasource successfully', () => {
    ctx.backendSrv.datasourceRequest = () => Q.resolve({
      status: 200,
      data: {
        data: {
          authority: {
            name: 'moomoocow',
          },
        },
      },
    });

    ctx.ds.testDatasource().then(result => {
      expect(result.status).to.equal('success');
    });
  });

  it('fails testing the datasource with bad status', () => {
    ctx.backendSrv.datasourceRequest = () => Q.resolve({
      status: 500,
    });

    ctx.ds.testDatasource().then(result => {
      expect(result.status).to.equal('error');
    });
  });

  it('fails testing the datasource w/ non-graph response', () => {
    ctx.backendSrv.datasourceRequest = () => Q.resolve({
      status: 200,
      data: 'hello',
    });

    ctx.ds.testDatasource().then(result => {
      expect(result.status).to.equal('error');
    });
  });
});
