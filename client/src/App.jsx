import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ActiveEmail from './pages/ActiveEmail';
import ResetPassword from './pages/ResetPassword';
import Products from './pages/Products';
import AccessToken from './pages/AccessToken';
import BlankPage from './layouts/BlankPage';
import HeaderFooterPage from './layouts/HeaderFooterPage';
import { ToastContainer } from 'react-toastify';

const App = () => {
    // const dispatch = useDispatch();
    // const auth = useSelector((state) => state.auth);
    // const { isLogged, isAdmin } = auth;
    // const [loading, setLoading] = useState(true);
    const isAdmin = false;

    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    {isAdmin ? (
                        <Route path='/*' index />
                    ) : (
                        <>
                            <Route path='/' element={<BlankPage />}>
                                <Route index element={<AccessToken />} />
                                <Route
                                    path='/register'
                                    element={<Register />}
                                />
                                <Route
                                    path='/activate_email/:activationToken'
                                    element={<ActiveEmail />}
                                />
                                <Route path='/login' element={<Login />} />
                                <Route
                                    path='/forgot_password'
                                    element={<ForgotPassword />}
                                />
                                <Route
                                    path='/reset_password/:token'
                                    element={<ResetPassword />}
                                />
                            </Route>
                            <Route path='/' element={<HeaderFooterPage />}>
                                <Route path='/home' element={<Home />} />
                                <Route
                                    path='/products'
                                    element={<Products />}
                                />
                            </Route>
                            {/* <Route path='/register' element={<Register />} />
                        <Route
                            path='/activate_email/:activationToken'
                            element={<ActiveEmail />}
                        />
                        <Route path='/login' element={<Login />} />
                        <Route
                            path='/forgot_password'
                            element={<ForgotPassword />}
                        />
                        <Route
                            path='/reset_password/:token'
                            element={<ResetPassword />}
                        /> */}
                            {/* <Route path='/access_token' element={<AccessToken />} /> */}
                        </>
                    )}
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
