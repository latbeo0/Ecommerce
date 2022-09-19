import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    align-self: stretch;
`;

const WrapperUser = styled.div`
    display: none;
    height: 100%;

    @media only screen and (min-width: 1025px) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`;

const Separate = styled.span`
    width: 1px;
    height: 2.4rem;
    margin: 0 3.2rem;
    background-color: rgb(229 231 235);
`;

const WrapperLanguage = styled.div`
    display: none;
    height: 100%;

    @media only screen and (min-width: 1025px) {
        display: flex;
        margin-left: 3.2rem;
    }
`;

const WrapperSearch = styled.div`
    display: flex;
    height: 100%;

    @media only screen and (min-width: 1025px) {
        margin-left: 2.4rem;
    }
`;

const WrapperCart = styled.div`
    display: flex;
    height: 100%;
    margin-left: 1.6rem;

    @media only screen and (min-width: 1025px) {
        margin-left: 2.4rem;
    }
`;

export {
    Container,
    WrapperUser,
    Separate,
    WrapperLanguage,
    WrapperSearch,
    WrapperCart,
};
