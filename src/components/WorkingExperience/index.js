import React from 'react'

import NewSection from '../NewSection'

import { Vale, Fastway, Attest, Buser } from '../../constants/images'

import {
    Container,
    Row,
    Column,
    CompanyImage
} from './styles'

function WorkingExperience(props) {
    return (
        <Container>
            <NewSection
                title={props.lang[props.selectedLanguage]['sections']['professional_experience']['title']}
                description={props.lang[props.selectedLanguage]['sections']['professional_experience']['description']}
                completeDescription={props.lang[props.selectedLanguage]['sections']['professional_experience']['completeDescription']}
            />
            <Row>
                <Column>
                    <CompanyImage
                        src={Buser}
                        alt="Buser Brasil"
                    />
                </Column>
                <Column>
                    <CompanyImage
                        src={Vale}
                        alt="Vale SA"
                    />
                </Column>
                <Column>
                    <CompanyImage
                        src={Fastway}
                        alt="Agência Fastway"
                    />
                </Column>
                <Column>
                    <CompanyImage
                        src={Attest}
                        alt="Agência Fastway"
                    />
                </Column>
            </Row>
        </Container>
    );
}

export default WorkingExperience