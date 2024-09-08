import axios from "./axios.customize";

const createUserApi = (email, username, password) => {
  const URL_API = "/api/user/register";
  const data = {
    email: email,
    username: username,
    password: password,
    role: "user",
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

export { createUserApi, getUsersApi, paymentApi };
