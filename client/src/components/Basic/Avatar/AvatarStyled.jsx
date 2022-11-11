import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const AvatarContainer = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid var(--primary-color);
    border-radius: 50%;
    background: linear-gradient(var(--primary-color), var(--secondary-color));
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const AvatarImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Text = styled.p`
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--black-color);
    background-color: transparent;
`;

export { Container, AvatarContainer, AvatarImage, Text };
