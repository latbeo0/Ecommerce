import {
    Container,
    WrapperUser,
    UserFunc,
    Separate,
    WrapperLanguage,
    Language,
    Flag,
    LanguageName,
    WrapperSearch,
    WrapperCart,
    Search,
    SearchTool,
    Cart,
    CartCount,
    CartTool,
} from './UserMenuStyled';

const UserMenu = () => {
    return (
        <Container>
            <WrapperUser>
                <UserFunc href='#'>Sign In</UserFunc>
                <Separate />
                <UserFunc href='#'>Create Account</UserFunc>
            </WrapperUser>
            <WrapperLanguage>
                <Language href='#'>
                    <Flag src='https://tailwindui.com/img/flags/flag-canada.svg' />
                    <LanguageName>CAD</LanguageName>
                </Language>
            </WrapperLanguage>
            <WrapperSearch>
                <Search href='#'>
                    <SearchTool>Search</SearchTool>
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
                </Search>
            </WrapperSearch>
            <WrapperCart>
                <Cart href='#'>
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
                            color: 'rgb(156 163 175 / 1)',
                        }}
                    >
                        <path
                            strokeLinecap='round'
                            d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                        ></path>
                    </svg>
                    <CartCount>0</CartCount>
                    <CartTool>items in cart, view bag</CartTool>
                </Cart>
            </WrapperCart>
        </Container>
    );
};

export default UserMenu;
