import styled from 'styled-components';

const ButtonToggle = styled.button.attrs({ type: 'button' })`
    display: flex;
    align-items: center;
    color: rgb(156 163 175 / 1);
    padding: 0.8rem;

    @media only screen and (min-width: 1024px) {
        display: none;
    }
`;

const ButtonTool = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
`;

const Dialog = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 40;
`;

export { ButtonToggle, ButtonTool, Dialog };
