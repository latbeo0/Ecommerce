import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuth } from '../../redux/authSlice';
import { selectUser } from '../../redux/userSlice';
import { fetchGetAccessToken, fetchLogout } from '../../services/userFetch';
import { Container, Loading } from './AccessTokenStyled';

const AccessToken = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const auth = useSelector(selectAuth);
    const user = useSelector(selectUser);

    useEffect(() => {
        const fetchAccessToken = async () => {
            try {
                if (auth.isLogged && !user.currentUser) {
                    await dispatch(fetchGetAccessToken()).unwrap();
                }
            } catch (error) {
                await dispatch(fetchLogout()).unwrap();
            } finally {
                navigate('/home');
            }
        };
        fetchAccessToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Loading />
        </Container>
    );
};

export default AccessToken;
