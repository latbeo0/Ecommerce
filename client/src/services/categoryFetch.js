import { baseRequest } from "./apiFetch";

export const fetchGetAllCategory = async () => {
  try {
    return await baseRequest.get("/api/category/", null);
  } catch (err) {
    console.log(err);
  }
};
export const fetchAddNewCategory = async (user, token) => {
  try {
    return await baseRequest.post("/api/category/", user);
  } catch (err) {
    throw err;
  }
};
export const fetchUpdateCategory = async (user, id, token) => {
  try {
    return await baseRequest.put(`/api/category/${id}`, user);
  } catch (err) {
    throw err;
  }
};
