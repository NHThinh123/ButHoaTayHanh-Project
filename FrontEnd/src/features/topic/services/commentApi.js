import axios from "../../../services/axios.customize";

const getCommentApi = (topicId, filters, page, pageSize) => {
  const URL_API = "api/comment";
  return axios.get(URL_API, {
    params: {
      ...filters,
      page,
      topicId,
      limit: pageSize,
    },
  });
};
const createCommentApi = (data) => {
  const URL_API = "api/comment";
  return axios.post(URL_API, data);
};

export { getCommentApi, createCommentApi };
