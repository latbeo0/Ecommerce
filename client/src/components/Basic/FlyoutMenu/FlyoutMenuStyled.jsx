import styled from 'styled-components';

const Container = styled.div`
    margin-left: 3rem;
    align-self: stretch;
    display: none;

    @media only screen and (min-width: 1024px) {
        display: block;
    }
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
`;

const Category = styled.button`
    font-size: 1.3rem;
    padding: 0 0.5rem 0 0.5rem;
    display: flex;
    align-items: center;

    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
    border-color: transparent;
    cursor: pointer;

    & + & {
        margin-left: 0.5rem;
    }
`;

const Page = styled.a`
    display: flex;
    align-items: center;

    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500;
    color: #000;

    margin-left: 3.2rem;
`;

export { Container, Wrapper, Category, Page };
