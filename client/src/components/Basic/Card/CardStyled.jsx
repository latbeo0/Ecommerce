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
    min-height: 200px;

    @media only screen and (max-width: 600px) {
        min-height: 150px;
    }
`;

// const animationScaleRotate

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 250%;
    background: url('https://images.pexels.com/photos/2016145/pexels-photo-2016145.jpeg?auto=compress&cs=tinysrgb&w=1600');
    background-position: center;
    background-size: cover;
    transition: all 250ms ease-in;
    z-index: -1;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--white-color);
    position: relative;

    &:hover > div {
        transform: scale(1.2) rotate(10deg);
    }
`;

const Title = styled.h1`
    font-size: 1.5rem;
    padding: 1rem 0;
`;

const Description = styled.span`
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
`;

export { Container, Background, Content, Title, Description };
