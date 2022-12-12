import { baseRequest } from "./apiFetch";

export const fetchPayment = async (
  orderCode,
  listOderItems,
  addressShipping,
  subPrice,
  totalPrice,
  userId,
  payment
) => {
  return await baseRequest.post('/api/order/payment', {
      orderCode,
      listOderItems,
      addressShipping,
      subPrice,
      totalPrice,
      userId,
      payment,
  });
};
export const fetchGetOrderByDate = async (filter, token) => {
  try {
    return await baseRequest.post("/api/order/find-by-date", filter, {
      headers: { Authorization: token },
    });
  } catch (err) {
    throw err;
  }
};
export const fetchGetAllOrder = async (token) => {
  try {
    return await baseRequest.get("/api/order/find-all", {
      headers: { Authorization: token },
    });
  } catch (err) {
    throw err;
  }
};
