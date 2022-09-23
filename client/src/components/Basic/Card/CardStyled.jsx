import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
`;

// const animationScaleRotate

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 250%;
    background: url('https://images.pexels.com/photos/2016145/pexels-photo-2016145.jpeg?auto=compress&cs=tinysrgb&w=1600');
    background-position: center;
    background-size: cover;

    &:hover {
        transform: scale(1.2) rotate(10deg);
        transition: all 250ms ease-in;
    }
`;

const Content = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--white-color);
    pointer-events: none;

    & ~ *:hover {
        transform: scale(1.2) rotate(10deg);
    }
`;

const Title = styled.h1`
    font-size: 2.4rem;
    padding: 1.6rem 0;
`;

const Description = styled.span`
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
`;

export { Container, Background, Content, Title, Description };
