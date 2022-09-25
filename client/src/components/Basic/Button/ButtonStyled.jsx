import styled, { css, keyframes } from 'styled-components';

const Container = styled.a.attrs((props) => ({
    as: !props.href && 'button',
    type: props.href ? 'link' : 'button',
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
                    font-size: ${(props) => props.fontSize || '0.875rem'};
                    font-weight: ${(props) => props.thickness || '400'};
                    padding: ${(props) => props.padding || '3px 9px'};
                `;
            case 'medium':
                return css`
                    font-size: ${(props) => props.fontSize || '0.9375rem'};
                    font-weight: ${(props) => props.thickness || '500'};
                    padding: ${(props) => props.padding || '5px 15px'};
                `;
            case 'large':
                return css`
                    font-size: ${(props) => props.fontSize || '1rem'};
                    font-weight: ${(props) => props.thickness || '600'};
                    padding: ${(props) => props.padding || '7px 21px'};
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
                        color: ${(props) =>
                            props.color || 'var(--primary-color)'};
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
                        color: ${(props) =>
                            props.color || 'var(--white-color)'};
                        background-color: var(--primary-color);
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
                        color: ${(props) =>
                            props.color || 'var(--primary-color)'};
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

    cursor: ${(props) => (props.disable ? 'default' : 'pointer')};
    pointer-events: ${(props) => props.disable && 'none'};
    position: relative;
    overflow: hidden;
    transition: ${(props) =>
        props.disable
            ? 'none'
            : 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;'};

    & > svg {
        pointer-events: none;
    }
`;

const Content = styled.span`
    pointer-events: none;

    ${(props) => {
        switch (props.size) {
            case 'small':
                return css`
                    font-size: ${(props) => props.fontSize || '0.875rem'};
                    font-weight: ${(props) => props.thickness || '400'};
                `;
            case 'medium':
                return css`
                    font-size: ${(props) => props.fontSize || '0.9375rem'};
                    font-weight: ${(props) => props.thickness || '500'};
                `;
            case 'large':
                return css`
                    font-size: ${(props) => props.fontSize || '1rem'};
                    font-weight: ${(props) => props.thickness || '600'};
                `;
            default:
                return css``;
        }
    }}

    ${(props) => {
        switch (props.variant) {
            case 'text':
                return css`
                    color: ${(props) => props.color || 'var(--primary-color)'};
                    background-color: transparent;
                `;
            case 'contained':
                return css`
                    color: ${(props) => props.color || 'var(--white-color)'};
                `;
            case 'outlined':
                return css`
                    color: ${(props) => props.color || 'var(--primary-color)'};
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
