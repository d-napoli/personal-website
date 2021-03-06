import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    /* padding: 0px 400px; */

    padding: var(--vertical__padding) var(--horizontal__padding);
`;

export const Column = styled.div`
    display: flex;
    flex-direction: var(--grid__flex__direction);
    flex-basis: 100%;
    flex: 1;

    margin: 0 auto;
    align-items: center;

    margin-bottom: 30px;

    width: 100%;

    @media screen and (min-width: 768px) {
        flex: 33.3%;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media screen and (min-width: 768px) {
        padding: 0 100px;
        flex-direction: row;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;
