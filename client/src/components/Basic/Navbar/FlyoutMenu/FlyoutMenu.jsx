import { Link } from 'react-router-dom';
import { Container, Wrapper, Page } from './FlyoutMenuStyled';
import Popover from './Popover';

const FlyoutMenu = (props) => {
    const { navigation } = props;

    return (
        <Container>
            <Wrapper>
                {navigation.categories.map((category) => (
                    <Popover key={category.name} category={category} />
                ))}
                {navigation.pages.map((page) => (
                    <Page key={page.name}>
                        <Link to={page.href}>{page.name}</Link>
                    </Page>
                ))}
            </Wrapper>
        </Container>
    );
};

export default FlyoutMenu;
