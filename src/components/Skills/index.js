import React from 'react'

import Card from '../Card'
import NewSection from '../NewSection'

import programing_languages from '../../constants/programmingLanguages'

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
                    programing_languages.map((language, index) =>
                        <Column>
                            <Card
                                icon={language.icon}
                                lang={props.lang}
                                selectedLanguage={props.selectedLanguage}
                                codingLanguage={language.name}
                                beginYear={new Date().getFullYear() - language.beginYear}
                            />
                        </Column>
                    )
                }
            </Row>
        </Container>
    );
}

export default Skills;