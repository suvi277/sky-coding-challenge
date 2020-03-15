import * as ACTION_TYPES from 'constants/actionTypes';
import { API_ENDPOINT } from 'constants/endpoint';
import AxiosService from 'utils/axiosService';

export const streamDataRequested = () => {
	return {
		type: ACTION_TYPES.REQUEST_STREAMDATA
	};
};

export const streamDataLoaded = (payload) => {
	return {
		type: ACTION_TYPES.LOADED_STREAMDATA,
		payload
	};
};

export const fetchStreamData = () => {
	return (dispatch) => {
		dispatch(streamDataRequested());
		return AxiosService.get(
			`${API_ENDPOINT}/assets`,
			(status, data) => {
				dispatch(streamDataLoaded(data));
			}
		);
	};
};
