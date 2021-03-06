import axios from 'axios'

var instance = axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: {"Content-type":"application/json;charset=UTF-8"}
});
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  export default instance
  