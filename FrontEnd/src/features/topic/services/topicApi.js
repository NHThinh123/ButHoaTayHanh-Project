import axios from "../../../services/axios.customize";

const getTopicApi = () => {
  const URL_API = "api/topic";
  return axios.get(URL_API);
};

export { getTopicApi };
