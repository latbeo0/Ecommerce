import { baseRequest } from './apiFetch';

export const fetchPayment = async (
    listOderItems,
    addressShipping,
    itemsPrice,
    totalPrice,
    userId
) => {
    return await baseRequest.post('/api/order/payment', {
        listOderItems,
        addressShipping,
        itemsPrice,
        totalPrice,
        userId,
    });
};
