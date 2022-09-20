import styled, { css, keyframes } from 'styled-components';

const Container = styled.a.attrs((props) => ({
    as: !props.href && 'button',
}))`
    outline: 0;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    ${(props) => {
        switch (props.size) {
            case 'small':
                return css`
                    font-size: 1.4rem;
                    font-weight: 300;
                    padding: 3px 9px;
                `;
            case 'medium':
                return css`
                    font-size: 1.5rem;
                    font-weight: 400;
                    padding: 5px 15px;
                `;
            case 'large':
                return css`
                    font-size: 1.6rem;
                    font-weight: 500;
                    padding: 7px 21px;
                `;
            default:
                return css``;
        }
    }}

    ${(props) => {
        if (props.disable) {
            switch (props.variant) {
                case 'text':
                    return css`
                        color: var(--gray-color-dark);
                    `;
                case 'contained':
                    return css`
                        color: var(--gray-color-dark);
                        background: var(--gray-color-light);
                        box-shadow: unset;
                    `;
                case 'outlined':
                    return css`
                        color: var(--gray-color-dark);
                        border: 1px solid var(--gray-color-light);
                    `;
                default:
                    return css``;
            }
        } else {
            switch (props.variant) {
                case 'text':
                    return css`
                        color: var(--primary-color);
                        background-color: transparent;

                        ${(props) =>
                            props.effect &&
                            css`
                                &:hover {
                                    background-color: var(
                                        --primary-color-light
                                    );
                                }
                            `}
                    `;
                case 'contained':
                    return css`
                        color: var(--white-color);
                        background: var(--primary-color);
                        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
                            0px 2px 2px 0px rgb(0 0 0 / 14%),
                            0px 1px 5px 0px rgb(0 0 0 / 12%);

                        ${(props) =>
                            props.effect &&
                            css`
                                &:hover {
                                    background-color: var(--primary-color-dark);
                                    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
                                        0px 4px 5px 0px rgb(0 0 0 / 14%),
                                        0px 1px 10px 0px rgb(0 0 0 / 12%);
                                }
                            `}
                    `;
                case 'outlined':
                    return css`
                        color: var(--primary-color);
                        background-color: transparent;
                        border: 1px solid var(--primary-color-border);

                        ${(props) =>
                            props.effect &&
                            css`
                                &:hover {
                                    background-color: var(
                                        --primary-color-light
                                    );
                                    border: 1px solid var(--primary-color);
                                }
                            `}
                    `;
                default:
                    return css``;
            }
        }
    }};

    ${(props) => {
        switch (props.color) {
            case 'black':
                return css`
                    color: black;
                `;
            default:
                return css``;
        }
    }}

    overflow: hidden;
    cursor: ${(props) => (props.disable ? 'default' : 'pointer')};
    pointer-events: ${(props) => props.disable && 'none'};
    position: relative;
    transition: ${(props) =>
        props.disable
            ? 'none'
            : 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;'};

    & > svg {
        pointer-events: none;
    }
`;

const Content = styled.span`
    font-size: 1.4rem;
    font-weight: 500;
    /* color: rgb(31 41 55); */
    pointer-events: none;

    ${(props) => {
        switch (props.variant) {
            case 'text':
                return css`
                    color: var(--primary-color);
                `;
            case 'contained':
                return css`
                    color: var(--white-color);
                `;
            case 'outlined':
                return css`
                    color: var(--primary-color);
                `;
            default:
                return css``;
        }
    }}

    ${(props) => {
        switch (props.color) {
            case 'black':
                return css`
                    color: black;
                `;
            default:
                return css``;
        }
    }}
`;

const effectClick = keyframes`
  0%{
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
`;

const Effect = styled.span`
    position: absolute;
    /* background: #fff; */
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    animation: ${effectClick} 350ms linear infinite;

    ${(props) => {
        switch (props.variant) {
            case 'text':
                return css`
                    background-color: var(--primary-color);
                `;
            case 'contained':
                return css`
                    background-color: var(--white-color);
                `;
            case 'outlined':
                return css`
                    background-color: var(--primary-color);
                `;
            default:
                return css``;
        }
    }};
`;

export { Container, Content, Effect };
