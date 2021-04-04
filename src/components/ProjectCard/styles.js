import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid var(--secondary_light);
    border-radius: 10px;
    color: black;

    @media screen and (min-width: 1100px) {
        height: auto;
    }

    &:hover {
        background-color: var(--secondary_light);
        transition: 0.3s ease 0s all;

        div > div > div:nth-child(1) {
            border: 1px solid var(--secondary);
        }
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

export const ProjectWrapper = styled.div`
    color: var(--white);
    font-weight: bold;

    @media screen and (min-width: 768px) {
        padding: 40px;
    }

    @media screen and (max-width: 767px) {
        padding: 20px;
    }
`;

export const Title = styled.h2`
    margin: 20px 0;
    font-size: 25px;
    /* font-weight: 400; */
`;

export const DescriptionWrapper = styled.div`
    padding: 40px;
`;

export const Description = styled.h3`
    font-size: 15px;
    margin-bottom: 20px;
    font-weight: 200;
`;

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid var(--secondary_light);
    text-align: center;
    padding: 5px;
    border-radius: 10px;
    margin-bottom: 20px;

    width: 80px;
`;

export const CategoryDesc = styled.p`
    font-size: 12px;
    font-weight: 100;
`;

export const ProjectDateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    /* margin-bottom: 20px; */
`;

export const ProjectDate = styled.p`
    font-weight: 100;
    margin-left: -10px;
`;

export const ProjectLink = styled.a`
    text-decoration: none;
`;

export const BodyWrapper = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
`;