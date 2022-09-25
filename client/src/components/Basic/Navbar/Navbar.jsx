import { Nav, Container, Wrapper, Logo, ButtonToggle } from './NavbarStyled';
import FlyoutMenu from './FlyoutMenu';
import UserMenu from './UserMenu';

const Navbar = (props) => {
    const { funcActive, navigation } = props;

    return (
        <Nav>
            <Container>
                <Wrapper>
                    <ButtonToggle
                        onClick={() => funcActive()}
                        color='var(--black-color)'
                        sizeIcon='1.5rem'
                    >
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
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M4 6h16M4 12h16M4 18h16'
                            ></path>
                        </svg>
                    </ButtonToggle>
                    <Logo
                        href={'/'}
                        startIcon={{
                            img: 'https://cdn-icons-png.flaticon.com/128/7844/7844708.png',
                        }}
                        content={'Tika.'}
                        color='var(--black-color)'
                        sizeIcon='50px'
                        padding='0'
                    />
                    <FlyoutMenu navigation={navigation} />
                    <UserMenu />
                </Wrapper>
            </Container>
        </Nav>
    );
};

export default Navbar;
