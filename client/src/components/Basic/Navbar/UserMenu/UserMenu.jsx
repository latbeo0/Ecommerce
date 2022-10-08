import {
    Container,
    WrapperUser,
    Separate,
    WrapperLanguage,
    WrapperSearch,
    WrapperCart,
} from './UserMenuStyled';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';

const UserMenu = () => {
    return (
        <Container>
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
                <Button
                    href='#'
                    content='0'
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
                />
            </WrapperCart>
        </Container>
    );
};

export default UserMenu;
