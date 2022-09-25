import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 100;
`;

const Panel = styled.div`
    background-color: #fff;
    position: relative;
`;

const Wrapper = styled.div`
    max-width: 80rem;
    padding: 0 2rem;
    margin-left: auto;
    margin-right: auto;
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 2.5rem;
    column-gap: 2rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
`;

const SectionGroup = styled.div`
    grid-row-start: 1;

    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 2.5rem;
    column-gap: 2rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
`;

const FeaturedGroup = styled.div`
    grid-column-start: 2;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2.25rem;
`;

const Shadow = styled.div`
    position: absolute;
    top: 50%;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgb(255 255 255 / 1);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1); ;
`;

export {
    Container,
    Panel,
    Wrapper,
    Layout,
    SectionGroup,
    FeaturedGroup,
    Shadow,
};
