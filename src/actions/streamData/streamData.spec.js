import { streamDataLoaded, streamDataRequested, fetchStreamData, streamDataError } from './streamData';
import * as ACTION_TYPES from 'constants/actionTypes';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axiosService from 'utils/axiosService';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const streamMockData = [
	{
		name: 'Moana',
		skygoTotalViews: 1324
	}
];

describe('Stream Data Actions', () => {
	describe('async actions', () => {
		let store;

		afterEach(() => {
			moxios.uninstall(axiosService.service);
		});

		beforeEach(() => {
			moxios.install(axiosService.service);
			store = mockStore({});
		});

		it('creates REQUEST_STREAMDATA & LOADED_STREAMDATA', (done) => {
			moxios.wait(() => {
				const request = moxios.requests.mostRecent();
				request.respondWith({
					status: 200,
					response: streamMockData
				});
			});

			const expectedActions = [
				{ type: ACTION_TYPES.REQUEST_STREAMDATA },
				{
					type: ACTION_TYPES.LOADED_STREAMDATA,
					payload: streamMockData
				}
			];

			return store.dispatch(fetchStreamData()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
				done();
			});
		});
	});

	it('streamDataRequested should return REQUEST_STREAMDATA action', () => {
		expect(streamDataRequested()).toEqual({
			type: ACTION_TYPES.REQUEST_STREAMDATA
		});
	});

	it('streamDataLoaded should return LOADED_STREAMDATA action', () => {
		expect(streamDataLoaded({ data: [] })).toEqual({
			type: ACTION_TYPES.LOADED_STREAMDATA,
			payload: {
				data: []
			}
		});
	});

	it('streamDataError should return REJECTED_STREAMDATA action', () => {
		expect(streamDataError({ errorMessage: [] })).toEqual({
			type: ACTION_TYPES.REJECTED_STREAMDATA,
			error: {
				errorMessage: []
			}
		});
	});
});
