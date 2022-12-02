import { baseRequest } from "./apiFetch";
export const getSaleCode = async () => {
  try {
    return await baseRequest.get("/api/sale/code", null);
  } catch (err) {
    console.log(err);
  }
};
export const fetchGetAllSale = async () => {
  try {
    return await baseRequest.get("/api/sale/", null);
  } catch (err) {
    console.log(err);
  }
};
export const fetchAddNewSale = async (user, token) => {
  try {
    return await baseRequest.post("/api/sale/", user);
  } catch (err) {
    throw err;
  }
};
export const fetchUpdateSale = async (user, id, token) => {
  try {
    return await baseRequest.put(`/api/sale/${id}`, user);
  } catch (err) {
    throw err;
  }
};
