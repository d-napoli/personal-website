import React from 'react'

import Card from '../Card'
import NewSection from '../NewSection'

import PROGRAMING_LANGUAGES from '../../constants/programmingLanguages'

import {
    Container,
    Column,
    Row
} from './styles'

function Skills(props) {
    return (
        <Container>
            <NewSection
                title={props.lang[props.selectedLanguage]['sections']['skills']['title']}
                description={props.lang[props.selectedLanguage]['sections']['skills']['description']}
                completeDescription={props.lang[props.selectedLanguage]['sections']['skills']['completeDescription']}
            />

            <Row>
                {
                    PROGRAMING_LANGUAGES.programing_languages.map((language, index) =>    
                        <Column>
                            <Card
                                icon={language.icon}
                                lang={props.lang}
                                selectedLanguage={props.selectedLanguage}
                                codingLanguage={language.name}
                                beginYear={new Date().getFullYear() - language.beginYear}
                                description={props.lang[props.selectedLanguage]['sections']['skills']['programing_languages'][language.name]}
                            />
                        </Column>
                    )
                }
            </Row>
        </Container>
    );
}

export default Skills;