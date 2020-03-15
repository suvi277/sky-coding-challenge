import streamData, { initialState } from './streamData';
import * as ACTION_TYPES from 'constants/actionTypes';

describe('Stream Data Reducer', () => {
	it('should provide initial state', () => {
		expect(streamData(undefined, {})).toEqual(initialState);
	});

	describe('REQUEST_STREAMDATA', () => {
		it('should request the data and return false to isLoaded', () => {
			const state = {
				...initialState
			};

			expect(
				streamData(state, {
					type: ACTION_TYPES.REQUEST_STREAMDATA
				})
			).toEqual({
				...state,
				isLoaded: false
			});
		});
	});

	describe('LOADED_STREAMDATA', () => {
		const mockData = {
			testing: []
		};
		it('should load the mockData', () => {
			const state = {
				...initialState
			};

			expect(
				streamData(state, {
					type: ACTION_TYPES.LOADED_STREAMDATA,
					payload: mockData
				})
			).toEqual({
				...state,
				content: mockData,
				isLoaded: true
			});
		});
	});
});
