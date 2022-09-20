import {
    Container,
    WrapperUser,
    Separate,
    WrapperLanguage,
    WrapperSearch,
    WrapperCart,
} from './UserMenuStyled';
import { Button } from '../../Button';

const UserMenu = () => {
    return (
        <Container>
            <WrapperUser>
                <Button
                    href={'#'}
                    content={'Sign in'}
                    color='black'
                    effect={false}
                />
                <Separate />
                <Button
                    href={'#'}
                    content={'Create account'}
                    color='black'
                    effect={false}
                />
            </WrapperUser>
            <WrapperLanguage>
                <Button
                    href={'#'}
                    startIcon={{
                        img: 'https://tailwindui.com/img/flags/flag-canada.svg',
                    }}
                    content={'CAD'}
                    color='black'
                    effect={false}
                />
            </WrapperLanguage>
            <WrapperSearch>
                <Button
                    href={'#'}
                    color='black'
                    startIcon={{
                        icon: (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='2'
                                stroke='currentColor'
                                aria-hidden='true'
                                style={{ width: '2.4rem', height: '2.4rem' }}
                            >
                                <path
                                    strokeLinejoin='round'
                                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                ></path>
                            </svg>
                        ),
                    }}
                    effect={false}
                ></Button>
            </WrapperSearch>
            <WrapperCart>
                <Button
                    href={'#'}
                    content={'0'}
                    color='black'
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
                                    width: '2.4rem',
                                    height: '2.4rem',
                                }}
                            >
                                <path
                                    strokeLinecap='round'
                                    d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                                ></path>
                            </svg>
                        ),
                    }}
                    effect={false}
                />
            </WrapperCart>
        </Container>
    );
};

export default UserMenu;
