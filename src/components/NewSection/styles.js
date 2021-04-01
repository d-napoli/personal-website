import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 70px 400px 20px 400px;

    text-align: center;
    margin: 0 auto;
    width: 100%;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;

    text-align: center;
`;


export const Title = styled.h5`
    font-weight: bold;
    color: var(--primary);

    margin-bottom: 20px;
`;

export const SectionDescription = styled.h2`
    margin-bottom: 20px;
`;

export const LineBreaker = styled.div`
    &:after {
        content: "";
        display: block;
        width: 60px;
        height: 2px;
        background: var(--primary);
        margin: 20px auto 29px;
        border-radius: 2px;
    }
`;

export const CompleteDescription = styled.p`
    font-weight: 100;
`;