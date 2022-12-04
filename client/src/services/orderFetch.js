import { baseRequest } from './apiFetch';

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
