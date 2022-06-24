import React from 'react';
import { ButtonNavbar } from './ButtonStyled';

const Button = (props) => {
    const { text, ...others } = props;

    return <ButtonNavbar {...others}>{text}</ButtonNavbar>;
};

export default Button;
