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
};

const Cart = () => {
    const { listProducts } = useSelector(selectCart);

    const [data, setData] = useState(INITIAL_DATA);

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
        setData({ ...data, userInfo: { ...data.userInfo, [name]: value } });
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
        <UserInfoForm {...data} handleChange={handleChange} />,
    ]);

    const handleCheckOut = async () => {
        const userId = '1';
        const addressShipping = data.userInfo;
        const listOderItems = listProducts;
        const itemsPrice = subtotal;
        const totalPrice = subtotal;
        await fetchPayment(
            listOderItems,
            addressShipping,
            itemsPrice,
            totalPrice,
            userId
        )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err.msg));
    };

    function onSubmit(e) {
        e.preventDefault();
        if (!isLastStep) return next();
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
                            <p>Subtotal: {subtotal}</p>
                            <p>Deliver: </p>
                            <p>Discounts: </p>
                            <p>Total: {subtotal}</p>
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
