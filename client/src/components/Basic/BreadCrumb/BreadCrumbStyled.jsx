import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 1rem 2rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    width: -webkit-fill-available;
`;

const BreadCrumbItem = styled.div`
    display: flex;
    align-items: center;
`;

export { Container, BreadCrumbItem };
