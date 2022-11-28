import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    gap: 3rem;
`;

const Title = styled.h1`
    margin-bottom: 1rem;
`;

const UserInfoContainer = styled.div``;

const UserInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Row = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;

    & > * {
        flex: 1;
    }
`;

const AddressShippingContainer = styled.div``;

export {
    Container,
    Title,
    UserInfoContainer,
    UserInfoWrapper,
    Row,
    AddressShippingContainer,
};
