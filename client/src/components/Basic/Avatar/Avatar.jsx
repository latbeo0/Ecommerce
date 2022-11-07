import React from "react";
import { Link } from "react-router-dom";
import { Container, AvatarContainer, AvatarImage, Text } from "./AvatarStyled";

const Avatar = (props) => {
    const { link, src, text } = props;

    return (
        <Link to={link}>
            <Container>
                <AvatarContainer>
                    <AvatarImage src={src} alt="avatar" />
                </AvatarContainer>
                <Text>{text}</Text>
            </Container>
        </Link>
    );
};

export default Avatar;
