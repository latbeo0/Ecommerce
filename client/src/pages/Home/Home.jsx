import Header from '../../components/User/Header';
import Banners from '../../components/User/Banners';
import { Card } from '../../components/Basic';
import {
    Layout1,
    Layout2,
    Layout3,
    Layout4,
    LayoutBanner,
    Section,
} from './HomeStyled';

const Home = () => {
    return (
        <>
            <Header />
            <Section>
                <LayoutBanner>
                    <Layout1>
                        <Banners />
                    </Layout1>
                    <Layout2>
                        <Layout3>
                            <Card />
                        </Layout3>
                        <Layout4>
                            <Card />
                        </Layout4>
                    </Layout2>
                </LayoutBanner>
            </Section>
        </>
    );
};

export default Home;
