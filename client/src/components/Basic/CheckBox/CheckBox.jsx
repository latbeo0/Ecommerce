import React from "react";
import { Container, Label, Input } from "./CheckBoxStyled";

const CheckBox = (props) => {
    const { label } = props;

    return (
        <Container>
            <Input />
            <Label>{label}</Label>
        </Container>
    );
};

export default CheckBox;
