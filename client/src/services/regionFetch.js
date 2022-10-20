import axios from "axios";

export const fetchAllCity = async () => {
  return await axios.get(`https://provinces.open-api.vn/api/p/`);
};
export const fetchCityByCode = async (code, depth) => {
    if (!depth) depth = 1;
    return await axios.get(`https://provinces.open-api.vn/api/p/${code}?depth=${depth}`);
  };
