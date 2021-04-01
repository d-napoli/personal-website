import React from 'react'

import {
    Container,
    Row,
    Title,
    SectionDescription,
    CompleteDescription,
    LineBreaker
} from './styles'

function NewSection(props) {
    return (
        <Container>
            <Row>
                <Title>{props.title}</Title>
            </Row>
            <Row>
                <SectionDescription>{props.description}</SectionDescription>
                <CompleteDescription>{props.completeDescription}</CompleteDescription>
                <LineBreaker />
            </Row>
        </Container>
    );
}

export default NewSection