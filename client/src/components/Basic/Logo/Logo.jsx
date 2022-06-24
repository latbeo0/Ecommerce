import React from 'react';
import { Container, Icon, Text } from './LogoStyled';
import logo from '../../../assets/img/shoes.png';

const TextIcon = ({ text }) => {
    return (
        <Container>
            <Icon src={logo} alt='Logo' />
            <Text>{text}</Text>
        </Container>
    );
};

export default TextIcon;
