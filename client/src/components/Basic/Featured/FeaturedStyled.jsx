import styled from 'styled-components';

const Container = styled.div`
    font-size: 0.875rem;
    line-height: 1.25rem;

    position: relative;
`;

const ContainerImg = styled.div`
    background-color: rgb(243 244 246);
    border-radius: 0.5rem;
    overflow: hidden;
`;

const Img = styled.img`
    object-fit: cover;
    object-position: center;
    opacity: ${(props) => (props.hover ? '0.75' : '1')};
`;

const Text = styled.a`
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: rgb(17 24 39);
    margin-top: 1.5rem;
`;

const TextAbs = styled.span`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 10;
`;

const Sub = styled.p`
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: rgb(107 114 128);
`;

export { Container, ContainerImg, Img, Text, TextAbs, Sub };
