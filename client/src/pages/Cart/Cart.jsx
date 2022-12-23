import React, { useEffect, useState } from 'react';
import BreadCrumb from '../../components/Basic/BreadCrumb';
import {
    Container,
    Wrapper,
    StepsCart,
    FormCheckout,
    ContentForm,
    SummaryContainer,
    ButtonsForm,
    Button,
} from './CartStyled';
import { useMultiStepForm } from './../../hooks/useMultiStepForm';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsTruck } from 'react-icons/bs';
import UserInfoForm from '../../components/User/UserInfoForm';
import CartForm from '../../components/User/CartForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart } from '../../redux/cartSlice';
import {
    fetchGetAllOrder1,
    fetchPayment,
    fetchPaymentVnPay,
} from '../../services/orderFetch';
import { getErrorMessage } from '../../helpers/validation';
import PaymentForm from '../../components/User/PaymentForm/PaymentForm';
import { toast } from 'react-toastify';
import { formatCurrencyVND } from './../../utils/format';
import { selectUser } from '../../redux/userSlice';
import Loading from '../../helpers/Loading';
import emptyCartImg from '../../assets/img/empty-cart.png';
import { useNavigate } from 'react-router-dom';
import { fetchClearCart, fetchGetCart } from '../../services/cartFetch';

const INITIAL_DATA = {
    listOrderItem: [],
    userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        province: '',
        district: '',
        ward: '',
        address: '',
    },
    payment: {
        type: '',
        bank: '',
    },
};

