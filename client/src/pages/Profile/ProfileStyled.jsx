import styled from "styled-components";

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
    align-items: stretch;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    border-radius: 1rem;
    padding: 1rem;
`;

const AvatarContainer = styled.div`
    margin: 2rem auto 1rem;
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
    align-self: center;
    padding-bottom: 1rem; ;
`;

const ToolContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--gray-color);

    & > * {
        width: 100%;
    }
`;

const Tool = styled.div`
    align-self: center;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 0.9125rem;
    font-weight: 400;
    background-color: var(--white-color);
    border-radius: 0.5rem;
    cursor: pointer;

    & > svg {
        font-size: 1rem;
    }

    &:hover {
        background: var(--secondary-color);
    }
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    border-radius: 1rem;
    padding: 1rem;
`;

const RightWrapper = styled.div``;

const Title = styled.h1``;

const Content = styled.div``;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    & > * {
        flex: 1;
    }
`;

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
    Content,
    Row,
};
