import * as ACTION_TYPES from 'constants/actionTypes';

export const initialState = {
	isLoaded: false,
	content: []
};

export default function streamData(state = initialState, action) {
	switch (action.type) {
		case ACTION_TYPES.REQUEST_STREAMDATA:
			return {
				...state,
				isLoaded: false
			};
		case ACTION_TYPES.LOADED_STREAMDATA:
			return {
				...state,
				content: action.payload,
				isLoaded: true
			};
		default:
			return state;
	}
}
