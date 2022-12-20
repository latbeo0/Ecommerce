import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Background = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
`;

const Content = styled.div`
    width: 500px;
    max-width: 500px;
    background: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    margin: 1rem;
    border-radius: 5px;

    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
        0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;

    ${(props) => {
        switch (props.type) {
            case "success":
                return css`
                    color: var(--green-color);
                `;
            case "error":
                return css`
                    color: var(--red-color);
                `;
            default:
                return css`
                    color: var(--primary-color);
                `;
        }
    }}

    @media only screen and (max-width: 767px) {
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }
`;

const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Loading = styled.span`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid var(--primary-color);
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;

    &::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border-left: 4px solid var(--gray-color-light);
        border-bottom: 4px solid transparent;
        animation: ${rotation} 0.5s linear infinite reverse;
    }
`;

const Image = styled.img`
    width: 100px;
    height: 100px;
`;

const Message = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: var(--black-color);
`;

const BackHomeContainer = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    font-weight: 400;
    color: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {
    Container,
    Background,
    Content,
    Title,
    Loading,
    Image,
    Message,
    BackHomeContainer,
};
