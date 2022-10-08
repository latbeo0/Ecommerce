import styled from 'styled-components';

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
    object-position: bottom;
    z-index: -1;
`;

const Content = styled.div`
    width: 500px;
    max-width: 500px;
    background: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
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
    font-size: 3.125rem;
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 2rem;

    @media only screen and (max-width: 767px) {
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }
`;

const ButtonsSocial = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > button {
        --tw-shadow: 0 2px 5px -5px rgb(0 0 0 / 0.1),
            0 8px 10px -6px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
            0 8px 10px -6px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    @media only screen and (max-width: 767px) {
        gap: 0.75rem;
    }
`;

const Separate = styled.div`
    position: relative;
    border-bottom: 1px solid var(--gray-color-light);
    margin: 2rem 0;

    &::before {
        content: 'Or';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--white-color);
        padding: 0 1rem;
        color: var(--gray-color);
        font-size: 0.875rem;
        font-weight: 500;
    }

    @media only screen and (max-width: 767px) {
        margin: 1.75rem 0;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (max-width: 767px) {
        gap: 1.25rem;
    }
`;

const HelpContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & button[type='button'] {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--primary-color);
    }

    @media only screen and (max-width: 767px) {
        margin-top: 1.5rem;
        flex-direction: column;
        gap: 0.5rem;
    }
`;

const RegisterContainer = styled.div`
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--gray-color-dark);
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
    ButtonsSocial,
    Separate,
    Form,
    HelpContainer,
    RegisterContainer,
    BackHomeContainer,
};
