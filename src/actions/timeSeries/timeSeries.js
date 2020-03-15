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

export const fetchTimeSeries = () => {
	return async (dispatch) => {
		try {
			return await AxiosService.get(`${API_ENDPOINT}/data`, (status, data) => {
				dispatch(timeSeriesLoaded(data));
			});
		} catch (error) {
			console.log('Error');
		}
	};
};
