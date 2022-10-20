import axios from "axios";
import { baseRequest } from "./apiFetch";

export const fetchUploadImageProduct = async (formData, token) => {
  try {
    return await axios.post("/api/upload/upload_product", formData, {
      headers: {
        "content-type": "multipart/form-data",
        // Authorization: token,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchAddNewProduct = async (product, token) => {
  try {
    return await baseRequest.post("/api/product/", product);
  } catch (err) {
    throw err;
  }
};

export const fetchGetAllProducts = async () => {
  try {
    return await baseRequest.get("/api/product/", null);
  } catch (err) {
    console.log(err);
  }
};

export const fetchGetProduct = async (id) => {
  try {
    return await axios.get(`/api/product/find/${id}`, null);
  } catch (err) {
    console.log(2);
  }
};
export const fetchGetProductByName = async (name) => {
  return await axios.get(`/api/product/search/${name}`, null);
};
export const fetchUpdateProduct = async (product, id, token) => {
  try {
    // return await axios.put(`/api/product/${id}`, product, {
    //     headers: {
    //         Authorization: token,
    //     },
    // });
    return await baseRequest.put(`/api/product/${id}`, product);
  } catch (err) {
    console.log(2);
  }
};
