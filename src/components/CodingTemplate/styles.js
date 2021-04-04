import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;

    @media screen and (max-width: 480px) {
        margin-top: 30px;
    }
`;

export const CodeBgWrap = styled.div`
    width: 90%;
    height: 400px;
    
    border-radius: 10px;

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
    height: 170px;

    border-radius: 10px;
    padding: 20px;
    background-color: var(--dark_gray);

    /* right: 10px;
    top: 40px; */

    
    right: ${props => props.right};
    top: ${props => props.top};

    @media screen and (max-width: 480px) {
        right: -20px;
    }

    box-shadow: 0 4px 30px rgb(0 0 0 / 50%);
`;

export const CodeHeader = styled.div`
    display: grid;
    grid-template-columns: auto 40px;
    align-items: center;

    padding-bottom: 5px;
`;

export const IconWrapper = styled.div`
    text-align: right;
`;

export const CodingLanguage = styled.h3`
    font-weight: 700;
`;

export const CodeBody = styled.div`
    display: flex;
`;

export const CodeTag = styled.code`

`;

export const Code = styled.span`
    color: ${props =>
                props.function ? "#ff5f85"
                : props.method ? "#32d97b"
                : props.parentesis ? "#dc8a36"
                : props.string ? "#f1ed68"
                : props.json ? "#8be9fd" : "white"};
    margin-left: ${props => props.tabs + "rem"};
`;

export const Blink = styled.span`
    animation: blink-animation 1s steps(5, start) infinite;
    -webkit-animation: blink-animation 1s steps(5, start) infinite;

    @keyframes blink-animation {
        to {
            visibility: hidden;
        }
    }

    @-webkit-keyframes blink-animation {
        to {
            visibility: hidden;
        }
    }
`;