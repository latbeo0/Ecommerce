import { baseRequest } from "./apiFetch";

export const fetchGetAllCollection = async () => {
    try {
      return await baseRequest.get("/api/collection/", null);
    } catch (err) {
      console.log(err);
    }
  };
  export const fetchAddNewCollection = async (collection, token) => {
    try {
      return await baseRequest.post("/api/collection/", collection, {
        headers: { Authorization: token },
    });
    } catch (err) {
      throw err;
    }
  };
  export const fetchUpdateCollection = async (collection, id, token) => {
    try {
      return await baseRequest.put(`/api/collection/${id}`, collection, {
        headers: { Authorization: token },
    });
    } catch (err) {
      throw err;
    }
  };