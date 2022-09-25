import {
    WrapperImage,
    LinkImage,
    Image,
    WrapperContent,
    Title,
    Description,
} from './BannerStyled';

const Banner = ({ banner, ...others }) => {
    return (
        <WrapperImage {...others}>
            <LinkImage href={'#'}>
                <Image src={banner.url} alt={banner.alt} />
            </LinkImage>
            <WrapperContent>
                <Title>{banner.title}</Title>
                <Description>{banner.description}</Description>
            </WrapperContent>
        </WrapperImage>
    );
};

export default Banner;
