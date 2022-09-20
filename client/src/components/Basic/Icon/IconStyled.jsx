import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    pointer-events: none;
    margin-right: ${(props) => props.slot === 'start' && '8px'};
    margin-left: ${(props) => props.slot === 'end' && '8px'};

    & > svg,
    img {
        width: 100%;
        height: 100%;
    }
`;

export { Container };
