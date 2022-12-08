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
import Cart from './pages/Cart';
import {
    fetchDistrict,
    fetchProvince,
    fetchWard,
} from './services/locationFetch';
import Profile from './pages/Profile';
import WishList from './pages/WishList';
import NotFound from './pages/NotFound';

const App = () => {
    const dispatch = useDispatch();

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

        const fetchLocation = async () => {
            try {
                await dispatch(fetchProvince()).unwrap();
                await dispatch(fetchDistrict()).unwrap();
                await dispatch(fetchWard()).unwrap();
            } catch (error) {
                console.log('/App/fetchLocation');
            }
        };
        fetchLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    {user.currentUser?.vRole[0]?.level < 3 ? (
                        <Route path='/*' index element={<AdminRouter />} />
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
                                <Route path='/cart' element={<Cart />} />
                                {user.currentUser ? (
                                    <>
                                        <Route
                                            path='/profile'
                                            element={<Profile />}
                                        />
                                        <Route
                                            path='/wish_list'
                                            element={<WishList />}
                                        />
                                    </>
                                ) : null}
                            </Route>
                            <Route path='/*' element={<NotFound />} />
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
