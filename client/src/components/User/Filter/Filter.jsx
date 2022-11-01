import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { CheckBox } from '../../Basic';
import {
    Container,
    Section,
    Title,
    ButtonReset,
    SectionHeader,
    ButtonHide,
    SeeAll,
    SectionBody,
} from './FilterStyled';

const Filter = () => {
    return (
        <Container>
            <Section>
                <SectionHeader>
                    <Title>Filter</Title>
                    <ButtonReset>Reset</ButtonReset>
                </SectionHeader>
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
                    <input type='range' />
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
