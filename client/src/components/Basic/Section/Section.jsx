import { Container, Header, Items, WrapperItem, Item } from './SectionStyled';

const Section = (props) => {
    const { section } = props;

    return (
        <Container key={section.name}>
            <Header>{section.name}</Header>
            <Items>
                {section.items.map((item) => (
                    <WrapperItem key={item.name}>
                        <Item href={item.href}>{item.name}</Item>
                    </WrapperItem>
                ))}
            </Items>
        </Container>
    );
};

export default Section;
