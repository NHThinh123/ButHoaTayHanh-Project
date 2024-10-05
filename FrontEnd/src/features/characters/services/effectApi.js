import axios from "../../../services/axios.customize";

const getEffectApi = () => {
  const URL_API = "api/effect";
  return axios.get(URL_API);
};

const createEffectApi = (data) => {
  const URL_API = "api/effect";
  return axios.post(URL_API, data);
};
export { getEffectApi, createEffectApi };
