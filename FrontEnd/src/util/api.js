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

export { createUserApi };
