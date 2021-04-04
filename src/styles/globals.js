import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    :root {
        --white: #fff;
        --white-hover: #efefef;
        --primary: #FD4370;
        --primary_hover: #bf3255;
        --secondary: #1B1E32;
        --secondary_light: #222640;
        --tertiary: #141628;
        /* --dark_gray: #1d1e22; */
        --dark_gray: #282a36;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--primary);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--primary_hover);
    }

    @media screen and (min-width: 1280px) {
        :root {
            --horizontal__padding: 25%;
            --vertical__padding: 40px;
            --grid__flex__direction: column;
            --width: 80%;
        }
    }
    
    @media screen and (min-width: 769px) and (max-width: 1279px) {
        :root {
            --horizontal__padding: 150px;
            --vertical__padding: 40px;
            --grid__flex__direction: column;
            --width: 80%;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
        :root {
            --horizontal__padding: 70px;
            --vertical__padding: 40px;
            --grid__flex__direction: column;
            --width: 75%;
        }
    }

    @media screen and (max-width: 480px) {
        :root {
            --horizontal__padding: 30px;
            --vertical__padding: 40px;
            --grid__flex__direction: row;
            --width: 100%;
        }
    }

    ::selection {
        background: var(--primary);
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