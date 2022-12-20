import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/User/Footer";
import Header from "../components/User/Header";

const HeaderFooterPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default HeaderFooterPage;
