import React from 'react'

import {
    Container,
    Wrapper,
    Header,
    Body,
    Title,
    YearsExperience,
    Description,
    CodingLogo
} from './styles'

function Card(props) {
    return (
        <Container>
            <Wrapper>
                <Header>
                    <CodingLogo src={props.icon} />
                    <Title>{props.codingLanguage}</Title>
                    <YearsExperience>
                        {props.beginYear} {props.lang[props.selectedLanguage]['sections']['skills']['years_experience']}
                    </YearsExperience>
                </Header>
                {
                    props.description ?
                        <Body>
                            <Description>{props.description}</Description>
                        </Body> :
                        null
                }
            </Wrapper>
        </Container>
    );
}

export default Card