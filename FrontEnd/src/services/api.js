import axios from "./axios.customize";

const createUserApi = (email, password) => {
  const URL_API = "/api/user/register";
  const data = {
    email: email,
    password: password,
    role: "user",
  };
  return axios.post(URL_API, data);
};

const loginApi = (email, password) => {
  const URL_API = "/api/user/login";
  const data = {
    email: email,
    password: password,
  };
  return axios.post(URL_API, data);
};

const getUsersApi = () => {
  const URL_API = "/api/user";
  return axios.get(URL_API);
};
const paymentApi = () => {
  const URL_API = "/api/user/payment";
  return axios.post(URL_API);
};

export { createUserApi, loginApi, getUsersApi, paymentApi };
