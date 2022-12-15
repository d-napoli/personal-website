import React, { useState, useEffect } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Link } from "react-scroll";

import {
    Container,
    Row,
    Column,
    Tag,
    Title,
    PrimaryColor,
    MainDesc,
    SecondDesc,
    LanguageWrapper,
    IconWrapper,
    BackgroundHeader,
    BackToTop,
    BackToTopWrapper
} from './styles'

import LanguageToggle from '../LanguageToggle'
import Icon from '../Icon'
import CodingTemplate from '../CodingTemplate'

import { ICONS } from '../../constants/icons'
import { Wave } from '../../constants/images'

function Header(props) {
    const [age, changeAge] = useState(0)
    const [backToTop, changeBackToTop] = useState(false)

    useEffect(() => {
        calculate_age()
        window.onscroll = () => handleScroll()
    }, [])

    function calculate_age() {
        var today = new Date();
        var birthDate = new Date("02/04/2000"); // month, day, year
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
            age_now--;

        changeAge(age_now)
    }

    function handleScroll() {
        if (document.documentElement.scrollTop > 300) {
            changeBackToTop(true)
        } else {
            changeBackToTop(false)
        }
    }

    return (
        <Container id="header">
            {
                backToTop ?
                    <Link
                        to='header'
                        smooth={true}
                        offset={-70}
                        duration={300}
                    >
                        <BackToTopWrapper>
                            <BackToTop>
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 24 24"
                                    height="3em"
                                    width="3em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
                                </svg>
                            </BackToTop>
                        </BackToTopWrapper>
                    </Link>
                    : ""
            }

            <LazyLoadComponent>
                <BackgroundHeader
                    src={Wave}
                />
            </LazyLoadComponent>
            <Row>
                <Column>
                    <LanguageWrapper>
                        <LanguageToggle
                            anotherLanguage={props.anotherLanguage}
                            selectedLanguage={props.selectedLanguage}
                            click={props.click}
                            lang={props.lang}
                        />
                    </LanguageWrapper>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Tag>{props.lang[props.selectedLanguage]['header']['introduction']['tag']}</Tag>
                    <Title>{props.lang[props.selectedLanguage]['header']['introduction']['main_phrase']} <PrimaryColor>Diego Napoli</PrimaryColor></Title>
                    <MainDesc>{props.lang[props.selectedLanguage]['header']['introduction']['main_description'].replace("$$AGE$$", age)}</MainDesc>
                    <SecondDesc>
                        <Icon
                            icon={ICONS.LOCATION}
                            color="#fff"
                            size="25"
                        />
                        {props.lang[props.selectedLanguage]['header']['introduction']['location']}
                    </SecondDesc>
                    <Row>
                        <IconWrapper
                            href="https://www.linkedin.com/in/diego-napoli-392a41175/"
                            target="_blank"
                        >
                            <Icon
                                icon={ICONS.LINKEDIN}
                                color="#fff"
                                size="30"
                            />
                        </IconWrapper>
                        <IconWrapper
                            href="https://github.com/d-napoli"
                            target="_blank"
                        >
                            <Icon
                                icon={ICONS.GITHUB}
                                color="#fff"
                                size="30"
                            />
                        </IconWrapper>
                        <IconWrapper
                            href="https://www.youtube.com/channel/UCtsVf511Jq1nMQ8r0-u84BQ"
                            target="_blank"
                        >
                            <Icon
                                icon={ICONS.YOUTUBE}
                                color="#fff"
                                size="30"
                            />
                        </IconWrapper>
                    </Row>
                </Column>
                <Column>
                    <LazyLoadComponent>
                        <CodingTemplate
                            age={age}
                            selectedLanguage={props.selectedLanguage}
                            lang={props.lang}
                        />
                    </LazyLoadComponent>
                </Column>
            </Row>
            {/* Social Icons */}
        </Container>
    );
}

export default Header