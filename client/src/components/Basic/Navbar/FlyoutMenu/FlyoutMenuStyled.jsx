import styled from "styled-components";

const Container = styled.div`
    margin-left: 1.875rem;
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

const Page = styled.button.attrs((props) => ({
    type: "button",
}))`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: rgb(55 65 81);
    margin-left: 2rem;

    &:hover {
        color: rgb(31 41 55);
    }

    & > * {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export { Container, Wrapper, Page };
