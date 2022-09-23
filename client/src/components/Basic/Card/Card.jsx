import React from 'react';
import Button from '../Button';
import {
    Container,
    Background,
    Content,
    Title,
    Description,
} from './CardStyled';

const Card = ({ title, description }) => {
    return (
        <Container>
            <Background />
            <Content>
                <Description>{description}</Description>
                <Title>{title}</Title>
                <Button variant='contained' content='SHOP NOW' />
            </Content>
        </Container>
    );
};

export default Card;
