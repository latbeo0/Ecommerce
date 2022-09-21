import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    position: relative;
`;

const ContentWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 12px;
`;

const Content = styled.div`
    display: flex;
    transition: all 250ms linear;
    -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
    //scrollbar-width: none; /* hide scrollbar in Firefox */

    &::-webkit-scrollbar {
        display: none;
    }

    & > * {
        width: ${(props) => `calc(100% / ${props.show})`};
        flex-shrink: 0;
        flex-grow: 1;
    }
`;

const Arrow = styled.button`
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: white;
    border: 1px solid #ddd;
    left: ${(props) => props.direction === 'left' && '24px'};
    right: ${(props) => props.direction === 'right' && '24px'};

    & > svg {
        width: 20pc;
        height: 20px;
    }

    @media (hover: none) and (pointer: coarse) {
        display: none;
    }
`;

export { Container, Wrapper, ContentWrapper, Content, Arrow };
