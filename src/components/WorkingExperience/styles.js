import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--tertiary);

    padding: 0 0 70px 0;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    padding: 0 400px;
    
`;

export const CompanyImage = styled.img`
    width: 150px;
    opacity: .6;

    display: block;
    margin: 0 auto;

    &:hover {
        opacity: 1;
        transition: 0.3s ease 0s all;
        cursor: pointer;
    }
`;