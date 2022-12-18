import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../helpers/Loading';
import { fetchLogin } from '../../services/authFetch';

const GoogleLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userTest, setUserTest] = useState(null);

    useEffect(() => {
        const getUser = () => {
            fetch('http://localhost:5000/api/auth/login/success', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    throw new Error('authentication has been failed!');
                })
                .then((resObject) => {
                    setUserTest(resObject.user);
                    dispatch(
                        fetchLogin({
                            provider: 'google',
                        })
                    ).unwrap();
                    navigate('/');
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUser();
    }, [dispatch, navigate]);

    console.log(userTest);

    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <Loading />
        </div>
    );
};

export default GoogleLogin;
