import * as ACTION_TYPES from 'constants/actionTypes';

export const initialState = {
	isLoaded: false,
	data: []
};

export default function timeSeries(state = initialState, action) {
	switch (action.type) {
		case ACTION_TYPES.REQUEST_TIMESERIES:
			return {
				...state,
				isLoaded: false
			};
		case ACTION_TYPES.LOADED_TIMESERIES:
			return {
				...state,
				data: action.payload,
				isLoaded: true
			};
		default:
			return state;
	}
}
