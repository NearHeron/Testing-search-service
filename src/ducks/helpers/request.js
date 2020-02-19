import axios from "axios";
import humps from "humps"
import  { BASE_URL, BASE_URL_TEST } from "./config";

const request = axios.create({
  baseURL: BASE_URL_TEST,
});

/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */

/**
 * Request interceptor for format data
 */
request.interceptors.request.use(requestMapper);

/**
 * Response interceptors for send and check response
 */
request.interceptors.response.use(responseMapper, errorHandler);

/**
 * Separates camelCased object keys with an underscore
 *
 * @param {AxiosRequestConfig} config - server's request
 * @return {AxiosRequestConfig}
 */
function requestMapper(config) {
  if (config.data && !(config.data instanceof FormData)) {
    const decamelizedData = humps.decamelizeKeys(config.data);
    delete config.data;
    config.data = decamelizedData;
  }

  return config;
}

/**
 * Converts object keys to camelCase
 *
 * @param {AxiosResponse} response - server's response
 * @return {Promise.<Object>}
 */
function responseMapper(response) {
  return Promise.resolve(humps.camelizeKeys(response.data.data));
}

/**
 * Check response for errors
 * This handler is specific for project
 *
 * @param {AxiosResponse} data - server's response
 * @return {Promise.<Object>}
 */
function errorHandler(data) {
  const { response } = data;
  const newError = {};
  newError.statusCode = response.status;
  newError.statusMessage = response.statusText;
  console.log(response);
  newError.errorCode = parseJSON(
    response.data && response.data.error.errorMessage,
  );

  return Promise.reject(newError);
}

/**
 * Parse json if needed
 *
 * @param {*} data
 * @return {Object|*}
 */
function parseJSON(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
}

export default request;
