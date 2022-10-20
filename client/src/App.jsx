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

const App = () => {
    // const dispatch = useDispatch();
    // const auth = useSelector((state) => state.auth);
    // const { isLogged, isAdmin } = auth;
    // const [loading, setLoading] = useState(true);
    const isAdmin = false;

    return (
        <BrowserRouter>
            <Routes>
                {isAdmin ? (
                    <Route path='/*' index />
                ) : (
                    <>
                        <Route path='/register' element={<Register />} />
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
                        <Route path='/products' element={<Products />} />
                        <Route path='/*' index element={<Home />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
