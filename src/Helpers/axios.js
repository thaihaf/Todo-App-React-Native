import * as SecureStore from 'expo-secure-store';
import * as axios from "axios";
import { navigate } from '../Navigation/RootNavigation';
import NavigationStrings from '../Contants/NavigationStrings';

const instance = axios.create({
	baseURL: 'https://mvn-task-manager.work/'
});

instance.interceptors.request.use(
	async (config) => {
		const token = await SecureStore.getItemAsync("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		config.headers['Content-Type'] = 'application/json';
		return config;
	},
	error => Promise.reject(error)
);

instance.interceptors.response.use(
	(response) => { // block to handle success case
		return response
	}, async (error) => { // block to handle error case
		if (!error.response) {
			return new Promise((resolve, reject) => {
				reject(error)
			})
		}

		const errorCode = error.response.status;
		const token = await SecureStore.getItemAsync("token");

		if (((errorCode == 401 || errorCode == 403) && token)) {
			navigate(NavigationStrings.LOGOUT)
		} else {
			return new Promise((resolve, reject) => {
				reject(error)
			})
		}
	});

export default instance;