import { timeSeriesLoaded, timeSeriesRequested, timeSeriesRejected, fetchTimeSeries } from './timeSeries';
import * as ACTION_TYPES from '../../constants/actionTypes';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axiosService from 'utils/axiosService';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const timeSeriesMockData = [
	{
		values: 350,
		timestamp: 13245500
	}
];

describe('Time Series Actions', () => {
	describe('async actions', () => {
		let store;

		afterEach(() => {
			moxios.uninstall(axiosService.service);
		});

		beforeEach(() => {
			moxios.install(axiosService.service);
			store = mockStore({});
		});

		it('creates REQUEST_TIMESERIES & LOADED_TIMESERIES', (done) => {
			moxios.wait(() => {
				const request = moxios.requests.mostRecent();
				request.respondWith({
					status: 200,
					response: timeSeriesMockData
				});
			});

			const expectedActions = [
				{ type: ACTION_TYPES.REQUEST_TIMESERIES },
				{
					type: ACTION_TYPES.LOADED_TIMESERIES,
					payload: timeSeriesMockData
				}
			];

			return store.dispatch(fetchTimeSeries()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
				done();
			});
		});
	});

	it('timeSeriesRequested should return REQUEST_TIMESERIES action', () => {
		expect(timeSeriesRequested()).toEqual({
			type: ACTION_TYPES.REQUEST_TIMESERIES
		});
	});

	it('timeSeriesLoaded should return LOADED_STREAMDATA action', () => {
		expect(timeSeriesLoaded({ data: [] })).toEqual({
			type: ACTION_TYPES.LOADED_TIMESERIES,
			payload: {
				data: []
			}
		});
	});

	it('timeSeriesRejected should return REJECTED_STREAMDATA action', () => {
		expect(timeSeriesRejected({ errorMessage: [] })).toEqual({
			type: ACTION_TYPES.REJECTED_TIMESERIES,
			error: {
				errorMessage: []
			}
		});
	});
});
