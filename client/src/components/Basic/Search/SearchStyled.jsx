import styled from "styled-components";

const Container = styled.div`
    position: relative;
    height: 4rem;
`;

const IconSearch = styled.div`
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    color: var(--gray-color);
    pointer-events: none;
`;

const Input = styled.input.attrs({
    type: "text",
})`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 1rem 4rem;
    font-size: 1rem;
    font-weight: 300;
    line-height: 2rem;
    color: var(--gray-color);
    background: var(--secondary-color);
    outline: none;
    border: none;
    border-radius: 1rem;
`;

const IconClear = styled.div`
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    color: var(--gray-color);
    cursor: pointer;
`;

const ResultContainer = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: var(--gray-color);
    display: flex;
    gap: 0.5rem;
`;

const Result = styled.p`
    font-weight: 500;
    color: var(--black-color);
`;

export { Container, IconSearch, Input, IconClear, ResultContainer, Result };
