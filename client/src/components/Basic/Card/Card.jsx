import React from "react";
import Button from "../Button";
import {
    Container,
    Background,
    Content,
    Title,
    Description,
} from "./CardStyled";

const Card = ({ title, description }) => {
    return (
        <Container>
            <Content>
                {description && <Description>{description}</Description>}
                {title && <Title>{title}</Title>}
                <Button variant="contained" content="SHOP NOW" />
                <Background />
            </Content>
        </Container>
    );
};

export default Card;
