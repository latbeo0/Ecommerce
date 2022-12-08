import { baseRequest } from "./apiFetch";

export const fetchGetAllSale = async () => {
  try {
    return await baseRequest.get("/api/sale/", null);
  } catch (err) {
    throw (err);
  }
};
export const fetchAddNewSale = async (sale, token) => {
  try {
    return await baseRequest.post("/api/sale/", sale, {
      headers: { Authorization: token },
  });
  } catch (err) {
    throw err;
  }
};
export const fetchUpdateSale = async (sale, id, token) => {
  try {
    return await baseRequest.put(`/api/sale/${id}`, sale, {
      headers: { Authorization: token },
  });
  } catch (err) {
    throw err;
  }
};
