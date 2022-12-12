import styled from 'styled-components';

const Container = styled.div`
    max-width: 80rem;
    margin: 1rem auto;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
`;

const ProductsContainer = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 1rem;
    gap: 2rem;
`;

const HeaderProductsWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    gap: 2rem;
`;

const DisplayContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
`;

const SortContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const SortChooseContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const SortChooseButton = styled.button`
    padding: 0.5rem 1rem;
    border: ${(props) => !props.choose && '1px solid var(--gray-color-light)'};
    border-radius: 1rem;
    background: ${(props) => props.choose && 'var(--primary-color)'};
    color: ${(props) => props.choose && 'var(--white-color)'};
`;

const CountProductsSelect = styled.select``;

const CountProductsOption = styled.option``;

const CountProductsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const BodyProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
        props.isLoading ? '1fr' : '1fr 1fr 1fr'};
    gap: 1rem;
    height: fit-content;
`;

const FooterProductsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
`;

export {
    Container,
    Content,
    ProductsContainer,
    HeaderProductsWrapper,
    DisplayContainer,
    SortContainer,
    SortChooseContainer,
    SortChooseButton,
    CountProductsSelect,
    CountProductsOption,
    CountProductsContainer,
    BodyProductsWrapper,
    FooterProductsWrapper,
};
