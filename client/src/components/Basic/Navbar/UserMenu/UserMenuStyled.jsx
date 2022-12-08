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
    height: 1.5rem;
    margin: 0 2rem;
    background-color: rgb(229 231 235);
`;

const WrapperLanguage = styled.div`
    display: none;

    @media only screen and (min-width: 1025px) {
        display: flex;
        height: 100%;
        margin-left: 2rem;
    }
`;

const WrapperSearch = styled.div`
    display: flex;
    height: 100%;
    padding: 0 0.5rem;

    & > a > div {
        margin-right: 0;
    }

    @media only screen and (min-width: 1025px) {
        padding: 0;
        margin-left: 2rem;
    }
`;

const WrapperCart = styled.div`
    display: flex;
    height: 100%;
    padding: 0 0.5rem;
    position: relative;

    @media only screen and (min-width: 1025px) {
        padding: 0;
        margin-left: 1.5rem;
    }
`;

const SpaceCart = styled.div`
    content: '';
    position: absolute;
    top: 100%;
    right: 0;
    width: 100px;
    height: 50px;
    background: white;
`;

export {
    Container,
    WrapperUser,
    Separate,
    WrapperLanguage,
    WrapperSearch,
    WrapperCart,
    SpaceCart,
};
