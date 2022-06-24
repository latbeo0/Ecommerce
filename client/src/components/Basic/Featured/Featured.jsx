import { useState } from 'react';
import {
    Container,
    ContainerImg,
    Img,
    Text,
    TextAbs,
    Sub,
} from './FeaturedStyled';

const Featured = (props) => {
    const [hover, setHover] = useState(false);
    const { featured } = props;

    return (
        <Container
            key={featured.name}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <ContainerImg>
                <Img
                    src={featured.imageSrc}
                    alt={featured.imageAlt}
                    hover={hover}
                />
            </ContainerImg>
            <Text href={featured.href}>
                <TextAbs></TextAbs>
                {featured.name}
            </Text>
            <Sub>Shop now</Sub>
        </Container>
    );
};

export default Featured;
