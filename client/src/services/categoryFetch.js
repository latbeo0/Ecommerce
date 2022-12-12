import { baseRequest } from "./apiFetch";

export const fetchGetAllCategory = async () => {
  try {
    return await baseRequest.get("/api/category/", null);
  } catch (err) {
    console.log(err);
  }
};
export const fetchAddNewCategory = async (category, token) => {
  try {
    return await baseRequest.post("/api/category/", category, {
      headers: { Authorization: token },
  });
  } catch (err) {
    throw err;
  }
};

export const fetchUpdateCategory = async (category, id, token) => {
  try {
    return await baseRequest.put(`/api/category/${id}`, category, {
      headers: { Authorization: token },
  });
  } catch (err) {
    throw err;
  }
};
