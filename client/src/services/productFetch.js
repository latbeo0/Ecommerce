import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseRequest } from './apiFetch';

export const fetchAddNewProductMaster = async (product, token) => {
    try {
        return await baseRequest.post('/api/product/master/', product, {
            headers: { Authorization: token },
        });
    } catch (err) {
        throw err;
    }
};

export const fetchGetAllProductMaster = async () => {
    try {
        return await baseRequest.get('/api/product/master/', null);
    } catch (err) {
        console.log(err);
    }
};

export const fetchGetProductMaster = async (id) => {
    try {
        return await baseRequest.get(`/api/product/find-master/${id}`, null);
    } catch (err) {
        console.log(2);
    }
};
export const fetchUpdateProductMaster = async (product, id, token) => {
    try {
        return await baseRequest.put(`/api/product/master/${id}`, product, {
            headers: { Authorization: token },
        });
    } catch (err) {
        console.log(2);
    }
};
export const fetchAddNewProduct = async (product, token) => {
    try {
        return await baseRequest.post('/api/product/', product, {
            headers: { Authorization: token },
        });
    } catch (err) {
        throw err;
    }
};

export const fetchGetAllProduct = async () => {
    try {
        return await baseRequest.get('/api/product/', null);
    } catch (err) {
        console.log(err);
    }
};

export const fetchGetProduct = async (id) => {
    try {
        return await baseRequest.get(`/api/product/find/${id}`, null);
    } catch (err) {
        console.log(2);
    }
};
export const fetchGetProductByDate = async (filter) => {
    try {
        return await baseRequest.post(`/api/product/find-by-date`, filter);
    } catch (err) {
        console.log(2);
    }
};
export const fetchGetProductByIdMaster = async (idm) => {
    try {
        return await baseRequest.get(`/api/product/find-master/${idm}`, null);
    } catch (err) {
        console.log(2);
    }
};
export const fetchUpdateProduct = async (product, id, token) => {
    try {
        return await baseRequest.put(`/api/product/${id}`, product, {
            headers: {
                Authorization: token,
            },
        });
    } catch (err) {
        console.log(2);
    }
};
export const fetchGetProductByName = async (name) => {
    return await baseRequest.get(`/api/product/search/${name}`, null);
};
export const fetchUploadImageProduct = async (formData, token) => {
    try {
        return await baseRequest.post('/api/upload/upload_product', formData, {
            headers: {
                'content-type': 'multipart/form-data',
                // "accept": "application/json",
                Authorization: token,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export const fetchGetProducts = createAsyncThunk(
    'products/getProducts',
    async ({ query, pageSize, pageIndex }) => {
        try {
            // const res = await baseRequest.get(
            //     `/api/product?pageSize=${pageSize}&pageIndex=${pageIndex}`,
            //     null
            // );
            const res = await baseRequest.get(
                `/api/product/test?${query}`,
                null
            );
            return res.data;
        } catch (error) {
            throw new Error(error.response.data.msg);
        }
    }
);

export const fetchGetProductById = async (id) => {
    try {
        return await baseRequest.get(`/api/product/find/${id}`);
    } catch (err) {
        throw err;
    }
};

export const fetchGetRelatedProducts = async (productId, collectionCode) => {
    try {
        return await baseRequest.post(
            `/api/product/find/collection/${collectionCode}`,
            { id: productId }
        );
    } catch (err) {
        throw err;
    }
};

export const fetchGetCommentsOfProduct = async (productId) => {
    try {
        return await baseRequest.post(`/api/product/getComments`, {
            id: productId,
        });
    } catch (err) {
        throw err;
    }
};

export const fetchGetProductsBestSeller = async () => {
    try {
        return await baseRequest.get(`/api/product/best-seller`, null);
    } catch (err) {
        throw err;
    }
};
