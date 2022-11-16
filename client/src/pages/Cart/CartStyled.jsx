import styled from 'styled-components';

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

const ContentForm = styled.div``;

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
    border: 1px solid black;
`;

export {
    Container,
    Wrapper,
    StepsCart,
    FormCheckout,
    ContentForm,
    ButtonsForm,
    Button,
};
