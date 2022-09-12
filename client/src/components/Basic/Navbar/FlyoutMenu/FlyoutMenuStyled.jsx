import styled from 'styled-components';

const Container = styled.div`
    margin-left: 3rem;
    align-self: stretch;
    display: none;

    @media only screen and (min-width: 1025px) {
        display: block;
    }
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
`;

const Page = styled.a`
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500;
    color: rgb(55 65 81);
    margin-left: 3.2rem;

    &:hover {
        color: rgb(31 41 55);
    }
`;

export { Container, Wrapper, Page };
