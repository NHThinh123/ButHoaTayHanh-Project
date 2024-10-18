import axios from "../../../services/axios.customize";

const getTopicApi = (filters, page, pageSize) => {
  const URL_API = "api/topic";
  return axios.get(URL_API, {
    params: {
      ...filters,
      page,
      limit: pageSize,
    },
  });
};

const updateTopicApi = (topicId, dataUpdate) => {
  const URL_API = `api/topic/${topicId}`;
  return axios.put(URL_API, dataUpdate);
};

export { getTopicApi, updateTopicApi };
