import styled from "styled-components";
import { Button } from "../Button";

const Nav = styled.nav`
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
`;

const Container = styled.div`
    padding: 0 2rem;
    border-bottom: 1px solid rgb(229 231 235);
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: var(--height-navbar);
`;

const Logo = styled(Button)`
    & > img {
        width: 3.125rem;
        height: 3.125rem;
    }

    & > span {
        font-size: 1rem;
        font-weight: 700;
    }

    @media only screen and (max-width: 1024px) {
        margin-left: 1rem;
    }
`;

const ButtonToggle = styled(Button).attrs({ type: "button" })`
    @media only screen and (min-width: 1025px) {
        display: none;
    }
`;

export { Nav, Container, Wrapper, Logo, ButtonToggle };
