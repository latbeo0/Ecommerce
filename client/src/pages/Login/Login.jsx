import React from "react";
import {
    Container,
    Background,
    Content,
    Logo,
    Title,
    ButtonsSocial,
    ButtonExample,
    Separate,
    Form,
    ButtonGroup,
    Input,
    HelpContainer,
    ForgotContainer,
    RegisterContainer,
} from "./LoginStyled";
import background from "../../assets/img/pexels-lisa-fotios-1909015.jpg";
import Button from "../../components/Basic/Button";

const Login = () => {
    return (
        <Container>
            <Content>
                <Logo>
                    <img src="" />
                </Logo>
                <Title>Login</Title>
                <ButtonsSocial>
                    <Button
                        startIcon={{
                            img: "https://cdn-icons-png.flaticon.com/128/2991/2991148.png",
                        }}
                        content="Google"
                        variant="outlined"
                        style={{ lineHeight: "2rem" }}
                    />
                    <Button
                        startIcon={{
                            img: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png",
                        }}
                        content="Facebook"
                        variant="outlined"
                        style={{ lineHeight: "2rem" }}
                    />
                </ButtonsSocial>
                <Separate />
                <Form>
                    <ButtonGroup>
                        <Input placeholder="Emmail Address" />
                    </ButtonGroup>
                    <ButtonGroup>
                        <Input placeholder="Password" />
                    </ButtonGroup>
                    <Button
                        content={"Sign In"}
                        variant="contained"
                        effect
                        style={{ lineHeight: "2rem" }}
                    />
                </Form>
                <HelpContainer>
                    <ForgotContainer>
                        <a href="#">Forgot password?</a>
                    </ForgotContainer>
                    <RegisterContainer>
                        Don't have account ? <a href="#">Sign up</a>
                    </RegisterContainer>
                </HelpContainer>
            </Content>
            <Background src={background} />
        </Container>
    );
};

export default Login;
