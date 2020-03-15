import { streamDataLoaded, streamDataRequested  } from './streamData';
import * as ACTION_TYPES from 'constants/actionTypes';

describe('Stream Data Actions', () => {
    it('streamDataRequested should return REQUEST_STREAMDATA action', () => {
		expect(streamDataRequested()).toEqual({
            type: ACTION_TYPES.REQUEST_STREAMDATA,
		});
    });

	it('streamDataLoaded should return LOADED_STREAMDATA action', () => {
		expect(streamDataLoaded({data:[]})).toEqual({
            type: ACTION_TYPES.LOADED_STREAMDATA,
            payload: {
                data: []
            }
		});
    });
});