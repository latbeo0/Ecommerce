import { Link } from "react-router-dom";
import { Container, Header, Items, WrapperItem, Item } from "./SectionStyled";

const Section = (props) => {
    const { section, children, style, other } = props;

    return (
        <Container
            slot={section.slot ? section.slot : "start"}
            style={style}
            {...other}
        >
            <Header>{section.name}</Header>
            {section.items && (
                <Items>
                    {section.items.map((item) => (
                        <WrapperItem key={item.name}>
                            <Link to={item.href}>
                                <Item>{item.name}</Item>
                            </Link>
                        </WrapperItem>
                    ))}
                </Items>
            )}
            {children}
        </Container>
    );
};

export default Section;
