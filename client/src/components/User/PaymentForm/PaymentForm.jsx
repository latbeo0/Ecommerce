import React from 'react';
import {
    Container,
    Title,
    Wrapper,
    PaymentItem,
    RadioCheck,
    ImageContainer,
    ImagePayment,
    BankContainer,
} from './PaymentFormStyled';
import paymentCashImg from '../../../assets/img/payment/cash.png';
import paymentVnPayImg from '../../../assets/img/payment/logo VNPAY-02.png';
import paymentMomoImg from '../../../assets/img/payment/download.png';
import { SelectGroup } from '../../Basic';

const banks = [
    { value: '', label: 'Không chọn', name: 'bankCode' },
    { value: 'VNPAYQR', label: 'Ngân hàng VNPAYQR', name: 'bankCode' },
    { value: 'NCB', label: 'Ngân hàng NCB', name: 'bankCode' },
    { value: 'SCB', label: 'Ngân hàng SCB', name: 'bankCode' },
    { value: 'SACOMBANK', label: 'Ngân hàng SACOMBANK', name: 'bankCode' },
    { value: 'EXIMBANK', label: 'Ngân hàng EXIMBANK', name: 'bankCode' },
    { value: 'MSBANK', label: 'Ngân hàng MSBANK', name: 'bankCode' },
    { value: 'NAMABANK', label: 'Ngân hàng NAMABANK', name: 'bankCode' },
    { value: 'VISA', label: 'Ngân hàng VISA', name: 'bankCode' },
    { value: 'VNMART', label: 'Ngân hàng VNMART', name: 'bankCode' },
    { value: 'VIETINBANK', label: 'Ngân hàng VIETINBANK', name: 'bankCode' },
    { value: 'VIETCOMBANK', label: 'Ngân hàng VIETCOMBANK', name: 'bankCode' },
    { value: 'HDBANK', label: 'Ngân hàng HDBANK', name: 'bankCode' },
    { value: 'DONGABANK', label: 'Ngân hàng Dong A', name: 'bankCode' },
    { value: 'TPBANK', label: 'Ngân hàng Tp Bank', name: 'bankCode' },
    { value: 'OJB', label: 'Ngân hàng OceanBank', name: 'bankCode' },
    { value: 'BIDV', label: 'Ngân hàng BIDV', name: 'bankCode' },
    { value: 'TECHCOMBANK', label: 'Ngân hàng Techcombank', name: 'bankCode' },
    { value: 'VPBANK', label: 'Ngân hàng VPBank', name: 'bankCode' },
    { value: 'AGRIBANK', label: 'Ngân hàng AGRIBANK', name: 'bankCode' },
    { value: 'MBBANK', label: 'Ngân hàng MBBank', name: 'bankCode' },
    { value: 'ACB', label: 'Ngân hàng ACB', name: 'bankCode' },
    { value: 'OCB', label: 'Ngân hàng OCB', name: 'bankCode' },
    { value: 'SHB', label: 'Ngân hàng SHB', name: 'bankCode' },
    { value: 'IVB', label: 'Ngân hàng IVB', name: 'bankCode' },
];

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
            {/* <BankContainer style={{ flex: "1" }}>
                <SelectGroup
                    label="Bank *"
                    placeholder="Select bank ..."
                    options={banks}
                    value={payment.bank}
                    // onChange={handleChangeProvince}
                />
            </BankContainer> */}
        </Container>
    );
};

export default PaymentForm;
