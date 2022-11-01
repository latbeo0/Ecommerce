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
    padding: 1.5rem;

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

const SeeAll = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: var(--primary-color);
    text-decoration: underline;
    cursor: pointer;
    margin-top: 2rem;
`;

const FilterSectionBody = styled.div`
    padding-top: 2rem;
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

const SearchContainer = styled.div`
    position: relative;
    height: 4rem;
`;

const InputSearch = styled.input.attrs({
    type: 'text',
})`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 1rem 4rem;
    font-size: 1rem;
    font-weight: 300;
    line-height: 2rem;
    color: var(--gray-color);
    background: rgba(221, 221, 221, 0.2);
    outline: none;
    border: none;
    border-radius: 1rem;
`;

const ResultSearch = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: var(--gray-color);
    display: flex;
    gap: 0.5rem;
`;

const Result = styled.p`
    font-weight: 500;
    color: var(--black-color);
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
    gap: 2rem;
`;

const SortChooseContainer = styled.div`
    display: flex;
    gap: 1rem;
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
    gap: 1rem;
`;

const BodyProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    height: fit-content;
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
    SeeAll,
    FilterSectionBody,
    HeaderProductsWrapper,
    SearchContainer,
    InputSearch,
    ResultSearch,
    Result,
    DisplayContainer,
    SortContainer,
    SortChooseContainer,
    SortChooseButton,
    CountProductsSelect,
    CountProductsOption,
    CountProductsContainer,
    BodyProductsWrapper,
};
