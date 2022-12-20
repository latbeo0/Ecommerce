import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    gap: 1rem;
`;

const Title = styled.h1`
    margin-bottom: 1rem;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const PaymentItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const RadioCheck = styled.input.attrs(() => ({
    type: "radio",
}))``;

const ImageContainer = styled.div`
    padding: 0.5rem;
    border-radius: 1rem;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    overflow: hidden;
    position: relative;
    width: 12rem;
    height: 6rem;
    cursor: pointer;
`;

const ImagePayment = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const BankContainer = styled.div``;

export {
    Container,
    Title,
    Wrapper,
    PaymentItem,
    RadioCheck,
    ImageContainer,
    ImagePayment,
    BankContainer,
};
