import axios from "./axios.customize";

const getUsersApi = () => {
  const URL_API = "/api/user";
  return axios.get(URL_API);
};
const paymentApi = () => {
  const URL_API = "/api/user/payment";
  return axios.post(URL_API);
};
const getChat = (message) => {
  const URL_API = "/api/chat/response";
  return axios.post(URL_API, { message });
};
export { getUsersApi, paymentApi, getChat };
