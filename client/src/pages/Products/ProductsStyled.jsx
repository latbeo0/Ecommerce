import styled from 'styled-components';

const Container = styled.div`
    max-width: 80rem;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
`;

const FilterContainer = styled.div`
    margin: 0 1rem;
    border-radius: 5px;
    height: fit-content;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const FilterSection = styled.div`
    padding: 1.5rem 1rem;

    & + & {
        border-top: 1px solid var(--gray-color-light);
    }
`;

const FilterTitle = styled.div`
    font-size: 1.125rem;
    font-weight: 500;
`;

const ButtonReset = styled.div`
    padding: 0.5rem 2rem;
    border: 1px solid var(--gray-color-light);
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 400;
`;

const FilterSectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.0625rem;
    font-weight: 500;
`;

const ButtonHide = styled.div`
    padding: 0.5rem 1rem;
    border: 1px solid var(--gray-color-light);
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

const FilterSectionBody = styled.div`
    padding-top: 2rem;

    input {
        margin-bottom: 1rem;
    }
`;

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`;

export {
    Container,
    FilterContainer,
    ProductsContainer,
    FilterSection,
    FilterTitle,
    ButtonReset,
    FilterSectionHeader,
    ButtonHide,
    FilterSectionBody,
};
