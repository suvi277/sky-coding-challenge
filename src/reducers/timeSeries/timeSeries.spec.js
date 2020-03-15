import timeSeries, { initialState } from './timeSeries';
import * as ACTION_TYPES from 'constants/actionTypes';

describe('Stream Data Reducer', () => {
	it('should provide initial state', () => {
		expect(timeSeries(undefined, {})).toEqual(initialState);
	});

	describe('REQUEST_TIMESERIES', () => {
		it('should request the data and return false to isLoaded', () => {
			const state = {
				...initialState
			};

			expect(
				timeSeries(state, {
					type: ACTION_TYPES.REQUEST_TIMESERIES
				})
			).toEqual({
				...state,
				isLoaded: false
			});
		});
	});

	describe('LOADED_TIMESERIES', () => {
		const mockData = {
			testing: []
		};
		it('should load the mockData', () => {
			const state = {
				...initialState
			};

			expect(
				timeSeries(state, {
					type: ACTION_TYPES.LOADED_TIMESERIES,
					payload: mockData
				})
			).toEqual({
				...state,
				data: mockData,
				isLoaded: true
			});
		});
	});
});
