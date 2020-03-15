import axios from 'axios';
import { history } from 'store';
import { toast } from 'react-toastify';

class AxiosService {
	constructor() {
		let service = axios.create();
		service.interceptors.response.use(this.onSuccess, this.onError);
		this.service = service;
	}

	onSuccess(response) {
		return response;
	}

	onError = (error) => {
		switch (error.response.status) {
			case 404:
				history.push('/not-found');
				break;
			default:
				toast.error('Oops! Some Internal Error Found');
				break;
		}
		return Promise.reject(error);
	};

	get(path, callback, errorCallBack) {
		return this.service
			.get(path)
			.then((response) => callback(response.status, response.data))
			.catch((error) => errorCallBack(error));
	}
}

export default new AxiosService();
