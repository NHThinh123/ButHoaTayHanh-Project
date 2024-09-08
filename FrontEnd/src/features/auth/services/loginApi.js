import axios from "../../../services/axios.customize";
const loginApi = (email, password) => {
  const URL_API = "/api/user/login";
  const data = {
    email: email,
    password: password,
  };
  return axios.post(URL_API, data);
};

export { loginApi };
