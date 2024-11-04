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
const likeCommentApi = (commentId) => {
  const URL_API = `api/comment/${commentId}/like`;
  return axios.put(URL_API);
};
const dislikeCommentApi = (commentId) => {
  const URL_API = `api/comment/${commentId}/dislike`;
  return axios.put(URL_API);
};
export { getCommentApi, createCommentApi, likeCommentApi, dislikeCommentApi };
