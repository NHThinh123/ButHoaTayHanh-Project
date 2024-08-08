import axios from "./axios.customize";

const createUserApi = (userName, password) => {
  const URL_API = "/api/user/";
  const data = {
    userName: userName,
    password: password,
    role: "user",
  };
  return axios.post(URL_API, data);
};

export { createUserApi };
