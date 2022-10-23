import styled from 'styled-components';

const Container = styled.div`
    font-family: system-ui, sans-serif;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;

    & + & {
        margin-top: 1rem;
    }
`;

const Input = styled.input.attrs({
    type: 'checkbox',
})`
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
    &::before {
        content: '';
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--primary-color);

        background-color: CanvasText;

        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: max(2px, 0.1em) solid currentColor;
        outline-offset: max(2px, 0.1em);
    }

    &:disabled {
        color: var(--gray-color);
        cursor: not-allowed;
    }

    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        /* background: var(--primary-color-dark); */
    }
`;

const Label = styled.label`
    &:disabled {
        color: var(--gray-color);
        cursor: not-allowed;
    }
`;

export { Container, Label, Input };
