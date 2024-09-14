import axios from "../../../services/axios.customize";

const getCharacterApi = () => {
  const URL_API = "api/character";
  return axios.get(URL_API);
};
export { getCharacterApi };
