import React, { useState } from "react";
import {
    Container,
    Label,
    Wrapper,
    IconContainer,
    Input,
    ErrorMessage,
} from "./InputGroupStyled";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const InputGroup = (props) => {
    const { id, label, errorMessage, showErr, icon, onChange, ...inputProps } =
        props;

    const [focused, setFocused] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    // console.log(id, 're-render');

    return (
        <Container>
            <Label htmlFor={`inputGroup${id}`}>{label}</Label>
            <Wrapper
                focused={showErr ? showErr.toString() : focused.toString()}
                errorMessage={errorMessage}
            >
                <Input
                    id={`inputGroup${id}`}
                    {...inputProps}
                    type={isShowPassword ? "text" : inputProps.type}
                    icon={icon}
                    onChange={onChange}
                    onBlur={() => setFocused(true)}
                    tabIndex={id}
                />
                {icon ? (
                    <IconContainer slot="start">{icon}</IconContainer>
                ) : null}
                {inputProps.type === "password" && (
                    <IconContainer
                        slot="end"
                        onClick={() => setIsShowPassword(!isShowPassword)}
                    >
                        {isShowPassword ? <VscEye /> : <VscEyeClosed />}
                    </IconContainer>
                )}
            </Wrapper>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Container>
    );
};

export default InputGroup;
