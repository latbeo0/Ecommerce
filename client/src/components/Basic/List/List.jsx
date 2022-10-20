import { Container, Header, Items, WrapperItem, Item } from './ListStyled';

const Section = (props) => {
    const { section, children } = props;

    return (
        <Container slot={section.slot ? section.slot : 'start'}>
            <Header>{section.name}</Header>
            {section.items && (
                <Items>
                    {section.items.map((item) => (
                        <WrapperItem key={item.name}>
                            <Item href={item.href}>{item.name}</Item>
                        </WrapperItem>
                    ))}
                </Items>
            )}
            {children}
        </Container>
    );
};

export default Section;
