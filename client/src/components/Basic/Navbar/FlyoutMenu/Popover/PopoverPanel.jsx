import { useEffect, useRef } from "react";
import Featured from "../../../Featured";
import Section from "../../../Section";
import {
    Container,
    Panel,
    Wrapper,
    Layout,
    SectionGroup,
    FeaturedGroup,
    Shadow,
} from "./PopoverPanelStyled";

const PopoverPanel = (props) => {
    const ref = useRef(null);
    const { onClickOutside, forwardRef, btnRef, category } = props;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                ref.current &&
                !ref.current.contains(event.target) &&
                !btnRef.current.contains(event.target)
            ) {
                onClickOutside && onClickOutside();
            }
        };

        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [onClickOutside, btnRef]);

    return (
        <Container ref={forwardRef}>
            <Shadow />
            <Panel ref={ref}>
                <Wrapper>
                    <Layout>
                        <FeaturedGroup>
                            {category.featured.map((featured) => (
                                <Featured
                                    key={featured.name}
                                    featured={featured}
                                />
                            ))}
                        </FeaturedGroup>
                        <SectionGroup>
                            {category.sections.map((section) => (
                                <Section key={section.name} section={section} />
                            ))}
                        </SectionGroup>
                    </Layout>
                </Wrapper>
            </Panel>
        </Container>
    );
};

export default PopoverPanel;
