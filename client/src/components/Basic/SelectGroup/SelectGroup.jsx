import React, { useState } from "react";
import { Container, Label, ErrorMessage } from "./SelectGroupStyled";
import Select from "react-select";

const colorStyled = {
    control: (styles) => ({ ...styles, border: "1px solid red" }),
};

const SelectGroup = (props) => {
    const {
        label,
        placeholder,
        options,
        value,
        defaultValue,
        errorMessage,
        onChange,
    } = props;

    const [focused, setFocused] = useState(false);

    return (
        <Container
            // focused={showErr ? showErr.toString() : focused.toString()}
            focused={focused.toString()}
            errorMessage={errorMessage}
        >
            <Label>{label}</Label>
            <Select
                placeholder={placeholder}
                options={options}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
                onBlur={() => setFocused(true)}
                styles={focused && errorMessage && colorStyled}
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Container>
    );
};

export default SelectGroup;
