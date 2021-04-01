import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    :root {
        --white: #fff;
        --white-hover: #efefef;
        --primary: #FD4370;
        --secondary: #1B1E32;
        --secondary_light: #222640;
        --tertiary: #141628;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font-size: 14px;
        font-family: 'Robot', sans-serif;
        background: var(--secondary);
        color: var(--white);
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }

    p {
        @media screen and (min-width: 768px) {
            line-height: 20px;
        }
    }
`;