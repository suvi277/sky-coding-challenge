import * as ACTION_TYPES from 'constants/actionTypes';
import { API_ENDPOINT } from 'constants/endpoint';
import axiosService from 'utils/axiosService';

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

export const streamDataError = (error) => {
	return {
		type: ACTION_TYPES.REJECTED_STREAMDATA,
		error
	};
};

export const fetchStreamData = () => {
	return (dispatch) => {
		dispatch(streamDataRequested());
		return axiosService.get(
			`${API_ENDPOINT}/assets`,
			(status, data) => {
				dispatch(streamDataLoaded(data));
			},
			(error) => {
				dispatch(streamDataError(error));
			}
		);
	};
};
