import styled from "styled-components";

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 500px;
    min-height: 300px;
    background: var(--white-color);
    border-radius: 1rem;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    padding: 1rem 2rem;
`;

const Header = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    padding-bottom: 1rem;
    border-bottom: 1px solid
        ${(props) =>
            props.variant === "change"
                ? "var(--primary-color)"
                : "var(--red-color)"};
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Ask = styled.span`
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--gray-color);
    margin: 1rem 0;
`;

const ProductImageContainer = styled.div`
    position: relative;
    width: 10rem;
    height: 10rem;
    border-radius: ${(props) => (props.avatar ? "50%" : "0.5rem")};
    overflow: hidden;
    border: ${(props) =>
        props.avatar ? "1px dashed var(--primary-color)" : null};
    cursor: pointer;
`;

const ProductImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    padding: 0.5rem;
`;

const ProductName = styled.p`
    font-size: 0.9125rem;
    font-weight: 500;
    color: var(--black-color);
    margin: 0.5rem 0;
`;

const ProductCode = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--black-color);
`;

const Footer = styled.div`
    margin: 2rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

const ButtonCancel = styled.button`
    outline: 0;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    position: relative;

    font-size: 0.9375rem;
    font-weight: 500;
    padding: 10px 40px;

    color: var(--black-color);
    background-color: rgba(114, 96, 96, 0.1);
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const ButtonConfirm = styled.button`
    outline: 0;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    position: relative;

    font-size: 0.9375rem;
    font-weight: 500;
    padding: 10px 40px;

    color: var(--white-color);
    background-color: ${(props) =>
        props.variant === "avatar"
            ? "var(--primary-color)"
            : "var(--red-color)"};
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
        0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export {
    Background,
    Container,
    Header,
    Content,
    Ask,
    ProductImageContainer,
    ProductImage,
    ProductName,
    ProductCode,
    Footer,
    ButtonCancel,
    ButtonConfirm,
};
