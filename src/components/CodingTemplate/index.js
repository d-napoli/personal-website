import React from 'react'

import {
    Container,
    CodeBgWrap,
    CodeWindow,
    CodeHeader,
    CodingLanguage,
    CodeBody
} from './styles'

import Icon from '../Icon'
import { ICONS } from '../../constants/icons'

function CodingTemplate() {
    return (
        <Container>
            <CodeBgWrap />

            <CodeWindow>
                <CodeHeader>
                    <CodingLanguage>Python</CodingLanguage>
                    <Icon
                        icon={ICONS.ARROW}
                        color="#777777"
                        size="50"
                    />
                </CodeHeader>
                <CodeBody>
                    <p>Olá mundo</p>
                </CodeBody>   
            </CodeWindow>

        </Container>    
    );
}

export default CodingTemplate;