import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    /* padding: 0px 400px 70px 400px; */
    padding: var(--vertical__padding) var(--horizontal__padding);
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;

    margin: 0 auto;
    align-items: center;
    flex: 33.3%;

    /* margin-bottom: 30px; */

    width: 100%;

    padding: 20px;
`;

export const Row = styled.div`
    display: flex;
    
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    @media screen and (max-width: 767px) {
        flex-direction: column;
    }

    flex-wrap: wrap;
    width: 100%;
`;

export const LoaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    align-items: center;
`;