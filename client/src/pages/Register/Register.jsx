import React, { useState } from 'react';
import Button from '../../components/Basic/Button';
import {
    Container,
    Background,
    Content,
    Title,
    Separate,
    Form,
    HelpContainer,
    BackHomeContainer,
} from './RegisterStyled';
import background from '../../assets/img/pexels-lisa-fotios-1909015.jpg';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { HiLockClosed } from 'react-icons/hi';
import { getErrorMessage } from '../../helpers/validation';
import InputGroup from '../../components/Basic/InputGroup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchRegister } from '../../services/authFetch';

const inputs = [
    {
        id: 1,
        type: 'email',
        placeholder: 'Example: example@gmail.com',
        name: 'email',
        patterns: ['required', 'email'],
        label: 'Email *',
        icon: <AiOutlineUser />,
    },
    {
        id: 2,
        type: 'password',
        placeholder: 'Password',
        name: 'password',
        patterns: ['required', 'password'],
        label: 'Password *',
        icon: <HiLockClosed />,
    },
    {
        id: 3,
        type: 'password',
        placeholder: 'Confirm Password',
        name: 'confirmPassword',
        patterns: ['required'],
        label: 'Confirm Password *',
        icon: <HiLockClosed />,
    },
];

const Register = () => {
    const [valuesForm, setValuesForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        loading: false,
        showErr: false,
    });

    const [errorsForm, setErrorsForm] = useState(() => {
        const errorInit = {};
        // eslint-disable-next-line array-callback-return
        inputs.map((input) => {
            const { name, value = '', patterns } = input;
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

        if (name === 'confirmPassword') {
            if (value !== valuesForm.password) {
                setErrorsForm({
                    ...errorsForm,
                    [name]: ['Confirm password not match with password'],
                });
            }
        }
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
                'Error to Sign in. Please check all field in form again!',
                {
                    position: 'top-right',
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
                    const res = await fetchRegister(
                        valuesForm.email,
                        valuesForm.password
                    );

                    toast.success(res.data.msg, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } catch (error) {
                    error.response?.data.msg &&
                        toast.error(error.response?.data.msg, {
                            position: 'top-right',
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
                    <Title>Register</Title>
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
                                readOnly={valuesForm.loading}
                            />
                        ))}
                        <Button
                            content={'Sign Up'}
                            variant='contained'
                            style={{ lineHeight: '2rem', marginTop: '1rem' }}
                            type='submit'
                            effect
                            loading={valuesForm.loading}
                        />
                    </Form>
                    <HelpContainer>
                        Already have account ?{' '}
                        <Link to='/login'>
                            <button
                                type='button'
                                href='#'
                                disabled={valuesForm.loading}
                            >
                                Sign in
                            </button>
                        </Link>
                    </HelpContainer>
                </Content>
                <Background src={background} alt='background' />
            </Container>
            <BackHomeContainer>
                <Link to='/home'>
                    <button type='button' disabled={valuesForm.loading}>
                        {'< Back to Home'}
                    </button>
                </Link>
            </BackHomeContainer>
        </>
    );
};

export default Register;
