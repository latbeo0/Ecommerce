import React from 'react';
import { Container } from './IconStyled';

const Icon = ({ slot, icon, img, children }) => {
    return (
        <Container slot={slot}>
            {img && <img src={img} alt='' />}
            {icon && icon}
        </Container>
    );
};

export default Icon;
