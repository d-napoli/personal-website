import React from 'react'

import {
    Container,
    FooterText
} from './styles'

function Footer(props) {
    return (
        <Container>
            <FooterText>{props.lang[props.selectedLanguage]['footer']['description'].replace("$$YEAR$$", new Date().getFullYear())}</FooterText>
        </Container>
    );
}

export default Footer