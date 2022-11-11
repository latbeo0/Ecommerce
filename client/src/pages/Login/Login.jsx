import React, { useState } from "react";
import {
    Container,
    Background,
    Content,
    Title,
    ButtonsSocial,
    Separate,
    Form,
    HelpContainer,
    RegisterContainer,
    BackHomeContainer,
} from "./LoginStyled";
import background from "../../assets/img/pexels-lisa-fotios-1909015.jpg";
import Button from "../../components/Basic/Button";
import { Link, useNavigate } from "react-router-dom";
import InputGroup from "../../components/Basic/InputGroup";
import { getErrorMessage } from "../../helpers/validation";
import { AiOutlineUser } from "react-icons/ai";
import { HiLockClosed } from "react-icons/hi";
import { fetchLogin } from "../../services/authFetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

const inputs = [
    {
        id: 1,
        type: "email",
        placeholder: "Example: example@gmail.com",
        name: "email",
        patterns: ["required", "email"],
        label: "Email *",
        icon: <AiOutlineUser />,
    },
    {
        id: 2,
        type: "password",
        placeholder: "Password",
        name: "password",
        patterns: ["required", "password"],
        label: "Password *",
        icon: <HiLockClosed />,
    },
];

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [valuesForm, setValuesForm] = useState({
        email: "",
        password: "",
        loading: false,
        showErr: false,
    });

    const [errorsForm, setErrorsForm] = useState(() => {
        const errorInit = {};
        // eslint-disable-next-line array-callback-return
        inputs.map((input) => {
            const { name, value = "", patterns } = input;
            const errs = getErrorMessage(value, patterns);
            errorInit[name] = errs;
        });
        return errorInit;
    });

    const handleChangeValuesForm = (e) => {
        const { name, value } = e.target;
        setValuesForm({ ...valuesForm, [name]: value });
    };

    const handleErrorForm = (e) => {
        const { name, value } = e.target;
        // const patterns = e.target.attributes["patterns"].nodeValue.split(",");
        const patterns = inputs.filter((input) => input.name === name)[0]
            .patterns;
        const err = getErrorMessage(value, patterns);
        setErrorsForm({ ...errorsForm, [name]: err });
    };

    const handleChange = (e) => {
        handleChangeValuesForm(e);
        handleErrorForm(e);
    };

    const checkHaveErrorsMessage = () => {
        return Object.values(errorsForm).flat().length !== 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (valuesForm.loading) return;
        setValuesForm({ ...valuesForm, loading: true });

        const check = checkHaveErrorsMessage();
        if (check) {
            setValuesForm({ ...valuesForm, showErr: true, loading: false });
            toast.error(
                "Error to Sign in. Please check all field in form again!",
                {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            );
        } else {
            const fetchData = async () => {
                try {
                    // await fetchLogin(valuesForm.email, valuesForm.password);
                    await dispatch(
                        fetchLogin({
                            email: valuesForm.email,
                            password: valuesForm.password,
                        })
                    ).unwrap();
                    navigate("/");
                } catch (error) {
                    toast.error(error.message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } finally {
                    setValuesForm({ ...valuesForm, loading: false });
                }
            };
            fetchData();
        }
    };

    return (
        <>
            <Container>
                <Content>
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
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        {inputs.map((input) => (
                            <InputGroup
                                {...input}
                                key={input.id}
                                value={valuesForm[input.name]}
                                errorMessage={errorsForm[input.name][0]}
                                showErr={valuesForm.showErr}
                                onChange={handleChange}
                            />
                        ))}
                        <Button
                            content={"Sign In"}
                            variant="contained"
                            effect
                            style={{ lineHeight: "2rem", marginTop: "1rem" }}
                            type="submit"
                            loading={valuesForm.loading}
                        />
                    </Form>
                    <HelpContainer>
                        <Link to="/forgot_password">
                            <button type="button" disabled={valuesForm.loading}>
                                Forgot password?
                            </button>
                        </Link>
                        <RegisterContainer>
                            Don't have account ?{" "}
                            <Link to="/register">
                                <button
                                    type="button"
                                    disabled={valuesForm.loading}
                                >
                                    Sign up
                                </button>
                            </Link>
                        </RegisterContainer>
                    </HelpContainer>
                </Content>
                <Background src={background} alt="background" />
            </Container>
            <BackHomeContainer>
                <Link to="/">
                    <button type="button" disabled={valuesForm.loading}>
                        {"< Back to Home"}
                    </button>
                </Link>
            </BackHomeContainer>
        </>
    );
};

export default Login;
