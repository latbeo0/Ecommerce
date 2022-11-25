import styled from "styled-components";

const Container = styled.div.withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ["focused"].includes(prop) || defaultValidatorFn(prop),
})`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.25rem;

    &[focused="true"] > span {
        display: block;
    }

    & > * {
        width: 100%;
    }
`;

const Label = styled.label`
    font-size: 1rem;
`;

const ErrorMessage = styled.span`
    color: var(--red-color);
    font-size: 0.875rem;
    font-weight: 400;
    display: none;
`;

export { Container, Label, ErrorMessage };
