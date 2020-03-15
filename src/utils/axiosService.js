import axios from 'axios';
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
			case 403:
				toast.error('Rate Limit Exceeded');
				break;
			case 404:
				toast.error('Oops! 404 Error');
				break;
			default:
				toast.error('Oops! Some Internal Error Found');
				break;
		}
		return Promise.reject(error);
	};

	get(path, callback) {
		return this.service.get(path).then((response) => callback(response.status, response.data));
	}
}

export default new AxiosService();
