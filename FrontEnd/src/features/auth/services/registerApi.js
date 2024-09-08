import axios from "../../../services/axios.customize";

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

export { createUserApi };
