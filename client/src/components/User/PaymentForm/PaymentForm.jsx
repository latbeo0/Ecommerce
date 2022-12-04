import React from 'react';
import {
    Container,
    Title,
    Wrapper,
    PaymentItem,
    RadioCheck,
    ImageContainer,
    ImagePayment,
} from './PaymentFormStyled';
import paymentCashImg from '../../../assets/img/payment/cash.png';
import paymentVnPayImg from '../../../assets/img/payment/logo VNPAY-02.png';
import paymentMomoImg from '../../../assets/img/payment/download.png';

const PaymentForm = (props) => {
    const { payment, handleChangePayment } = props;
    return (
        <Container>
            <Title>Payment form</Title>
            <Wrapper>
                <PaymentItem>
                    <RadioCheck
                        id='cash'
                        name='type'
                        checked={payment.type === 'cash'}
                        onChange={(e) => handleChangePayment(e)}
                    />
                    <label htmlFor='cash'>
                        <ImageContainer>
                            <ImagePayment
                                src={paymentCashImg}
                                alt='imgPayment'
                            />
                        </ImageContainer>
                    </label>
                </PaymentItem>
                <PaymentItem>
                    <RadioCheck
                        id='vn_pay'
                        name='type'
                        checked={payment.type === 'vn_pay'}
                        onChange={(e) => handleChangePayment(e)}
                    />
                    <label htmlFor='vn_pay'>
                        <ImageContainer>
                            <ImagePayment
                                src={paymentVnPayImg}
                                alt='imgPayment'
                            />
                        </ImageContainer>
                    </label>
                </PaymentItem>
                <PaymentItem>
                    <RadioCheck
                        id='momo'
                        name='type'
                        checked={payment.type === 'momo'}
                        onChange={(e) => handleChangePayment(e)}
                    />
                    <label htmlFor='momo'>
                        <ImageContainer>
                            <ImagePayment
                                src={paymentMomoImg}
                                alt='imgPayment'
                            />
                        </ImageContainer>
                    </label>
                </PaymentItem>
            </Wrapper>
        </Container>
    );
};

export default PaymentForm;
