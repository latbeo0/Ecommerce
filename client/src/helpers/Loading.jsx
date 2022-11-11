import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Content = styled.span`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid var(--primary-color);
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;

    &::after {
        content: '';
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

const Loading = () => {
    return (
        <Container>
            <Content />
        </Container>
    );
};

export default Loading;
