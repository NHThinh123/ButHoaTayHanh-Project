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
const getCharacterInfoApi = (id) => {
  const URL_API = `api/character/${id}`;
  return axios.get(URL_API);
};
const createCharacterApi = (data) => {
  const URL_API = "api/character";
  return axios.post(URL_API, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const deleteCharacterApi = (id) => {
  const URL_API = `api/character/${id}`;
  return axios.delete(URL_API);
};
export {
  getCharacterApi,
  getCharacterInfoApi,
  createCharacterApi,
  deleteCharacterApi,
};
