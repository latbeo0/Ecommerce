import styled from 'styled-components';

const Container = styled.div`
    display: flex;

    & + & {
        margin-left: 3.2rem;
    }
`;

const WrapperBtn = styled.div`
    display: flex;
    position: relative;
`;

export { Container, WrapperBtn };
