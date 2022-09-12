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
                    <Page key={page.name} href={page.href}>
                        {page.name}
                    </Page>
                ))}
            </Wrapper>
        </Container>
    );
};

export default FlyoutMenu;
