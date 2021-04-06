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

    useEffect(async () => {
        async function get_github_data() {
            // let github_rest = [];
            // let file_name = props.selectedLanguage == "pt" ? "README.pt.md" : "README.md";
            // let repo_readme_url = "";
    
            const res = await fetch("https://api.github.com/users/d-napoli/repos?per_page=2&sort=updated")
            const json = await res.json()

            return json;

            // .then(res => res.json())
            // .then(
            //     (result) => {
            //         setItems(result)
            //     },
            //     (error) => {
            //         setIsLoaded(true)
            //         setError(error)
            //     }
            // )
        }

        async function get_github_readmes(repos) {
            console.log(repos)

            // items.map(item=> {
            //     console.log(item)
            //     // repo_readme_url = (`https://api.github.com/repos/d-napoli/${item.name}/contents/${file_name}`);

            //     // fetch(repo_readme_url)
            //     // .then(res => res.json())
            //     // .then(
            //     //     (readme_res) => {
            //     //         if( !(item.id in github_rest) )
            //     //             github_rest[item.id] = {}
                        
            //     //         github_rest[item.id]["html_url"] = item.html_url
            //     //         github_rest[item.id]["name"] = item.name
            //     //         github_rest[item.id]["language"] = item.language
            //     //         github_rest[item.id]["description"] = atob(readme_res.content) // reading in base 64 code
            //     //         github_rest[item.id]["created_at"] = item.created_at
            //     //     },
            //     //     (error) => {
            //     //         setIsLoaded(true)
            //     //         setError(error)
            //     //     }
            //     // )
            // })

            // setItems(github_rest)
            // console.log("Items: ")
            // console.log(github_rest)
            // console.log(items)
            // setIsLoaded(true)
        }

        const repos = await get_github_data();
        // setItems(repos);
        // console.log("Repos", items);
        await get_github_readmes(repos);
    }, [])

    return (
        <Container>
            <NewSection
                title={props.lang[props.selectedLanguage]['sections']['latest_projects']['title']}
                description={props.lang[props.selectedLanguage]['sections']['latest_projects']['description']}
                completeDescription={props.lang[props.selectedLanguage]['sections']['latest_projects']['completeDescription']}
            />
            <Row>
                {/* {
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
                                        date={Moment(item.created_at).format(props.selectedLanguage == "pt" ? "DD/MM/YYYY" : "MM/DD/YYYY")}
                                    />       
                                </Column>
                            ))
                        :
                        <LoaderWrapper>
                            <Loader color="#FFF" size={40} />
                        </LoaderWrapper>
                } */}
            </Row>
        </Container>
    );
}

export default LatestProjects;