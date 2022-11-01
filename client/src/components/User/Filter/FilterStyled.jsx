import styled from 'styled-components';

const Container = styled.div`
    margin: 0 1rem;
    border-radius: 5px;
    height: fit-content;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Section = styled.div`
    padding: 1.5rem;

    & + & {
        border-top: 1px solid var(--gray-color-light);
    }
`;

const Title = styled.div`
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

const SectionHeader = styled.div`
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

const SectionBody = styled.div`
    padding-top: 2rem;
`;

export {
    Container,
    Section,
    Title,
    ButtonReset,
    SectionHeader,
    ButtonHide,
    SeeAll,
    SectionBody,
};
