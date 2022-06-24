import React from 'react';
import { Nav, Container, Wrapper } from './NavbarStyled';
import Logo from '../Logo';
import FlyoutMenu from '../FlyoutMenu';
import UserMenu from '../UserMenu';
import ToggleButton from '../ToggleButton';

const Navbar = (props) => {
    const { funcActive } = props;

    return (
        <Nav>
            <Container>
                <Wrapper>
                    <ToggleButton onClick={() => funcActive()} />
                    <Logo text={'TiKa.'} />
                    <FlyoutMenu />
                    <UserMenu />
                </Wrapper>
            </Container>
        </Nav>
    );
};

export default Navbar;
