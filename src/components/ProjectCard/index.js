import React from 'react';

import {
    Container,
    Row,
    ProjectWrapper,
    Title,
    Description,
    CategoryWrapper,
    CategoryDesc,
    ProjectDateWrapper,
    ProjectDate,
    ProjectLink,
    BodyWrapper
} from './styles'

import Icon from '../Icon';
import { ICONS } from '../../constants/icons';

import Button from '../Button'

function ProjectCard(props) {
    let desc_limit = 50
    let title_limit = 40

    return (
        <Container>
            <Row>
                <ProjectWrapper>
                    {
                        props.tech ? <CategoryWrapper>
                            <CategoryDesc>{props.tech}</CategoryDesc>
                        </CategoryWrapper>
                            : null
                    }
                    <BodyWrapper>
                        <Title>{
                            props.title.length >= title_limit ?
                                props.title.substring(0, title_limit) + "..." :
                                props.title
                        }</Title>
                        <Description>
                            {
                                props.desc ?
                                    props.desc.length >= desc_limit ?
                                        props.desc.substring(0, desc_limit) + "..." :
                                        props.desc
                                    : null
                            }
                        </Description>
                        <ProjectDateWrapper>
                            <Icon
                                icon={ICONS.CALENDAR}
                                color="#fff"
                                size="35"
                            />
                            <ProjectDate>{props.date}</ProjectDate>
                        </ProjectDateWrapper>
                        <ProjectLink
                            href={props.link}
                            target="_blank"
                        >
                            <Button
                                icon={ICONS.GITHUB}
                                fill
                                text={props.lang[props.selectedLanguage]['sections']['latest_projects']['action_button']}
                            />
                        </ProjectLink>
                    </BodyWrapper>
                </ProjectWrapper>
            </Row>
        </Container>
    );
}

export default ProjectCard