import { timeSeriesLoaded, timeSeriesRequested  } from './timeSeries';
import * as ACTION_TYPES from 'constants/actionTypes';

describe('Time Series Actions', () => {
    it('timeSeriesRequested should return REQUEST_STREAMDATA action', () => {
		expect(timeSeriesRequested()).toEqual({
            type: ACTION_TYPES.REQUEST_TIMESERIES,
		});
    });
    
	it('timeSeriesLoaded should return LOADED_STREAMDATA action', () => {
		expect(timeSeriesLoaded({data:[]})).toEqual({
            type: ACTION_TYPES.LOADED_TIMESERIES,
            payload: {
                data: []
            }
		});
    });
});