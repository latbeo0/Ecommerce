import styled from 'styled-components';

const Container = styled.div`
    display: flex;

    & + & {
        margin-left: 2rem;
    }
`;

const WrapperButton = styled.div`
    display: flex;
    position: relative;
`;

const ButtonPopover = styled.button.attrs({ type: 'button' })`
    display: flex;
    align-items: center;

    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: ${(props) =>
        props.open ? 'var(--primary-color)' : 'rgb(55 65 81)'};

    padding-top: 1px;
    margin-bottom: -1px;
    border-width: 0 0 2px 0;
    border-color: ${(props) =>
        props.open ? 'var(--primary-color)' : 'transparent'};

    position: relative;
    z-index: 10;
    transition: color 0.3s cubic-bezier(0, 0, 0.2, 1),
        border 0.3s cubic-bezier(0, 0, 0.2, 1);

    &:hover {
        ${(props) => !props.open && 'color: rgb(31 41 55)'}
    }
`;

export { Container, WrapperButton, ButtonPopover };
