import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../helpers/Loading';
import { selectUser } from '../../redux/userSlice';
import { fetchClearCart } from '../../services/cartFetch';
import {
    fetchGetAllOrder1,
    fetchOrderByCode,
    fetchPaymentVnPayReturn,
    fetchRollBack,
} from '../../services/orderFetch';

const VnPayReturn = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const { currentUser } = useSelector(selectUser);

    useEffect(() => {
        const fetchVnPayReturn = async () => {
            const res = await fetchPaymentVnPayReturn(location.search);
            if (res.data.code === '00') {
                const data = res.data.description;
                const fetchOrder = async () => {
                    const res = await fetchOrderByCode(data);

                    const {
                        orderCode,
                        listOderItems,
                        addressShipping,
                        subPrice,
                        totalPrice,
                        userId,
                        payment,
                    } = await res.data.orders;

                    await dispatch(
                        fetchGetAllOrder1({ user: currentUser })
                    ).unwrap();
                    await dispatch(
                        fetchClearCart({ user: currentUser })
                    ).unwrap();

                    navigate(`/pay-successful`, {
                        state: {
                            code: 200,
                            orderCode,
                            listOderItems,
                            addressShipping,
                            subPrice,
                            totalPrice,
                            userId,
                            payment,
                        },
                    });
                };
                fetchOrder();
            } else {
                const data = res.data.description;

                const fetchOrder = async () => {
                    const res = await fetchOrderByCode(data);

                    const { orderCode, listOderItems } = await res.data.orders;

                    fetchRollBack(orderCode, listOderItems);

                    navigate(`/pay-successful`, {
                        state: {
                            code: 500,
                            msg: 'Transaction failed',
                        },
                    });
                };

                fetchOrder();
            }
        };
        fetchVnPayReturn();
    }, [location, dispatch, navigate, currentUser]);

    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <Loading />
        </div>
    );
};

export default VnPayReturn;
