import styled from 'styled-components';

const Section = styled.section`
    max-width: 128rem;
    margin: 2.4rem auto 0;
`;

const LayoutBanner = styled.div`
    /* height: 430px; */
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
`;

const Layout1 = styled.div`
    /* background: red; */
`;

const Layout2 = styled.div`
    /* background: green; */
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
`;

const Layout3 = styled.div`
    /* background: yellow; */
`;

const Layout4 = styled.div`
    /* background: gray; */
`;

export { Section, LayoutBanner, Layout1, Layout2, Layout3, Layout4 };
