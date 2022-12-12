import {
    Container,
    WrapperUser,
    Separate,
    WrapperLanguage,
    WrapperSearch,
    WrapperCart,
    SpaceCart,
} from './UserMenuStyled';
import { Button } from '../../Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './../../../../redux/userSlice';
import { fetchLogout } from '../../../../services/userFetch';
import Avatar from '../../Avatar';
import { selectCart } from '../../../../redux/cartSlice';

const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(selectUser);
    const cart = useSelector(selectCart);

    const getFullName = (firstName, lastName) => {
        if (firstName && lastName) {
            return `${firstName} ${lastName}`;
        }

        if (firstName) return firstName;
        if (lastName) return lastName;

        return 'New User';
    };

    const { currentUser, isLoading, isError } = user;

    const handleLogout = async () => {
        await dispatch(fetchLogout({ dispatch })).unwrap();
        navigate('/');
    };

    return (
        <Container>
            {user.currentUser ? (
                <WrapperUser>
                    <Avatar
                        link='/profile'
                        src={currentUser?.avatar}
                        text={getFullName(
                            currentUser?.firstName,
                            currentUser?.lastName
                        )}
                    />
                    <Separate />
                    <Button
                        href='#'
                        content='Log out'
                        color='var(--black-color)'
                        padding='0'
                        onClick={handleLogout}
                    />
                </WrapperUser>
            ) : (
                <WrapperUser>
                    <Link to='/login'>
                        <Button
                            href='#'
                            content='Sign in'
                            color='var(--black-color)'
                            padding='0'
                        />
                    </Link>
                    <Separate />
                    <Link to='register'>
                        <Button
                            href='#'
                            content='Create account'
                            color='var(--black-color)'
                            padding='0'
                        />
                    </Link>
                </WrapperUser>
            )}

            <WrapperLanguage>
                <Button
                    href='#'
                    startIcon={{
                        img: 'https://tailwindui.com/img/flags/flag-canada.svg',
                    }}
                    content='CAD'
                    color='var(--black-color)'
                    padding='0'
                />
            </WrapperLanguage>
            <WrapperSearch>
                <Button
                    href='#'
                    color='var(--black-color)'
                    startIcon={{
                        icon: (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                                style={{ width: '1.5rem', height: '1.5rem' }}
                            >
                                <path
                                    strokeLinejoin='round'
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                ></path>
                            </svg>
                        ),
                    }}
                    sizeIcon='1.25rem'
                    padding='0'
                />
            </WrapperSearch>
            <WrapperCart>
                <Link to='/cart'>
                    <Button
                        href='#'
                        content={cart.listProducts.length}
                        color='var(--black-color)'
                        endIcon={{
                            icon: (
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='2'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                    style={{
                                        width: '1.5rem',
                                        height: '1.5rem',
                                    }}
                                >
                                    <path
                                        strokeLinecap='round'
                                        d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                                    ></path>
                                </svg>
                            ),
                        }}
                        sizeIcon='1.25rem'
                        padding='0'
                        style={{ height: '100%' }}
                    />
                </Link>
                {/* <SpaceCart>
                    <StepsCart></StepsCart>
                    <ContentCart>
                        <ListProductsCart>
                            <ItemCart></ItemCart>
                        </ListProductsCart>
                        <OrderSummary>
                            
                        </OrderSummary>
                    </ContentCart>
                </SpaceCart> */}
            </WrapperCart>
        </Container>
    );
};

export default UserMenu;
