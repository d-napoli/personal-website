import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px 400px 70px 400px;
    /* background: var(--tertiary); */

    background-image: linear-gradient(229deg, var(--secondary), var(--tertiary));
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
`;

export const Tag = styled.div`
    background-color: var(--primary);
    
    width: 120px;

    text-align: center;
    padding: 10px;
    
    border-radius: 20px;

    margin-bottom: 20px;
`;

export const Title = styled.h1`
    font-size: 3.2em;
    width: 60%;
    font-weight: lighter;

    margin-bottom: 20px;
`;

export const PrimaryColor = styled.span`
    color: var(--primary);
    font-weight: bold;
`;

export const MainDesc = styled.h3`
    width: 60%;

    line-height: 25px;
    margin-bottom: 20px;
`;

export const SecondDesc = styled.h5`
    margin-bottom: 20px;
    font-weight: 200;

    display: flex;
`;

export const ProfileImage = styled.img`
    width: 50%;
    margin: 0 auto;
`;

export const LanguageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 40px;
`;

export const IconWrapper = styled.a`
    margin-right: 10px;
    opacity: .6;
    text-decoration: none;

    &:hover {
        opacity: 1;
        transition: 0.3s ease 0s all;
        cursor: pointer;
    }
`;