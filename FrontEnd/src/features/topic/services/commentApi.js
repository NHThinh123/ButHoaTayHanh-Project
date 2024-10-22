import axios from "../../../services/axios.customize";

const getCommentApi = (filters, page, pageSize) => {
  const URL_API = "api/topic";
  return axios.get(URL_API, {
    params: {
      ...filters,
      page,
      limit: pageSize,
    },
  });
};
const createCommentApi = (data) => {
  const URL_API = "api/comment";
  return axios.post(URL_API, data);
};

export { getCommentApi, createCommentApi };
