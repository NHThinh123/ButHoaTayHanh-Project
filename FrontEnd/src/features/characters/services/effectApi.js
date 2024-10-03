import axios from "../../../services/axios.customize";

const getEffectApi = () => {
  const URL_API = "api/effect";
  return axios.get(URL_API);
};

export { getEffectApi };
