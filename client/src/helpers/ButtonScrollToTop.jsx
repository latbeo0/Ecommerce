import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowUp } from 'react-icons/md';

const Container = styled.button`
    position: fixed;
    bottom: 2rem;
    right: 5.5rem;
    padding: 0.5rem;
    color: var(--white-color);
    background: linear-gradient(var(--primary-color), var(--secondary-color));
    /* border: 1px solid var(--gray-color-light); */
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    z-index: 99999;

    & > svg {
        width: 30px;
        height: 30px;
    }
`;

const ButtonScrollToTop = (props) => {
    const { onClick } = props;

    return (
        <Container>
            <MdKeyboardArrowUp onClick={onClick} />
        </Container>
    );
};

export default ButtonScrollToTop;
