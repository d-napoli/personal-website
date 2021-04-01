import React, { useState, useEffect } from 'react'

import {
    Container,
    Row,
    Column,
    Tag,
    Title,
    PrimaryColor,
    MainDesc,
    SecondDesc,
    ProfileImage,
    LanguageWrapper,
    IconWrapper
} from './styles'

import LanguageToggle from '../LanguageToggle'
import ProfileImageUrl from '../../assets/images/Profile/Hackathon-Espirito-Santo.png'

import Icon from '../Icon'
import { ICONS } from '../../constants/icons'

import Button from '../Button'

function Header(props) {
    const [age, changeAge] = useState(0)

    useEffect(() => {
        calculate_age()
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

    return (
        <Container>
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
                    {/* <SecondDesc>{props.lang[props.selectedLanguage]['header']['introduction']['last_description']}</SecondDesc> */}
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
                        <Button
                            icon={ICONS.DOWNLOAD}
                            text={props.lang[props.selectedLanguage]['header']['introduction']['curriculum']}
                            passou="Sim"
                        />
                    </Row>
                </Column>
                <Column>
                    <ProfileImage src={ProfileImageUrl} />
                </Column>
            </Row>
            {/* Social Icons */}
        </Container>
    );
}

export default Header