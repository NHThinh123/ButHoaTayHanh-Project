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

const likeTopicApi = (topicId) => {
  const URL_API = `api/topic/${topicId}/like`;
  return axios.put(URL_API);
};
const dislikeTopicApi = (topicId) => {
  const URL_API = `api/topic/${topicId}/dislike`;
  return axios.put(URL_API);
};
const updateTopicApi = (topicId, dataUpdate) => {
  const URL_API = `api/topic/${topicId}`;
  return axios.put(URL_API, dataUpdate);
};
const commentTopicApi = (toppicId, data) => {
  const URL_API = `api/topic/${toppicId}/comment`;
  return axios.put(URL_API, data);
};
const createTopicApi = (data) => {
  const URL_API = "api/topic";
  return axios.post(URL_API, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const deleteTopicApi = (topicId) => {
  const URL_API = `api/topic/${topicId}`;
  return axios.delete(URL_API);
};
export {
  getTopicApi,
  likeTopicApi,
  dislikeTopicApi,
  updateTopicApi,
  commentTopicApi,
  createTopicApi,
  deleteTopicApi,
};
