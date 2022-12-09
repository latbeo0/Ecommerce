import styled, { css } from "styled-components";

const Container = styled.div`
    margin: 0 1rem;
    border-radius: 5px;
    height: fit-content;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Section = styled.div`
    padding: 1.5rem;

    & + & {
        border-top: 1px solid var(--gray-color-light);
    }
`;

const Title = styled.div`
    font-size: 1.125rem;
    font-weight: 500;
`;

const ButtonReset = styled.div`
    padding: 0.5rem 2rem;
    border: 1px solid var(--gray-color-light);
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    user-select: none;
`;

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.0625rem;
    font-weight: 500;
`;

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

const SectionBody = styled.div`
    transition: all 200ms linear;
    padding-top: 2rem;
`;

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

const ColorContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
`;

const Color = styled.div.withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ["name", "value", "checked", "selected"].includes(prop) ||
        defaultValidatorFn(prop),
})`
    width: 2rem;
    height: 2rem;
    position: relative;
    background: ${(props) => props?.background};
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 200ms linear;
    cursor: pointer;

    ${(props) =>
        props.checked
            ? css`
                  border: 1px solid var(--black-color);
                  background: transparent;

                  &::before {
                      content: "";
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      width: 80%;
                      height: 80%;
                      border: 1px solid var(--black-color);
                      border-radius: 50%;
                      background: ${(props) => props?.background};
                  }
              `
            : undefined}
`;

export {
    Container,
    Section,
    Title,
    ButtonReset,
    SectionHeader,
    ButtonHide,
    ArrowContainer,
    SeeAll,
    SectionBody,
    SectionWrapper,
    Header,
    Body,
    Content,
    ColorContent,
    Color,
};
