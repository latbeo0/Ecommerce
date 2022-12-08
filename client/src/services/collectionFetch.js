import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseRequest } from "./apiFetch";

// export const fetchGetAllCollection = async () => {
//     try {
//       return await baseRequest.get("/api/collection/", null);
//     } catch (err) {
//       console.log(err);
//     }
//   };

export const fetchGetAllCollection = createAsyncThunk(
    "state/fetchGetAllCollection",
    async () => {
        try {
            const res = await baseRequest.get("/api/collection/");
            return [...res.data.collection];
        } catch (error) {
            // if (!error.response) throw error;
            throw new Error(error.response.data.msg);
        }
    }
);

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
