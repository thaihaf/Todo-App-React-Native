// import axios from "axios";
// import Toast from "react-native-toast-message";
// import * as SecureStore from 'expo-secure-store';

// const baseURL = "https://mvn-task-manager.work/";
// let headers = {};

// const setHeader = async () => {
// 	const token = await SecureStore.getItemAsync("token");
// 	console.log(to);
// 	headers.Authorization = `Bearer ${token}`;

// };

// export default () => {
// 	setHeader()

// 	const axiosInstance = axios.create({
// 		baseURL: baseURL,
// 		headers,
// 	});

// 	// axiosInstance.interceptors.response.use(
// 	//   (response) =>
// 	//     new Promise((resolve, reject) => {
// 	//       resolve(response);
// 	//     }),
// 	//   (error) => {
// 	//     if (!error.response) {
// 	//       return new Promise((resolve, reject) => {
// 	//         reject(error);
// 	//       });
// 	//     }

// 	//     const status = error.response.status;
// 	//     switch (status) {
// 	//       // Authen
// 	//       case 401: {
// 	//         Toast.show({
// 	//           type: "error",
// 	//           text1: `Code : ${error.response.data.code}`,
// 	//           text2: error.response.data.message,
// 	//           visibilityTime: 5000,
// 	//         });

// 	//         // window.location.reload();
// 	//         // toast.error("Token not acceept authorization");
// 	//         break;
// 	//       }
// 	//       // Many Request
// 	//       case 429: {
// 	//         Toast.show({
// 	//           type: "error",
// 	//           text1: `Code : ${error.response.data.code}`,
// 	//           text2: error.response.data.message,
// 	//           visibilityTime: 5000,
// 	//         });
// 	//         // setTimeout(() => {
// 	//         //   window.location.reload();
// 	//         // }, 10000);

// 	//         // toast.error("Too many request, wait 10 second and auto refresh");
// 	//         break;
// 	//       }
// 	//       default: {
// 	//         return new Promise((resolve, reject) => {
// 	//           reject(error);
// 	//         });
// 	//       }
// 	//     }
// 	//   }
// 	// );

// 	return axiosInstance;
// };

// export { setHeader }

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
	}, (error) => { // block to handle error case
		if (!error.response) {
			return new Promise((resolve, reject) => {
				reject(error)
			})
		}
		navigate(NavigationStrings.LOGOUT)
	});

export default instance;