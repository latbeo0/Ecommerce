import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1024px) {
        margin-left: 2.4rem;
    }
`;

const Icon = styled.img`
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
`;

const Text = styled.p`
    font-size: 1.6rem;
    font-weight: 700;
`;

export { Container, Icon, Text };
