import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import AdminRouter from './pages/cms/AdminRouter';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ActiveEmail from './pages/ActiveEmail';
import ResetPassword from './pages/ResetPassword';
import Products from './pages/Products';
import HeaderFooterPage from './layouts/HeaderFooterPage';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './helpers/ScrollToTop';
import Product from './pages/Product';
import { fetchGetAccessToken, fetchLogout } from './services/userFetch';
import { selectAuth } from './redux/authSlice';
import { selectUser } from './redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ButtonScrollToTop from './helpers/ButtonScrollToTop';
import { fetchGetProducts } from './services/productFetch';

const App = () => {
    const dispatch = useDispatch();
    // const dispatch = useDispatch();
    // const auth = useSelector((state) => state.auth);
    // const { isLogged, isAdmin } = auth;
    // const [loading, setLoading] = useState(true);
    const isAdmin = false;

    // Get access_token
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
            }
        };
        fetchAccessToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.isLogged]);

    // Button Scroll To Top
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });

        return () =>
            window.removeEventListener('scroll', () => {
                return;
            });
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    // Fetch api
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const pageSize = 15;
                const pageIndex = 1;

                await dispatch(
                    fetchGetProducts({ pageSize, pageIndex })
                ).unwrap();
            } catch (error) {
                console.log('/App/fetchProducts');
            }
        };
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <ScrollToTop />
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
                            <Route path='/' element={<HeaderFooterPage />}>
                                <Route index element={<Home />} />
                                <Route
                                    path='/products/:codeProduct'
                                    element={<Product />}
                                />
                                <Route
                                    path='/products'
                                    element={<Products />}
                                />
                            </Route>
                        </>
                    )}
                </Routes>
            </BrowserRouter>
            {isScroll ? (
                <ButtonScrollToTop onClick={() => handleScrollToTop()} />
            ) : null}
        </>
    );
};

export default App;
