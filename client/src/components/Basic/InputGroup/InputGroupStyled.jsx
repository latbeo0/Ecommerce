import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.25rem;
`;

const Label = styled.label`
    font-size: 1rem;
    font-weight: 400;
    color: var(--black-color);
`;

const Wrapper = styled.div.withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ['focused'].includes(prop) || defaultValidatorFn(prop),
})`
    display: flex;
    align-items: center;
    justify-content: stretch;
    position: relative;

    &[focused='true'] ~ span {
        display: block;
    }

    &[focused='true'] > input {
        border: 1px solid
            ${(props) =>
                props.errorMessage ? 'var(--red-color)' : 'var(--green-color)'};
    }
`;

const IconContainer = styled.div`
    position: absolute;
    top: 0;
    left: ${(props) => props.slot === 'start' && '0'};
    right: ${(props) => props.slot === 'end' && '0'};
    width: 45px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: ${(props) => (props.slot === 'end' ? 'auto' : 'none')};
    cursor: ${(props) => props.slot === 'end' && 'pointer'};
    color: gray;

    & > svg {
        width: 20px;
        height: 20px;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 45px;
    outline: none;
    border: 1px solid var(--gray-color-dark);
    border-radius: 0.4rem;
    color: var(--black-color);
    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
        color: var(--gray-color-dark);
        font-size: 1rem;
        font-weight: 400;
    }

    &:focus {
        border: 1px solid var(--black-color);

        & ~ div {
            color: var(--black-color);
        }
    }
`;

const ErrorMessage = styled.span`
    color: var(--red-color);
    font-size: 0.875rem;
    font-weight: 400;
    display: none;
`;

export { Container, Label, Wrapper, IconContainer, Input, ErrorMessage };
