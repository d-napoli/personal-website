import React from 'react'

import {
    Container,
    CodeBgWrap,
    CodeWindow,
    CodeHeader,
    IconWrapper,
    CodingLanguage,
    CodeBody,
    CodeTag,
    Code,
    Blink
} from './styles'

function CodingTemplate(props) {
    return (
        <Container>
            <CodeBgWrap />

            <CodeWindow
                top="20px"
                right="10px"
            >
                <CodeHeader>  
                    <CodingLanguage>Python</CodingLanguage>
                    <IconWrapper>
                        <svg width="16" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z" fill="#4C4F5A">
                            </path>
                        </svg>
                    </IconWrapper>
                </CodeHeader>
                <CodeBody>
                    <CodeTag>
                        <Code>{props.lang[props.selectedLanguage]['header']['coding']['python']['person']}&nbsp;{props.lang[props.selectedLanguage]['header']['coding']['python']['me']}&nbsp;</Code>
                        <Code function>=</Code>
                        <Code>&nbsp;new&nbsp;</Code>
                        <Code method>{props.lang[props.selectedLanguage]['header']['coding']['python']['person']}</Code>
                        <Code parentesis>()</Code>
                        <br />
                        <Code function tabs="2">while</Code>
                        <Code parentesis>(</Code>
                        <Code>{props.lang[props.selectedLanguage]['header']['coding']['python']['me']}.{props.lang[props.selectedLanguage]['header']['coding']['python']['Alive']}</Code>
                        <Code parentesis>)</Code>
                        <Code>:</Code>
                        <br />
                        <Code tabs="4">{props.lang[props.selectedLanguage]['header']['coding']['python']['me']}.</Code>
                        <Code method>{props.lang[props.selectedLanguage]['header']['coding']['python']['WakeUp']}</Code>
                        <Code parentesis>()</Code>
                        <br />
                        <Code tabs="4">{props.lang[props.selectedLanguage]['header']['coding']['python']['me']}.</Code>
                        <Code method>{props.lang[props.selectedLanguage]['header']['coding']['python']['Eat']}</Code>
                        <Code parentesis>()</Code>
                        <br />
                        <Code tabs="4">{props.lang[props.selectedLanguage]['header']['coding']['python']['me']}.</Code>
                        <Code method>{props.lang[props.selectedLanguage]['header']['coding']['python']['DoCode']}</Code>
                        <Code parentesis>()</Code>
                        <br />
                        <Code tabs="4">{props.lang[props.selectedLanguage]['header']['coding']['python']['me']}.</Code>
                        <Code method>{props.lang[props.selectedLanguage]['header']['coding']['python']['Sleep']}</Code>
                        <Code parentesis>()</Code>
                    </CodeTag>
                </CodeBody>   
            </CodeWindow>

            <CodeWindow
                top="210px"
                right="100px"
            >
                <CodeHeader>  
                    <CodingLanguage>JSON</CodingLanguage>
                    <IconWrapper>
                        <svg width="16" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z" fill="#4C4F5A">
                            </path>
                        </svg>
                    </IconWrapper>
                </CodeHeader>
                <CodeBody>
                    <CodeTag>
                        <Code string>"{props.lang[props.selectedLanguage]['header']['coding']['python']['person']}":&nbsp;</Code>
                        <Code parentesis>&#123;</Code>
                        <br />
                        <Code tabs="2" json>"name"</Code>
                        <Code function>:&nbsp;</Code>
                        <Code string>"Diego Napoli"</Code>
                        <Code>,</Code>
                        <br />
                        <Code tabs="2" json>"age"</Code>
                        <Code function>:&nbsp;</Code>
                        <Code string>"{props.age}"</Code>
                        <Code>,</Code>
                        <br />
                        <Code tabs="2" json>"country"</Code>
                        <Code function>:&nbsp;</Code>
                        <Code string>"{props.lang[props.selectedLanguage]['header']['introduction']['location'].split(",")[2].replace(" ", "")}"</Code>
                        <Code>,</Code>
                        <br />
                        <Code tabs="2" json>"profession"</Code>
                        <Code function>:&nbsp;</Code>
                        <Code string>"{props.lang[props.selectedLanguage]['header']['introduction']['tag']}"</Code>
                        <Code>,</Code>
                        <br />
                        <Code parentesis>&#125;</Code>
                        <Blink>&nbsp;|</Blink>
                    </CodeTag>
                </CodeBody>   
            </CodeWindow>

        </Container>    
    );
}

export default CodingTemplate;