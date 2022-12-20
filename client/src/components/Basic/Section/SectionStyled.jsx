import styled, { css } from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    ${(props) => {
        switch (props.slot) {
            case "start":
                return css`
                    align-items: flex-start;
                `;
            case "end":
                return css`
                    align-items: flex-end;
                `;
            default:
                return css`
                    align-items: center;
                `;
        }
    }}

    @media only screen and (max-width: 1024px) {
        margin-top: 2.5rem;
    }
`;

const Header = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: rgb(17 24 39);
    margin-bottom: 1rem;

    @media only screen and (max-width: 1024px) {
        font-size: 1rem;
    }
`;

const Items = styled.ul`
    color: rgb(107 114 128);

    @media only screen and (max-width: 1024px) {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
    }
`;

const WrapperItem = styled.li`
    display: flex;

    & + & {
        margin-top: 1rem;
    }

    @media only screen and (max-width: 1024px) {
        display: flow-root;

        & + & {
            margin-top: 1.5rem;
        }
    }
`;

const Item = styled.span`
    font-size: 0.875rem;
    line-height: 1.5rem;
    transition: color 0.2s linear;

    &:hover {
        color: rgb(31 41 55);
    }

    @media only screen and (max-width: 1024px) {
        display: block;
        font-size: 1rem;
        font-weight: 400;
        margin: -0.5rem;
        padding: 0.5rem;
    }
`;

export { Container, Header, Items, WrapperItem, Item };
