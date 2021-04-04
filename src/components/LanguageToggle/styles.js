import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    z-index: 100;
`;

export const FlagIcon = styled.img`
    width: 35px;
`;

export const LanguageDesc = styled.p`
    margin: 0;
    color: var(--white);
    padding-left: 10px;
`;

export const AnotherLanguageDesc = styled.p`
    margin: 0;
    color: var(--secondary);
    padding-left: 10px;
`;

export const MainLanguageWrapper = styled.div`
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
        opacity: .8;
        transition: 0.3s ease 0s all;
    }
`;

export const AnotherLanguageWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--white);
    padding: 6px 0;
    border-radius: 10px;
    position: absolute;
    top: 90px;

    transition-timing-function: ease-in;
    transition: all 0.5s;

    &:after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -7px;
        border-width: 7px;
        border-style: solid;
        border-color: transparent transparent var(--white) transparent;
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;

    padding: 5px 15px;

    &:hover {
        background-color: var(--white-hover);
        cursor: pointer;
        transition: 0.3s ease 0s all;
    }
`;