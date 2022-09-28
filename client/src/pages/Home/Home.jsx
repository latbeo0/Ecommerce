import Header from '../../components/User/Header';
import Banners from '../../components/User/Banners';
import { Card } from '../../components/Basic';
import {
    LayoutCards,
    LayoutBanner,
    Section,
    Services,
    Service,
    HeaderSection,
    Title,
    Description,
    ViewAll,
    ContentSection,
    CategoryCard,
    ImageCategory,
    TitleCategory,
    BodySection,
    Product,
    ProductImage,
    HeartContainer,
    Image,
    ProductContent,
    ProductContentHeader,
    ProductTitle,
    ProductStars,
    ProductStar,
    ProductContentBody,
    ProductSale,
    Sale,
    ProductPrice,
    PriceOld,
    PriceNew,
    ProductContentFooter,
    ProductButton,
    Footer,
    GetInTouch,
    TitleFooter,
} from './HomeStyled';
import { HiCheck } from 'react-icons/hi';
import { FaShippingFast, FaPhoneVolume } from 'react-icons/fa';
import { AiOutlineSwap } from 'react-icons/ai';
import { BsArrowRightShort, BsStarFill, BsHeart } from 'react-icons/bs';
import heartIcon from '../../assets/img/heart.png';
import heartIcon1 from '../../assets/img/heart (1).png';
import heartIcon2 from '../../assets/img/heart (2).png';
import ProductCard from './../../components/User/ProductCard';

const Home = () => {
    return (
        <>
            <Header />
            <Section>
                <LayoutBanner>
                    <Banners />
                    <LayoutCards>
                        <Card title='Special Offer' description='Save 74%' />
                        <Card title='Special Offer' description='Save 74%' />
                    </LayoutCards>
                </LayoutBanner>
            </Section>
            <Section>
                <Services>
                    <Service>
                        <HiCheck /> Quality Product
                    </Service>
                    <Service>
                        <FaShippingFast /> Free Shipping
                    </Service>
                    <Service>
                        <AiOutlineSwap /> 14-Day Return
                    </Service>
                    <Service>
                        <FaPhoneVolume /> 24/7 Support
                    </Service>
                </Services>
            </Section>
            <Section>
                <HeaderSection type='categories'>
                    <Title>Categories</Title>
                    <ViewAll>
                        Browse all categories
                        <BsArrowRightShort />
                    </ViewAll>
                </HeaderSection>
                <ContentSection>
                    <CategoryCard>
                        <ImageCategory
                            alt='category image'
                            src='https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1600'
                        />
                        <TitleCategory>Men</TitleCategory>
                    </CategoryCard>
                    <CategoryCard>
                        <ImageCategory
                            alt='category image'
                            src='https://images.pexels.com/photos/1858407/pexels-photo-1858407.jpeg?auto=compress&cs=tinysrgb&w=1600'
                        />
                        <TitleCategory>Women</TitleCategory>
                    </CategoryCard>
                    <CategoryCard>
                        <ImageCategory
                            alt='category image'
                            src='https://images.pexels.com/photos/1620815/pexels-photo-1620815.jpeg?auto=compress&cs=tinysrgb&w=1600'
                        />
                        <TitleCategory>Children</TitleCategory>
                    </CategoryCard>
                </ContentSection>
            </Section>
            <Section>
                <HeaderSection type='categories'>
                    <Title>Best Seller</Title>
                    <ViewAll>
                        Browse all products
                        <BsArrowRightShort />
                    </ViewAll>
                </HeaderSection>
                <BodySection>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </BodySection>
            </Section>
            <Footer>
                <GetInTouch>
                    <TitleFooter>Get in touch</TitleFooter>
                </GetInTouch>
            </Footer>
        </>
    );
};

export default Home;
