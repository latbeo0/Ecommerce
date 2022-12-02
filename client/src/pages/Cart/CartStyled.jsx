import styled from "styled-components";

const Container = styled.div`
    max-width: 80rem;
    margin: 0 auto 2rem;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    gap: 2rem;
`;

const StepsCart = styled.div``;

const FormCheckout = styled.form`
    background: white;
    /* border: 1px solid black; */
    /* margin: 1rem; */
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ContentForm = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
`;

const SummaryContainer = styled.div`
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    height: fit-content;
`;

const ButtonsForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Button = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    border: 1px solid var(--gray-color);
    border-radius: 1rem;
    color: var(--gray-color);
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
`;

export {
    Container,
    Wrapper,
    StepsCart,
    FormCheckout,
    ContentForm,
    SummaryContainer,
    ButtonsForm,
    Button,
};
