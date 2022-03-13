import axios from "axios";
import Toast from "react-native-toast-message";

let headers = {};

export const setHeader = async (token) => {
  headers.Authorization = `Bearer ${token}`;
  console.log("header", headers)
};

export default () => {
  const baseURL = "https://mvn-task-manager.work/";

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  });

  // axiosInstance.interceptors.response.use(
  //   (response) =>
  //     new Promise((resolve, reject) => {
  //       resolve(response);
  //     }),
  //   (error) => {
  //     if (!error.response) {
  //       return new Promise((resolve, reject) => {
  //         reject(error);
  //       });
  //     }

  //     const status = error.response.status;
  //     switch (status) {
  //       // Authen
  //       case 401: {
  //         Toast.show({
  //           type: "error",
  //           text1: `Code : ${error.response.data.code}`,
  //           text2: error.response.data.message,
  //           visibilityTime: 5000,
  //         });

  //         // window.location.reload();
  //         // toast.error("Token not acceept authorization");
  //         break;
  //       }
  //       // Many Request
  //       case 429: {
  //         Toast.show({
  //           type: "error",
  //           text1: `Code : ${error.response.data.code}`,
  //           text2: error.response.data.message,
  //           visibilityTime: 5000,
  //         });
  //         // setTimeout(() => {
  //         //   window.location.reload();
  //         // }, 10000);

  //         // toast.error("Too many request, wait 10 second and auto refresh");
  //         break;
  //       }
  //       default: {
  //         return new Promise((resolve, reject) => {
  //           reject(error);
  //         });
  //       }
  //     }
  //   }
  // );

  return axiosInstance;
};
