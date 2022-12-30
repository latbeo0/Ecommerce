import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    Container,
    Header,
    Image,
    Title,
    Body,
    GroupItem,
    Name,
    Value,
    Footer,
    Button,
    LinkR,
} from './PaySuccessStyled';
import { formatCurrencyVND } from './../../utils/format';

const PaySuccess = () => {
    const location = useLocation();
    const {
        code,
        msg,
        addressShipping,
        listOderItems,
        orderCode,
        payment,
        subPrice,
        totalPrice,
        userId,
    } = location.state;

    if (code === 200) {
        return (
            <Container>
                <Header>
                    <Image src='https://media.istockphoto.com/vectors/flat-icon-check-vector-id496603666?k=20&m=496603666&s=170667a&w=0&h=QOfI-aqzv1dEamb2evpWUvKkukJwtH4YRF_Ugwksk6Y=' />
                    <Title>Payment Success</Title>
                </Header>
                <Body>
                    <GroupItem>
                        <Name>Name:</Name>
                        <Value>{`${addressShipping?.firstName} ${addressShipping?.lastName}`}</Value>
                    </GroupItem>
                    <GroupItem>
                        <Name>Phone:</Name>
                        <Value>{addressShipping?.phone}</Value>
                    </GroupItem>
                    <GroupItem>
                        <Name>Amount Paid:</Name>
                        <Value>{formatCurrencyVND(totalPrice)}</Value>
                    </GroupItem>
                    <GroupItem>
                        <Name>Transaction ID:</Name>
                        <Value>{orderCode}</Value>
                    </GroupItem>
                </Body>
                <Footer>
                    <LinkR to='/'>
                        <Button>Home</Button>
                    </LinkR>
                    <LinkR to='/products'>
                        <Button>Continue Shopping</Button>
                    </LinkR>
                </Footer>
            </Container>
        );
    } else {
        return (
            <Container>
                <Header>
                    <Image src='https://cdn-icons-png.flaticon.com/512/190/190406.png' />
                    <Title type='error'>Payment Failure</Title>
                </Header>
                <Body>
                    <GroupItem>
                        <Name>Message:</Name>
                        <Value>{`${msg}`}</Value>
                    </GroupItem>
                </Body>
                <Footer>
                    <LinkR to='/'>
                        <Button>Home</Button>
                    </LinkR>
                    <LinkR to='/cart'>
                        <Button>Back to cart</Button>
                    </LinkR>
                </Footer>
            </Container>
        );
    }
};

export default PaySuccess;
