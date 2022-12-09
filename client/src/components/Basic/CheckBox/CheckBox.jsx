import React from "react";
import { Container, Label, Input } from "./CheckBoxStyled";

const CheckBox = (props) => {
    const { name, label, checked, onChange } = props;

    return (
        <Container>
            <Input
                name={name}
                value={label}
                checked={checked}
                onChange={(e) => onChange(e)}
            />
            <Label>{label}</Label>
        </Container>
    );
};

export default CheckBox;
