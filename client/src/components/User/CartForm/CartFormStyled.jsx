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
    max-height: 62.5rem;
    overflow-y: scroll;
`;

const HeaderList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const CheckAll = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: ${(props) =>
        props.checked
            ? "1px solid var(--primary-color-border)"
            : "1px solid var(--gray-color)"};
    border-radius: 0.5rem;
    position: relative;
    cursor: pointer;

    &::before {
        content: "All";
        position: absolute;
        top: 50%;
        left: 150%;
        transform: translateY(-50%);
        font-size: 1rem;
        font-weight: 400;
    }

    & > svg {
        color: ${(props) =>
            props.checked
                ? "var(--primary-color-border)"
                : "var(--gray-color)"};
    }
`;

const ButtonClearAll = styled.div`
    outline: 0;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    position: relative;

    font-size: 0.9375rem;
    font-weight: 500;
    padding: 10px 40px;

    color: var(--red-color);
    background-color: rgba(255, 0, 0, 0.05);

    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background-color: rgba(255, 0, 0, 0.1);
    }
`;

export {
    ListProductsContainer,
    ListProducts,
    HeaderList,
    CheckAll,
    ButtonClearAll,
};
