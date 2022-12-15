import React, { useEffect, useState } from 'react'

import Moment from 'moment'

import NewSection from '../NewSection'
import ProjectCard from '../ProjectCard'

import Loader from "react-spinners/ScaleLoader"

import {
    Container,
    Row,
    Column,
    LoaderWrapper
} from './styles'

function LatestProjects(props) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://api.github.com/users/d-napoli/repos?per_page=9&sort=updated")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setIsLoaded(true)
                    setItems(result)

                    items.map((item) => {
                        if (item.description) {
                            console.log("Bling bling")
                            console.log(`Description ${item.description} - Name ${item.name}`)
                        } else {
                            console.log("Não tem")
                            console.log(item.name)
                        }

                        console.log("-------------")
                    })
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])

    return (
        <Container>
            <NewSection
                title={props.lang[props.selectedLanguage]['sections']['latest_projects']['title']}
                description={props.lang[props.selectedLanguage]['sections']['latest_projects']['description']}
                completeDescription={props.lang[props.selectedLanguage]['sections']['latest_projects']['completeDescription']}
            />
            <Row>
                {
                    error ? <p>{error}</p> :
                        isLoaded ?
                            items.map(item => (
                                <Column>
                                    <ProjectCard
                                        lang={props.lang}
                                        selectedLanguage={props.selectedLanguage}
                                        link={item.html_url}
                                        title={item.name.replace("-", " ")}
                                        tech={item.language}
                                        desc={item.description}
                                        date={Moment(item.created_at).format(props.selectedLanguage === "pt" ? "DD/MM/YYYY" : "MM/DD/YYYY")}
                                    />
                                </Column>
                            ))
                            :
                            <LoaderWrapper>
                                <Loader color="#FFF" size={40} />
                            </LoaderWrapper>
                }
            </Row>
        </Container>
    );
}

export default LatestProjects;