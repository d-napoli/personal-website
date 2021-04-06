import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-color: var(--tertiary);

    /* padding: 0 0 70px 0; */

    padding: var(--vertical__padding) var(--horizontal__padding);
`;

export const Column = styled.div`
    display: flex;

    flex-direction: column;

    flex-basis: 100%;
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    
    align-items: center;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
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

    @media screen and (max-width: 767px) {
        margin-bottom: 20px;
    }
`;
