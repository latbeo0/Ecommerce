import Banners from '../../components/User/Banners';
import { Card } from '../../components/Basic';
import {
    LayoutCards,
    LayoutBanner,
    Section,
    ServicesContainer,
    ServicesWrapper,
    Service,
    HeaderSection,
    Title,
    Decor,
    ViewAll,
    ContentSection,
    CategoryCard,
    ImageCategory,
    TitleCategory,
    BodySection,
} from './HomeStyled';
import { HiCheck } from 'react-icons/hi';
import { FaShippingFast, FaPhoneVolume } from 'react-icons/fa';
import { AiOutlineSwap } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import ProductCard from './../../components/User/ProductCard';
import { Link } from 'react-router-dom';
import Loading from '../../helpers/Loading';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchGetProductsBestSeller } from '../../services/productFetch';

const Home = () => {
    // const { listProducts, isLoading, isError } = useSelector(selectProducts);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        const callApi = async () => {
            const res = await fetchGetProductsBestSeller();
            setProducts(res.data.listProducts);
        };
        callApi()
            .then(() => {})
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <Section>
                <LayoutBanner>
                    <Banners />
                    <LayoutCards>
                        <Card title='Special Offer' description='Save 74%' />
                        <Card title='Special Offer' description='Save 74%' />
                    </LayoutCards>
                </LayoutBanner>
            </Section>
            <ServicesContainer>
                <ServicesWrapper>
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
                </ServicesWrapper>
            </ServicesContainer>
            <Section>
                <HeaderSection type='categories'>
                    <Title>
                        <Decor />
                        Categories
                    </Title>
                    <Link to='/products'>
                        <ViewAll>
                            Browse all categories
                            <BsArrowRightShort />
                        </ViewAll>
                    </Link>
                </HeaderSection>
                <ContentSection>
                    <Link to='/products?gender=Male'>
                        <CategoryCard>
                            <ImageCategory
                                alt='category image'
                                src='https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1600'
                            />
                            <TitleCategory>Men</TitleCategory>
                        </CategoryCard>
                    </Link>
                    <Link to='/products?gender=Female'>
                        <CategoryCard>
                            <ImageCategory
                                alt='category image'
                                src='https://images.pexels.com/photos/1858407/pexels-photo-1858407.jpeg?auto=compress&cs=tinysrgb&w=1600'
                            />
                            <TitleCategory>Women</TitleCategory>
                        </CategoryCard>
                    </Link>
                    <Link to='/products?gender=Unisex'>
                        <CategoryCard>
                            <ImageCategory
                                alt='category image'
                                // src='https://images.pexels.com/photos/1620815/pexels-photo-1620815.jpeg?auto=compress&cs=tinysrgb&w=1600'
                                src='https://images.pexels.com/photos/1684076/pexels-photo-1684076.jpeg?auto=compress&cs=tinysrgb&w=1600'
                            />
                            <TitleCategory>Unisex</TitleCategory>
                        </CategoryCard>
                    </Link>
                </ContentSection>
            </Section>
            <Section>
                <HeaderSection type='categories'>
                    <Title>
                        <Decor />
                        Best Seller
                    </Title>
                    <Link to='/products'>
                        <ViewAll>
                            Browse all products
                            <BsArrowRightShort />
                        </ViewAll>
                    </Link>
                </HeaderSection>
                <BodySection isLoading={isError || isLoading}>
                    {isError ? (
                        <span>Something wrong with api get products</span>
                    ) : isLoading ? (
                        <Loading />
                    ) : (
                        products?.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    )}
                </BodySection>
            </Section>
        </>
    );
};

export default Home;
