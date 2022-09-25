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
} from './HomeStyled';
import { HiCheck } from 'react-icons/hi';
import { FaShippingFast, FaPhoneVolume } from 'react-icons/fa';
import { AiOutlineSwap } from 'react-icons/ai';
import { BsArrowRightShort, BsStarFill } from 'react-icons/bs';

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
                    <Product>
                        <ProductImage>
                            <Image
                                alt='img'
                                src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600'
                            />
                        </ProductImage>
                        <ProductContent>
                            <ProductContentHeader>
                                <ProductTitle>Monstera DK Var (L)</ProductTitle>
                                <ProductStars>
                                    <ProductStar>
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                    </ProductStar>
                                    (74)
                                </ProductStars>
                            </ProductContentHeader>
                            <ProductContentBody>
                                <ProductSale>
                                    Price
                                    <Sale>12.5%</Sale>
                                </ProductSale>
                                <ProductPrice>
                                    <PriceNew>12.345.678 vnđ</PriceNew>
                                    <PriceOld>98.765.432 vnđ</PriceOld>
                                </ProductPrice>
                            </ProductContentBody>
                            <ProductContentFooter>
                                <ProductButton>Add to cart</ProductButton>
                            </ProductContentFooter>
                        </ProductContent>
                    </Product>
                    <Product>
                        <ProductImage>
                            <Image
                                alt='img'
                                src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600'
                            />
                        </ProductImage>
                        <ProductContent>
                            <ProductContentHeader>
                                <ProductTitle>Monstera DK Var (L)</ProductTitle>
                                <ProductStars>
                                    <ProductStar>
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                    </ProductStar>
                                    (74)
                                </ProductStars>
                            </ProductContentHeader>
                            <ProductContentBody>
                                <ProductSale>
                                    Price
                                    <Sale>12.5%</Sale>
                                </ProductSale>
                                <ProductPrice>
                                    <PriceNew>12.345.678 vnđ</PriceNew>
                                    <PriceOld>98.765.432 vnđ</PriceOld>
                                </ProductPrice>
                            </ProductContentBody>
                            <ProductContentFooter>
                                <ProductButton>Add to cart</ProductButton>
                            </ProductContentFooter>
                        </ProductContent>
                    </Product>
                    <Product>
                        <ProductImage>
                            <Image
                                alt='img'
                                src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600'
                            />
                        </ProductImage>
                        <ProductContent>
                            <ProductContentHeader>
                                <ProductTitle>Monstera DK Var (L)</ProductTitle>
                                <ProductStars>
                                    <ProductStar>
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                    </ProductStar>
                                    (74)
                                </ProductStars>
                            </ProductContentHeader>
                            <ProductContentBody>
                                <ProductSale>
                                    Price
                                    <Sale>12.5%</Sale>
                                </ProductSale>
                                <ProductPrice>
                                    <PriceNew>12.345.678 vnđ</PriceNew>
                                    <PriceOld>98.765.432 vnđ</PriceOld>
                                </ProductPrice>
                            </ProductContentBody>
                            <ProductContentFooter>
                                <ProductButton>Add to cart</ProductButton>
                            </ProductContentFooter>
                        </ProductContent>
                    </Product>
                    <Product>
                        <ProductImage>
                            <Image
                                alt='img'
                                src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600'
                            />
                        </ProductImage>
                        <ProductContent>
                            <ProductContentHeader>
                                <ProductTitle>Monstera DK Var (L)</ProductTitle>
                                <ProductStars>
                                    <ProductStar>
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                    </ProductStar>
                                    (74)
                                </ProductStars>
                            </ProductContentHeader>
                            <ProductContentBody>
                                <ProductSale>
                                    Price
                                    <Sale>12.5%</Sale>
                                </ProductSale>
                                <ProductPrice>
                                    <PriceNew>12.345.678 vnđ</PriceNew>
                                    <PriceOld>98.765.432 vnđ</PriceOld>
                                </ProductPrice>
                            </ProductContentBody>
                            <ProductContentFooter>
                                <ProductButton>Add to cart</ProductButton>
                            </ProductContentFooter>
                        </ProductContent>
                    </Product>
                    <Product>
                        <ProductImage>
                            <Image
                                alt='img'
                                src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600'
                            />
                        </ProductImage>
                        <ProductContent>
                            <ProductContentHeader>
                                <ProductTitle>Monstera DK Var (L)</ProductTitle>
                                <ProductStars>
                                    <ProductStar>
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                    </ProductStar>
                                    (74)
                                </ProductStars>
                            </ProductContentHeader>
                            <ProductContentBody>
                                <ProductSale>
                                    Price
                                    <Sale>12.5%</Sale>
                                </ProductSale>
                                <ProductPrice>
                                    <PriceNew>12.345.678 vnđ</PriceNew>
                                    <PriceOld>98.765.432 vnđ</PriceOld>
                                </ProductPrice>
                            </ProductContentBody>
                            <ProductContentFooter>
                                <ProductButton>Add to cart</ProductButton>
                            </ProductContentFooter>
                        </ProductContent>
                    </Product>
                    <Product>
                        <ProductImage>
                            <Image
                                alt='img'
                                src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600'
                            />
                        </ProductImage>
                        <ProductContent>
                            <ProductContentHeader>
                                <ProductTitle>Monstera DK Var (L)</ProductTitle>
                                <ProductStars>
                                    <ProductStar>
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                    </ProductStar>
                                    (74)
                                </ProductStars>
                            </ProductContentHeader>
                            <ProductContentBody>
                                <ProductSale>
                                    Price
                                    <Sale>12.5%</Sale>
                                </ProductSale>
                                <ProductPrice>
                                    <PriceNew>12.345.678 vnđ</PriceNew>
                                    <PriceOld>98.765.432 vnđ</PriceOld>
                                </ProductPrice>
                            </ProductContentBody>
                            <ProductContentFooter>
                                <ProductButton>Add to cart</ProductButton>
                            </ProductContentFooter>
                        </ProductContent>
                    </Product>
                    <Product>
                        <ProductImage>
                            <Image
                                alt='img'
                                src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600'
                            />
                        </ProductImage>
                        <ProductContent>
                            <ProductContentHeader>
                                <ProductTitle>Monstera DK Var (L)</ProductTitle>
                                <ProductStars>
                                    <ProductStar>
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                    </ProductStar>
                                    (74)
                                </ProductStars>
                            </ProductContentHeader>
                            <ProductContentBody>
                                <ProductSale>
                                    Price
                                    <Sale>12.5%</Sale>
                                </ProductSale>
                                <ProductPrice>
                                    <PriceNew>12.345.678 vnđ</PriceNew>
                                    <PriceOld>98.765.432 vnđ</PriceOld>
                                </ProductPrice>
                            </ProductContentBody>
                            <ProductContentFooter>
                                <ProductButton>Add to cart</ProductButton>
                            </ProductContentFooter>
                        </ProductContent>
                    </Product>
                    <Product>
                        <ProductImage>
                            <Image
                                alt='img'
                                src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600'
                            />
                        </ProductImage>
                        <ProductContent>
                            <ProductContentHeader>
                                <ProductTitle>Monstera DK Var (L)</ProductTitle>
                                <ProductStars>
                                    <ProductStar>
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                        <BsStarFill color='#ffc554' />
                                    </ProductStar>
                                    (74)
                                </ProductStars>
                            </ProductContentHeader>
                            <ProductContentBody>
                                <ProductSale>
                                    Price
                                    <Sale>12.5%</Sale>
                                </ProductSale>
                                <ProductPrice>
                                    <PriceNew>12.345.678 vnđ</PriceNew>
                                    <PriceOld>98.765.432 vnđ</PriceOld>
                                </ProductPrice>
                            </ProductContentBody>
                            <ProductContentFooter>
                                <ProductButton>Add to cart</ProductButton>
                            </ProductContentFooter>
                        </ProductContent>
                    </Product>
                </BodySection>
            </Section>
        </>
    );
};

export default Home;
