import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    padding: 0px 400px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;

    margin: 0 auto;
    align-items: center;
    flex: 33.3%;

    margin-bottom: 30px;

    width: 100%;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    padding: 0 100px;
`;
