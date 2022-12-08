import styled, { css } from "styled-components";

const SectionWrapper = styled.div``;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.0625rem;
    font-weight: 500;
    position: relative;
`;

const Body = styled.div`
    transition: all 200ms ease-out;
    overflow: hidden;
    padding: 0 0.5rem;

    ${(props) =>
        props.isOpen
            ? css`
                  padding-top: 2rem;
                  max-height: fit-content;
                  opacity: 1;
              `
            : css`
                  padding-top: 0rem;
                  max-height: 0;
                  opacity: 0.2;
              `};
`;

const Content = styled.div``;

const ButtonHide = styled.div`
    padding: 0.5rem 0.7rem 0.5rem 1rem;
    border: 1px solid var(--gray-color-light);
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
    user-select: none;
`;

const ArrowContainer = styled.div`
    & > * {
        transform: ${(props) =>
            props.isOpen ? "rotate(0deg)" : "rotate(-180deg)"};
        transition: transform 200ms linear;
    }
`;

const SeeAll = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-color);
    text-decoration: underline;
    cursor: pointer;
    margin-top: 2rem;
`;

export {
    SectionWrapper,
    Header,
    Body,
    Content,
    ButtonHide,
    ArrowContainer,
    SeeAll,
};
