import axios from "../../../services/axios.customize";

const getCharacterApi = (filters, page, pageSize) => {
  const URL_API = "api/character";
  return axios.get(URL_API, {
    params: {
      ...filters,
      page,
      limit: pageSize,
    },
  });
};
export { getCharacterApi };
