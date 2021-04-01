import React, { useState, useEffect } from 'react'

import {
    Container,
    FlagIcon,
    LanguageDesc,
    AnotherLanguageDesc,
    MainLanguageWrapper,
    AnotherLanguageWrapper,
    Row
} from './styles'

import USAFlag from '../../assets/images/Icons/Flags/Usa-Flag.png'
import BrazilFlag from '../../assets/images/Icons/Flags/Brazil-Flag.png'

function LanguageToggle(props) {
    const [show, handleShow] = useState(false)   

    function changeLanguageHandler() {
        handleToggle();
        props.click()
    }

    function handleToggle() {
        handleShow(!show)
    }

    let languageAssets = {
        "languages": {
            "en": {
                "countryFlag": USAFlag,
                "languageName": props.lang[props.selectedLanguage]['header']['introduction']['english']
            },
            "pt": {
                "countryFlag": BrazilFlag,
                "languageName": props.lang[props.selectedLanguage]['header']['introduction']['portuguese']
            }
        }
    }

    return (
        <Container>
            <MainLanguageWrapper onClick={handleToggle}>
                <FlagIcon src={languageAssets['languages'][props.selectedLanguage]['countryFlag']} />
                <LanguageDesc>{languageAssets['languages'][props.selectedLanguage]['languageName']} ({props.lang[props.selectedLanguage]['header']['introduction']['change']})</LanguageDesc>
            </MainLanguageWrapper>
            {
                show ?
                    <AnotherLanguageWrapper
                        onClick={changeLanguageHandler}
                    >
                        <Row>
                            <FlagIcon src={languageAssets['languages'][props.anotherLanguage]['countryFlag']} />
                            <AnotherLanguageDesc>{languageAssets['languages'][props.anotherLanguage]['languageName']}</AnotherLanguageDesc>
                        </Row>
                    </AnotherLanguageWrapper>
                    : ''
            }
        </Container>
    );
}

export default LanguageToggle