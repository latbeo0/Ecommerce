import styled from 'styled-components';

const Container = styled.div`
    font-size: 1.4rem;
    line-height: 2rem;

    position: relative;
`;

const ContainerImg = styled.div`
    background-color: rgb(243 244 246 / 1);
    border-radius: 0.8rem;
    overflow: hidden;
`;

const Img = styled.img`
    object-fit: cover;
    object-position: center;
    opacity: ${(props) => (props.hover ? '0.75' : '1')};
`;

const Text = styled.a`
    display: block;
    font-size: 1.4rem;
    font-weight: 500;
    color: rgb(17 24 39 / 1);
    margin-top: 2.4rem;
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
    margin-top: 0.4rem;
    font-size: 1.4rem;
    color: rgb(107 114 128 / 1);
`;

export { Container, ContainerImg, Img, Text, TextAbs, Sub };
