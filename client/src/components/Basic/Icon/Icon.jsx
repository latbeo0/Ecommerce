import React from "react";
import { Container } from "./IconStyled";

const Icon = ({ slot, icon, img, sizeIcon, children }) => {
    return (
        <Container slot={slot} sizeIcon={sizeIcon}>
            {img && <img src={img} alt="" />}
            {icon && icon}
        </Container>
    );
};

export default Icon;
