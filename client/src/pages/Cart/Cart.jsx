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
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/cartSlice';
import { fetchPayment } from '../../services/orderFetch';
import { getErrorMessage } from '../../helpers/validation';
import PaymentForm from '../../components/User/PaymentForm/PaymentForm';
import { toast } from 'react-toastify';
import { formatCurrencyVND } from './../../utils/format';
import { selectUser } from '../../redux/userSlice';

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
    const { currentUser } = useSelector(selectUser);
    const { listProducts } = useSelector(selectCart);

    const [data, setData] = useState(INITIAL_DATA);

    console.log(data);

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
        listProducts.map(
            (item) => item.isSelected && listOrderItemTemp.push(item)
        );
        setData((prev) => ({ ...prev, listOrderItem: listOrderItemTemp }));
    }, [listProducts]);

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
        <CartForm listProducts={listProducts} />,
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
        await fetchPayment(
            orderCode,
            listOderItems,
            addressShipping,
            subPrice,
            totalPrice,
            userId,
            payment
        )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err.msg));
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
            if (data.payment.type !== 'cash') {
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
        handleCheckOut();
    }

    return (
        <Container>
            <BreadCrumb />
            <Wrapper>
                <StepsCart>
                    {currentStepIndex + 1} / {steps.length}
                </StepsCart>
                <FormCheckout onSubmit={onSubmit}>
                    <ContentForm>
                        <div>{step}</div>
                        <SummaryContainer>
                            <h1 style={{ marginBottom: '2rem' }}>Summary</h1>
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
        </Container>
    );
};

export default Cart;
