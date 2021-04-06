import styled from 'styled-components';

export const Container = styled.div`
    padding: var(--vertical__padding) var(--horizontal__padding);
    background-image: linear-gradient(229deg, var(--secondary), var(--tertiary));
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;

    @media screen and (max-width: 480px) {
        display: contents;
    }

    /* z-index: 5; */
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
    width: var(--width);
    font-weight: lighter;

    margin-bottom: 20px;
`;

export const PrimaryColor = styled.span`
    color: var(--primary);
    font-weight: bold;
`;

export const MainDesc = styled.h3`
    width: var(--width);

    line-height: 25px;
    margin-bottom: 20px;
`;

export const SecondDesc = styled.h5`
    margin-bottom: 20px;
    font-weight: 200;

    display: flex;
`;

export const ProfileImage = styled.img`
    width: 300px;
    margin: 0 auto;

    @media screen and (max-width: 480px) {
        display: none;
    }
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

export const BackgroundHeader = styled.img`

    @media screen and (max-width: 480px) {
        width: 300px;
        right: 10px;
    }

    width: 500px;
    position: absolute;
    right: 300px;
    z-index: 0;
`;

export const BackToTopWrapper = styled.div`

`;

export const BackToTop = styled.div`
    background-color: var(--primary);
    
    width: 20px;

    padding: 0px 20px;

    opacity: .6;

    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    position: fixed;
    right: 20px;
    bottom: 20px;

    &:hover {
        opacity: 1;
        cursor: pointer;
        transition: 0.3s ease 0s all;
    }
`;