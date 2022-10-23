import { baseRequest } from "./apiFetch";

export const fetchGetAllCollection = async () => {
    try {
      return await baseRequest.get("/api/collection/", null);
    } catch (err) {
      console.log(err);
    }
  };
  export const fetchAddNewCollection = async (user, token) => {
    try {
      return await baseRequest.post("/api/collection/", user);
    } catch (err) {
      throw err;
    }
  };
  export const fetchUpdateCollection = async (user, id, token) => {
    try {
      return await baseRequest.put(`/api/collection/${id}`, user);
    } catch (err) {
      throw err;
    }
  };