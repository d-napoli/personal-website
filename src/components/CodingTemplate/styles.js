import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const CodeBgWrap = styled.div`
    width: 90%;
    border-radius: 10px;
    height: 300px;
    background-color: gray;
    padding: 20px;
    content: "";

    background-image: linear-gradient(335deg, #212429, #30373f);

    z-index: 5;
`;

export const CodeWindow = styled.div`
    z-index: 10;

    position: absolute;

    width: 300px;
    height: 140px;

    border-radius: 10px;
    padding: 20px;
    background-color: var(--dark_gray);

    right: 10px;
    top: 20px;
    box-shadow: 0 4px 30px rgb(0 0 0 / 50%);
`;

export const CodeHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    /* width: 100%; */
`;

export const CodingLanguage = styled.h3`
    font-weight: 700;

`;

export const CodeBody = styled.div`
`;
