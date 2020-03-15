import * as ACTION_TYPES from 'constants/actionTypes';
import { API_ENDPOINT } from 'constants/endpoint';
import AxiosService from 'utils/axiosService';

export const timeSeriesRequested = () => {
	return {
		type: ACTION_TYPES.REQUEST_TIMESERIES
	};
};

export const timeSeriesLoaded = (payload) => {
	return {
		type: ACTION_TYPES.LOADED_TIMESERIES,
		payload
	};
};

export const timeSeriesRejected = (error) => {
	return {
		type: ACTION_TYPES.REJECTED_TIMESERIES,
		error
	};
};

export const fetchTimeSeries = () => {
	return (dispatch) => {
		dispatch(timeSeriesRequested());
		return AxiosService.get(
			`${API_ENDPOINT}/data`,
			(status, data) => {
				dispatch(timeSeriesLoaded(data));
			},
			(error) => {
				dispatch(timeSeriesRejected(error));
			}
		);
	};
};
