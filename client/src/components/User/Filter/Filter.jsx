import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CheckBox } from "../../Basic";
import {
    Container,
    Section,
    Title,
    ButtonReset,
    SectionHeader,
    ButtonHide,
    ArrowContainer,
    SeeAll,
    SectionBody,
    SectionWrapper,
    Header,
    Body,
    Content,
} from "./FilterStyled";
import FilterItem from "../../Basic/FilterItem";

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <Container>
            <Section>
                <SectionHeader>
                    <Title>Filter</Title>
                    <ButtonReset>Reset</ButtonReset>
                </SectionHeader>
            </Section>
            <Section>
                <FilterItem title="Price range">
                    <Content>
                        <input type="range" />
                        <p>Max value: 100.000.000 vnđ</p>
                    </Content>
                </FilterItem>
            </Section>
            <Section>
                <SectionWrapper>
                    <Header>
                        Price range
                        <ButtonHide onClick={handleOpen}>
                            Hide
                            <ArrowContainer isOpen={isOpen}>
                                <IoIosArrowDown />
                            </ArrowContainer>
                        </ButtonHide>
                    </Header>
                    <Body isOpen={isOpen}>
                        <Content>
                            <input type="range" />
                            <p>Max value: 100.000.000 vnđ</p>
                        </Content>
                        <SeeAll>See all</SeeAll>
                    </Body>
                </SectionWrapper>
            </Section>
            <Section>
                <SectionHeader>
                    Price range
                    <ButtonHide>
                        Hide
                        <IoIosArrowDown />
                    </ButtonHide>
                </SectionHeader>
                <SectionBody>
                    <input type="range" />
                    <p>Max value: 100.000.000 vnđ</p>
                </SectionBody>
            </Section>
            <Section>
                <SectionHeader>
                    States
                    <ButtonHide>
                        Hide
                        <IoIosArrowDown />
                    </ButtonHide>
                </SectionHeader>
                <SectionBody>
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                </SectionBody>
                <SeeAll>See All</SeeAll>
            </Section>
            <Section>
                <SectionHeader>
                    Collections
                    <ButtonHide>
                        Hide
                        <IoIosArrowDown />
                    </ButtonHide>
                </SectionHeader>
                <SectionBody>
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                </SectionBody>
                <SeeAll>See All</SeeAll>
            </Section>
            <Section>
                <SectionHeader>
                    Colors
                    <ButtonHide>
                        Hide
                        <IoIosArrowDown />
                    </ButtonHide>
                </SectionHeader>
                <SectionBody>
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                    <CheckBox />
                </SectionBody>
                <SeeAll>See All</SeeAll>
            </Section>
        </Container>
    );
};

export default Filter;
