import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 250%;
    background: url('https://images.pexels.com/photos/2016145/pexels-photo-2016145.jpeg?auto=compress&cs=tinysrgb&w=1600');
    background-position: center;
    background-size: cover;
    transition: all 250ms ease-in;

    &:hover {
        transform: scale(1.2) rotate(10deg);
    }
`;

const Title = styled.h1``;

const Sale = styled.span``;

export { Container, Wrapper };
