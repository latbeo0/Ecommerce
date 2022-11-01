import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Filter from '../components/User/Filter';
import Footer from '../components/User/Footer';
import Header from '../components/User/Header';

const Container = styled.div`
    max-width: 80rem;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
`;

const Content = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 1rem;
    gap: 2rem;
`;

const HeaderFilterFooterPage = () => {
    return (
        <>
            <Header />
            <Container>
                <Filter />
                <Content>
                    <Outlet />
                </Content>
            </Container>
            <Footer />
        </>
    );
};

export default HeaderFilterFooterPage;
