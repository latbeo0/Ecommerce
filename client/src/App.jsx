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
import { fetchGetCart } from './services/cartFetch';
import { fetchGetAllCategory1 } from './services/categoryFetch';
import { fetchGetAllState } from './services/stateFetch';
import { fetchGetAllCollection1 } from './services/collectionFetch';
import { fetchGetAllColors } from './services/colorFetch';
import { fetchGetAllSizes } from './services/sizeFetch';
import Orders from './pages/Orders';
import { fetchGetAllOrder1 } from './services/orderFetch';
import Store from './pages/Store';
import PaySuccess from './pages/PaySuccess';
import { fetchGetAllMaterial1 } from './services/materialFetch';
import GoogleLogin from './pages/GoogleLogin';
import VnPayReturn from './pages/VnPayReturn';

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
                await dispatch(fetchLogout({ dispatch })).unwrap();
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

    useEffect(() => {
        const fetchCartOfUser = async () => {
            try {
                await dispatch(
                    fetchGetCart({ user: user.currentUser })
                ).unwrap();
            } catch (error) {
                console.log('/App/fetchCart');
            }
        };

        const fetchOrderOfUser = async () => {
            try {
                await dispatch(
                    fetchGetAllOrder1({ user: user.currentUser })
                ).unwrap();
            } catch (error) {
                console.log('/App/fetchOrder');
            }
        };

        if (user.currentUser) {
            fetchCartOfUser();
            fetchOrderOfUser();
        }
    }, [user.currentUser, dispatch]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                await dispatch(fetchGetAllCategory1()).unwrap();
            } catch (error) {
                console.log('/App/fetchCategories');
            }
        };
        fetchCategories();

        const fetchStates = async () => {
            try {
                await dispatch(fetchGetAllState()).unwrap();
            } catch (error) {
                console.log('/App/fetchStates');
            }
        };
        fetchStates();

        const fetchCollections = async () => {
            try {
                await dispatch(fetchGetAllCollection1()).unwrap();
            } catch (error) {
                console.log('/App/fetchCollections');
            }
        };
        fetchCollections();

        const fetchColors = async () => {
            try {
                await dispatch(fetchGetAllColors()).unwrap();
            } catch (error) {
                console.log('/App/fetchGetAllColors');
            }
        };
        fetchColors();

        const fetchSizes = async () => {
            try {
                await dispatch(fetchGetAllSizes()).unwrap();
            } catch (error) {
                console.log('/App/fetchGetAllSizes');
            }
        };
        fetchSizes();

        const fetchMaterials = async () => {
            try {
                await dispatch(fetchGetAllMaterial1()).unwrap();
            } catch (error) {
                console.log('/App/fetchMaterials');
            }
        };
        fetchMaterials();
    }, [dispatch]);

    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    {user?.currentUser && user.currentUser.level < 3 ? (
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
                                path='/login_google'
                                element={<GoogleLogin />}
                            />
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
                                <Route path='/orders' element={<Orders />} />
                                <Route path='/stores' element={<Store />} />
                                <Route
                                    path='/pay-successful'
                                    element={<PaySuccess />}
                                />
                                <Route
                                    path='/vnpay_return'
                                    element={<VnPayReturn />}
                                />
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
