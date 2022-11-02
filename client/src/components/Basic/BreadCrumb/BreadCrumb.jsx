import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Container, BreadCrumbItem } from "./BreadCrumbStyled";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const routes = [{ path: "/", breadcrumb: AiFillHome }];

const BreadCrumb = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <Container>
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <BreadCrumbItem key={match.pathname}>
                    <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                    <MdKeyboardArrowRight
                        style={{ fontSize: "1rem", margin: "0 1rem" }}
                    />
                </BreadCrumbItem>
            ))}
        </Container>
    );
};

export default BreadCrumb;
