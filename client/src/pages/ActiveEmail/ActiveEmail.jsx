import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    Container,
    Background,
    Content,
    Title,
    Loading,
    Image,
    Message,
    BackHomeContainer,
} from './ActiveEmailStyled';
import background from '../../assets/img/pexels-pixabay-267202.jpg';
import imageSuccessful from '../../assets/img/check.png';
import imageFailure from '../../assets/img/warning.png';
import { Link, useParams } from 'react-router-dom';
import { fetchActiveEmail } from '../../services/authFetch';

const ActiveEmail = () => {
    const { activationToken } = useParams();

    const [state, setState] = useState({
        loading: true,
        msg: 'Please wait to active email',
        error: false,
    });

    const type = useMemo(() => {
        return state.loading ? 'loading' : state.error ? 'error' : 'success';
    }, [state]);

    const didLogRef = useRef(false);

    useEffect(() => {
        if (activationToken && didLogRef.current === false) {
            didLogRef.current = true;

            const fetchData = async () => {
                try {
                    const res = await fetchActiveEmail(activationToken);
                    setState((prev) => ({
                        ...prev,
                        loading: false,
                        msg: res.data.msg,
                    }));
                } catch (error) {
                    error.response.data.msg &&
                        setState((prev) => ({
                            ...prev,
                            loading: false,
                            msg: error.response.data.msg,
                            error: true,
                        }));
                }
            };
            fetchData();
        }
    }, [activationToken]);

    return (
        <>
            <Container>
                <Content>
                    <Title type={type}>Active Email</Title>
                    {type === 'loading' ? (
                        <Loading />
                    ) : (
                        <>
                            <Image
                                src={
                                    type === 'error'
                                        ? imageFailure
                                        : imageSuccessful
                                }
                                alt='imageType'
                            />
                            <Message>{state.msg}</Message>
                        </>
                    )}
                </Content>
                <Background src={background} alt='background' />
            </Container>
            <BackHomeContainer>
                <Link to='/'>
                    <button type='button'>{'< Back to Home'}</button>
                </Link>
            </BackHomeContainer>
        </>
    );
};

export default ActiveEmail;
