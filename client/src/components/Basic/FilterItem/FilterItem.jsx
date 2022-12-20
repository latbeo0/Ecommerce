import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
    SectionWrapper,
    Header,
    Body,
    Content,
    ButtonHide,
    ArrowContainer,
    SeeAll,
} from "./FilterItemStyled";

const FilterItem = (props) => {
    const { title, children } = props;

    const [isOpen, setIsOpen] = useState(true);

    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <SectionWrapper>
            <Header>
                {title}
                <ButtonHide onClick={handleOpen}>
                    Hide
                    <ArrowContainer isOpen={isOpen}>
                        <IoIosArrowDown />
                    </ArrowContainer>
                </ButtonHide>
            </Header>
            <Body isOpen={isOpen}>
                {children}
                {/* <Content>
                    <input type="range" />
                    <p>Max value: 100.000.000 vnđ</p>
                </Content> */}
                {/* <SeeAll>See all</SeeAll> */}
            </Body>
        </SectionWrapper>
    );
};

export default FilterItem;
