import styled from "styled-components";

const ListProductsContainer = styled.div`
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
`;

const ListProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 2rem;
`;

export { ListProductsContainer, ListProducts };
