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
import { useSelector } from "react-redux";
import { selectCategories } from "../../../redux/categorySlice";
import { selectStates } from "../../../redux/stateSlice";
import { selectCollections } from "../../../redux/collectionSlice";

const Filter = () => {
    const { listCategories } = useSelector(selectCategories);
    const { listStates } = useSelector(selectStates);
    const { listCollections } = useSelector(selectCollections);

    return (
        <Container>
            <Section>
                <SectionHeader>
                    <Title>Filter</Title>
                    <ButtonReset>Reset</ButtonReset>
                </SectionHeader>
            </Section>
            <Section>
                <FilterItem title="Categories">
                    <Content>
                        {listCategories.map((category) => (
                            <CheckBox
                                key={category._id}
                                label={category.cateName}
                            />
                        ))}
                    </Content>
                </FilterItem>
            </Section>
            <Section>
                <FilterItem title="States">
                    <Content>
                        {listStates.map((state) => (
                            <CheckBox key={state._id} label={state.stateName} />
                        ))}
                    </Content>
                </FilterItem>
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
                <FilterItem title="Collections">
                    <Content>
                        {listCollections.map((collection) => (
                            <CheckBox
                                key={collection._id}
                                label={collection.collectName}
                            />
                        ))}
                    </Content>
                </FilterItem>
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
