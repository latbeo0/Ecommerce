import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 80rem;
    margin: 1rem auto;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 1rem;
    gap: 1rem;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    border-radius: 1rem;
    padding: 1rem;
`;

const AvatarContainer = styled.div`
    margin: 2rem 0 1rem;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    background: red;
    border: 1px solid var(--primary-color);
    background: linear-gradient(var(--primary-color), var(--secondary-color));
    position: relative;
    overflow: hidden;
`;

const Avatar = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Name = styled.p`
    font-size: 1.25rem;
    font-weight: 500;
`;

const ToolContainer = styled.div``;

const Tool = styled.div``;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    border-radius: 1rem;
    padding: 1rem;
`;

const RightWrapper = styled.div``;

const Title = styled.h1``;

export {
    Container,
    Wrapper,
    LeftContainer,
    AvatarContainer,
    Avatar,
    Name,
    ToolContainer,
    Tool,
    RightContainer,
    RightWrapper,
    Title,
};
