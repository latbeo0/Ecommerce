import styled from 'styled-components';

const ButtonNavbar = styled.button.attrs({ type: 'button' })`
    display: flex;
    align-items: center;

    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500;
    color: ${(props) => (props.open ? 'rgb(79 70 229 / 1)' : '#000')};

    padding-top: 1px;
    margin-bottom: -1px;
    border-width: 0 0 2px 0;
    border-color: ${(props) =>
        props.open ? 'rgb(79 70 229 / 1)' : 'transparent'};

    position: relative;
    z-index: 10;
    transition: color 0.3s cubic-bezier(0, 0, 0.2, 1),
        border 0.3s cubic-bezier(0, 0, 0.2, 1);
`;

export { ButtonNavbar };