const inputs = {
    userInfo: [
        {
            id: 1,
            type: 'text',
            name: 'firstName',
            patterns: ['required'],
            label: 'First name *',
        },
        {
            id: 2,
            type: 'text',
            name: 'lastName',
            patterns: ['required'],
            label: 'Last name *',
        },
        {
            id: 3,
            type: 'email',
            name: 'email',
            patterns: ['required', 'email'],
            label: 'Email *',
        },
    ],
    addressShipping: [
        {
            id: 4,
            type: 'phone',
            name: 'phone',
            patterns: ['required'],
            label: 'Phone *',
        },
        {
            id: 5,
            name: 'province',
            patterns: ['required'],
        },
        {
            id: 6,
            name: 'district',
            patterns: ['required'],
        },
        {
            id: 7,
            name: 'ward',
            patterns: ['required'],
        },
        {
            id: 8,
            type: 'text',
            name: 'address',
            patterns: ['required'],
            label: 'Address *',
        },
    ],
};

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { currentUser } = useSelector(selectUser);
    const { isLoading, listProducts } = useSelector(selectCart);

    const [data, setData] = useState(INITIAL_DATA);

    // console.log(data);

    const listInput = [...inputs.userInfo, ...inputs.addressShipping];

    const [errorsForm, setErrorsForm] = useState(() => {
        const errorInit = {};
        // eslint-disable-next-line array-callback-return
        listInput?.map((input) => {
            const { name, value = '', patterns } = input;
            const errs = getErrorMessage(value, patterns);
            errorInit[name] = errs;
        });
        return errorInit;
    });

    const handleErrorForm = ({ name, value }) => {
        // const patterns = e.target.attributes["patterns"].nodeValue.split(",");
        const patterns = listInput?.filter((input) => input.name === name)?.[0]
            ?.patterns;
        const err = getErrorMessage(value, patterns);
        setErrorsForm({ ...errorsForm, [name]: err });
    };

    useEffect(() => {
        const listOrderItemTemp = [];
        listProducts?.map(
            (item) => item.isSelected && listOrderItemTemp.push(item)
        );
        setData((prev) => ({ ...prev, listOrderItem: listOrderItemTemp }));
    }, [listProducts]);

    useEffect(() => {
        const fetchCartOfUser = async () => {
            try {
                await dispatch(fetchGetCart({ user: currentUser })).unwrap();
            } catch (error) {
                console.log('/App/fetchCart');
            }
        };
        fetchCartOfUser();
    }, [currentUser, dispatch]);

    const subtotal = data.listOrderItem?.reduce((prev, cur) => {
        if (cur.product.newPrice) {
            return cur.product.newPrice * cur.count + prev;
        } else {
            return cur.product.price * cur.count + prev;
        }
    }, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'province') {
            setData({
                ...data,
                userInfo: {
                    ...data.userInfo,
                    [name]: value,
                    district: '',
                    ward: '',
                },
            });
        } else if (name === 'district') {
            setData({
                ...data,
                userInfo: {
                    ...data.userInfo,
                    [name]: value,
                    ward: '',
                },
            });
        } else {
            setData({ ...data, userInfo: { ...data.userInfo, [name]: value } });
        }
        handleErrorForm({ name, value });
    };

    //handle auto fill form
    const handleAutoFill = () => {
        if (currentUser) {
            const { firstName, lastName, email, phone, addressShipping } =
                currentUser;
            const defaultAddress = addressShipping.find(
                (item) => item.isSelected
            );
            const { province, district, ward, address } = defaultAddress;

            setData((prev) => ({
                ...prev,
                userInfo: {
                    firstName,
                    lastName,
                    email,
                    phone,
                    province,
                    district,
                    ward,
                    address,
                },
            }));

            setErrorsForm({
                firstName: [],
                lastName: [],
                email: [],
                phone: [],
                province: [],
                district: [],
                ward: [],
                address: [],
            });
        } else {
            toast.error('You need login first.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    // handle change payment
    const handleChangePayment = (e) => {
        const { name, id } = e.target;
        setData({ ...data, payment: { ...data.payment, [name]: id } });
    };

    const {
        steps,
        currentStepIndex,
        step,
        isFirstStep,
        isLastStep,
        back,
        next,
    } = useMultiStepForm([
        //   <UserForm {...data} updateFields={updateFields} />,
        //   <AddressForm {...data} updateFields={updateFields} />,
        //   <AccountForm {...data} updateFields={updateFields} />,
        <CartForm currentUser={currentUser} listProducts={listProducts} />,
        <UserInfoForm
            {...data}
            inputs={inputs}
            errorsForm={errorsForm}
            handleChange={handleChange}
            handleAutoFill={handleAutoFill}
            setErrorsForm={setErrorsForm}
        />,
        <PaymentForm {...data} handleChangePayment={handleChangePayment} />,
    ]);

    const handleCheckOut = async () => {
        const orderCode = 'ORD_' + parseInt(Date.now()).toString();
        const userId = currentUser ? currentUser._id : 'un_know';
        const addressShipping = data.userInfo;
        const listOderItems = data.listOrderItem;
        const payment = data.payment;
        const subPrice = subtotal;
        const totalPrice = subtotal;
        try {
            const createOrder = async () => {
                return await fetchPayment(
                    orderCode,
                    listOderItems,
                    addressShipping,
                    subPrice,
                    totalPrice,
                    userId,
                    payment
                );
            };

            createOrder()
                .then(async (res) => {
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
                })
                .catch((res) => {
                    navigate(`/pay-successful`, {
                        state: {
                            code: 500,
                            msg: res.response.data.msg,
                        },
                    });
                });
        } catch (error) {
            console.log(error);
        }
    };

    function onSubmit(e) {
        e.preventDefault();

        if (currentStepIndex === 0) {
            if (data.listOrderItem.length === 0) {
                return toast.error('You need to select less 1 product.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (data.listOrderItem.find((item) => item.isError)) {
                return toast.error('Your cart have something wrong.', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                return next();
            }
        } else if (currentStepIndex === 1) {
            const check = listInput.find(
                (item) => errorsForm[item.name].length !== 0
            );
            if (check) {
                return toast.error(
                    'You need to complete form first to go next step.',
                    {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }
                );
            } else {
                return next();
            }
        } else if (currentStepIndex === 2) {
            if (data.payment.type === 'cash') {
                handleCheckOut();
            }
            if (data.payment.type === 'vn_pay') {
                try {
                    const orderCode = 'ORD_' + parseInt(Date.now()).toString();
                    const userId = currentUser ? currentUser._id : 'un_know';
                    const addressShipping = data.userInfo;
                    const listOderItems = data.listOrderItem;
                    const payment = data.payment;
                    const subPrice = subtotal;
                    const totalPrice = subtotal;
                    const createOrder = async () => {
                        return await fetchPayment(
                            orderCode,
                            listOderItems,
                            addressShipping,
                            subPrice,
                            totalPrice,
                            userId,
                            payment
                        );
                    };
                    createOrder().then(async (res) => {
                        const amount = subtotal;
                        const bankCode = '';
                        const orderDescription = await res.data.newOrder
                            .orderCode;
                        const orderType = 'fashion';
                        const language = '';

                        const fetchVnPay = async () => {
                            const res = await fetchPaymentVnPay(
                                amount,
                                bankCode,
                                orderDescription,
                                orderType,
                                language
                            );
                            window.open(res.data.redirectUrl, '_self');
                        };

                        fetchVnPay();
                    });
                } catch (err) {
                    console.log(err);
                }
            }
            if (data.payment.type === 'momo') {
                return toast.error('This method is not support', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } else {
        }
    }

    // return isLoading ? (
    //     <Loading />
    // ) : (
    //     <Container>
    //         <BreadCrumb />
    //         {listProducts.length === 0 ? (
    //             <div
    //                 style={{
    //                     display: "flex",
    //                     flexDirection: "column",
    //                     alignItems: "center",
    //                 }}
    //             >
    //                 <img
    //                     style={{ maxWidth: "50%" }}
    //                     src={emptyCartImg}
    //                     alt="emptyCartImg"
    //                 />
    //                 No thing in cart
    //             </div>
    //         ) : (
    //             <Wrapper>
    //                 <StepsCart>
    //                     {currentStepIndex + 1} / {steps.length}
    //                 </StepsCart>
    //                 <FormCheckout onSubmit={onSubmit}>
    //                     <ContentForm>
    //                         <div>{step}</div>
    //                         <SummaryContainer>
    //                             <h1 style={{ marginBottom: "2rem" }}>
    //                                 Summary
    //                             </h1>
    //                             <p>Subtotal: {formatCurrencyVND(subtotal)}</p>
    //                             <p>Deliver: 0</p>
    //                             <p>Discounts: 0</p>
    //                             <p>Total: {formatCurrencyVND(subtotal)}</p>
    //                         </SummaryContainer>
    //                     </ContentForm>
    //                     <ButtonsForm>
    //                         {!isFirstStep && (
    //                             <Button type="button" onClick={back}>
    //                                 <IoIosArrowBack />
    //                                 Back
    //                             </Button>
    //                         )}
    //                         <Button type="submit">
    //                             {isLastStep ? (
    //                                 <>
    //                                     Finish
    //                                     <BsTruck />
    //                                 </>
    //                             ) : (
    //                                 <>
    //                                     Next
    //                                     <IoIosArrowForward />
    //                                 </>
    //                             )}
    //                         </Button>
    //                     </ButtonsForm>
    //                 </FormCheckout>
    //             </Wrapper>
    //         )}
    //     </Container>
    // );

    return (
        <Container>
            <BreadCrumb />
            {listProducts?.length === 0 || !listProducts ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img
                        style={{ maxWidth: '50%' }}
                        src={emptyCartImg}
                        alt='emptyCartImg'
                    />
                    No thing in cart
                </div>
            ) : (
                <Wrapper>
                    <StepsCart>
                        {currentStepIndex + 1} / {steps.length}
                    </StepsCart>
                    <FormCheckout onSubmit={onSubmit}>
                        <ContentForm>
                            <div>{step}</div>
                            <SummaryContainer>
                                <h1 style={{ marginBottom: '2rem' }}>
                                    Summary
                                </h1>
                                <p>Subtotal: {formatCurrencyVND(subtotal)}</p>
                                <p>Deliver: 0</p>
                                <p>Discounts: 0</p>
                                <p>Total: {formatCurrencyVND(subtotal)}</p>
                            </SummaryContainer>
                        </ContentForm>
                        <ButtonsForm>
                            {!isFirstStep && (
                                <Button type='button' onClick={back}>
                                    <IoIosArrowBack />
                                    Back
                                </Button>
                            )}
                            <Button type='submit'>
                                {isLastStep ? (
                                    <>
                                        Finish
                                        <BsTruck />
                                    </>
                                ) : (
                                    <>
                                        Next
                                        <IoIosArrowForward />
                                    </>
                                )}
                            </Button>
                        </ButtonsForm>
                    </FormCheckout>
                </Wrapper>
            )}
        </Container>
    );
};

export default Cart;
