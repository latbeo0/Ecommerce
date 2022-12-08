import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 80rem;
    margin: 1rem auto;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 3rem;
    padding: 1rem;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
`;

const ButtonClearAll = styled.div`
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

    color: var(--red-color);
    background-color: rgba(255, 0, 0, 0.05);

    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background-color: rgba(255, 0, 0, 0.1);
    }
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
        props.empty ? "1fr" : "1fr 1fr 1fr 1fr"};
    gap: 1rem;
`;

export { Container, Wrapper, Header, Title, ButtonClearAll, Content };
