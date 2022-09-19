import Header from '../../components/User/Header';
import Banners from '../../components/User/Banners';
import { Button, Card } from '../../components/Basic';
import {
    Layout1,
    Layout2,
    Layout3,
    Layout4,
    LayoutBanner,
    Section,
} from './HomeStyled';
import { AiOutlineDelete } from 'react-icons/ai';

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

            <Section style={{ display: 'flex', gap: '8px' }}>
                <Button variant='text' size='small'>
                    Hello
                </Button>
                <Button variant='contained' size='small'>
                    Hello
                </Button>
                <Button variant='outlined' size='small'>
                    Hello
                </Button>
                <Button variant='text' disable size='small'>
                    Hello
                </Button>
                <Button variant='text' href='#' size='small'>
                    Hello
                </Button>
                <Button variant='contained' disable size='small'>
                    Hello
                </Button>
                <Button variant='contained' href='#' size='small'>
                    Hello
                </Button>
                <Button variant='outlined' disable size='small'>
                    Hello
                </Button>
                <Button variant='outlined' href='#' size='small'>
                    Hello
                </Button>
            </Section>

            <Section style={{ display: 'flex', gap: '8px' }}>
                <Button
                    variant='text'
                    startIcon={{
                        img: 'https://cdn-icons-png.flaticon.com/512/3096/3096673.png',
                    }}
                >
                    Hello
                </Button>
                <Button
                    variant='contained'
                    startIcon={{
                        icon: <AiOutlineDelete />,
                    }}
                >
                    Hello
                </Button>
                <Button variant='outlined'>Hello</Button>
                <Button variant='text' disable>
                    Hello
                </Button>
                <Button variant='text' href='#'>
                    Hello
                </Button>
                <Button variant='contained' disable>
                    Hello
                </Button>
                <Button variant='contained' href='#'>
                    Hello
                </Button>
                <Button variant='outlined' disable>
                    Hello
                </Button>
                <Button variant='outlined' href='#'>
                    Hello
                </Button>
            </Section>

            <Section style={{ display: 'flex', gap: '8px' }}>
                <Button variant='text' size='large'>
                    Hello
                </Button>
                <Button variant='contained' size='large'>
                    Hello
                </Button>
                <Button variant='outlined' size='large'>
                    Hello
                </Button>
                <Button variant='text' disable size='large'>
                    Hello
                </Button>
                <Button variant='text' href='#' size='large'>
                    Hello
                </Button>
                <Button variant='contained' disable size='large'>
                    Hello
                </Button>
                <Button variant='contained' href='#' size='large'>
                    Hello
                </Button>
                <Button variant='outlined' disable size='large'>
                    Hello
                </Button>
                <Button variant='outlined' href='#' size='large'>
                    Hello
                </Button>
            </Section>
        </>
    );
};

export default Home;
