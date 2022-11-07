/* eslint-disable array-callback-return */
import React from "react";
import {
    Container,
    Wrapper,
    SectionsContainer,
    SectionItem,
    NewsletterContainer,
    NewsletterWrapper,
    Title,
    Description,
    InputButton,
    Input,
    Button,
    TitleFollowUs,
    ButtonsSocialContainer,
    LinkButton,
    ButtonIconSocial,
    ImageSocial,
    CopyRight,
} from "./FooterStyled";
import Section from "../../Basic/Section";
import facebookIcon from "../../../assets/img/iconsSocial/facebook-app-symbol.png";
import instagramIcon from "../../../assets/img/iconsSocial/instagram.png";
import linkedinIcon from "../../../assets/img/iconsSocial/linkedin.png";

const sections = [
    {
        id: "products",
        name: "Products",
        items: [
            { name: "Bags", href: "#" },
            { name: "Tees", href: "#" },
            { name: "Objects", href: "#" },
            { name: "Home Goods", href: "#" },
            { name: "Accessories", href: "#" },
        ],
    },
    {
        id: "supports",
        name: "Supports",
        items: [
            { name: "Contact", href: "#" },
            { name: "Shipping", href: "#" },
            { name: "Returns", href: "#" },
            { name: "Warranty", href: "#" },
            { name: "Secure Payments", href: "#" },
            { name: "FAQ", href: "#" },
            { name: "Find a Store", href: "#" },
        ],
    },
    {
        id: "company",
        name: "Company",
        items: [
            { name: "Who we are", href: "#" },
            { name: "Sustainability", href: "#" },
            { name: "Press", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Terms & Conditions", href: "#" },
            { name: "Privacy", href: "#" },
        ],
    },
];

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <SectionsContainer>
                    {sections.map((section) => (
                        <SectionItem
                            key={section.id}
                            section={section}
                            style={{ marginTop: "0" }}
                        />
                    ))}
                    <NewsletterContainer>
                        <NewsletterWrapper>
                            <Title>Sign up for our newsletter</Title>
                            <Description>
                                The latest deals and savings, sent to your inbox
                                weekly.
                            </Description>
                            <InputButton>
                                <Input
                                    type="email"
                                    placeholder="Your Email Address"
                                />
                                <Button>Sign up</Button>
                            </InputButton>
                            <TitleFollowUs>Follow Us</TitleFollowUs>
                            <ButtonsSocialContainer>
                                <LinkButton href="https://www.facebook.com/">
                                    <ButtonIconSocial>
                                        <ImageSocial
                                            src={facebookIcon}
                                            alt="iconSocial"
                                        />
                                    </ButtonIconSocial>
                                </LinkButton>
                                <LinkButton href="https://www.instagram.com/">
                                    <ButtonIconSocial>
                                        <ImageSocial
                                            src={instagramIcon}
                                            alt="iconSocial"
                                        />
                                    </ButtonIconSocial>
                                </LinkButton>
                                <LinkButton href="https://www.linkedin.com/">
                                    <ButtonIconSocial>
                                        <ImageSocial
                                            src={linkedinIcon}
                                            alt="iconSocial"
                                        />
                                    </ButtonIconSocial>
                                </LinkButton>
                            </ButtonsSocialContainer>
                        </NewsletterWrapper>
                    </NewsletterContainer>
                </SectionsContainer>
                <CopyRight>
                    Copyright © 2022 LV7. All rights reserved.
                </CopyRight>
            </Wrapper>
        </Container>
    );
};

export default Footer;
