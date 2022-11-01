import React, { useState } from 'react';
import {
    Container,
    Background,
    Content,
    Title,
    Separate,
    Form,
    HelpContainer,
    BackHomeContainer,
} from './ResetPasswordStyled';
import { HiLockClosed } from 'react-icons/hi';
import { getErrorMessage } from '../../helpers/validation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputGroup from '../../components/Basic/InputGroup';
import Button from '../../components/Basic/Button';
import { Link, useParams } from 'react-router-dom';
import background from '../../assets/img/pexels-pixabay-267202.jpg';
import { fetchResetPassword } from '../../services/userFetch';

const inputs = [
    {
        id: 1,
        type: 'password',
        placeholder: 'Password',
        name: 'password',
        patterns: ['required', 'password'],
        label: 'New Password *',
        icon: <HiLockClosed />,
    },
    {
        id: 2,
        type: 'password',
        placeholder: 'Confirm Password',
        name: 'confirmPassword',
        patterns: ['required'],
        label: 'Confirm New Password *',
        icon: <HiLockClosed />,
    },
];

const ResetPassword = () => {
    const { token } = useParams();

    const [valuesForm, setValuesForm] = useState({
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
                    const res = await fetchResetPassword(
                        valuesForm.password,
                        token
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
                        toast.error(error.response.data.msg, {
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
                    <Title>Reset Password</Title>
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
                            content={'Reset Password'}
                            variant='contained'
                            style={{ lineHeight: '2rem', marginTop: '1rem' }}
                            type='submit'
                            effect
                            loading={valuesForm.loading}
                        />
                    </Form>
                    <HelpContainer>
                        {'- Login now -'}
                        <Link to='/login'>
                            <button type='button' disabled={valuesForm.loading}>
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

export default ResetPassword;
