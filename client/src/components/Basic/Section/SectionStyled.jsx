import styled from 'styled-components';

const Container = styled.div`
    @media only screen and (max-width: 1024px) {
        margin-top: 4rem;
    }
`;

const Header = styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    color: rgb(17 24 39);

    @media only screen and (max-width: 1024px) {
        font-size: 1.6rem;
    }
`;

const Items = styled.ul`
    margin-top: 1.6rem;
    color: rgb(107 114 128);

    @media only screen and (max-width: 1024px) {
        margin-top: 2.4rem;
        display: flex;
        flex-direction: column;
    }
`;

const WrapperItem = styled.li`
    display: flex;

    & + & {
        margin-top: 1.6rem;
    }

    @media only screen and (max-width: 1024px) {
        display: flow-root;

        & + & {
            margin-top: 2.4rem;
        }
    }
`;

const Item = styled.a`
    font-size: 1.4rem;
    transition: color 0.2s linear;

    &:hover {
        color: rgb(31 41 55);
    }

    @media only screen and (max-width: 1024px) {
        display: block;
        font-size: 1.6rem;
        font-weight: 400;
        margin: -0.8rem;
        padding: 0.8rem;
    }
`;

export { Container, Header, Items, WrapperItem, Item };
