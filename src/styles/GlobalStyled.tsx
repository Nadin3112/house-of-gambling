import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    ::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        margin: 0;
        font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-width: 320px;
        background-color: ${theme.colors.primaryBg};
        color: ${theme.colors.font};
        position: relative;
    
        &::before {
            position: absolute;
            bottom: 0;
            right: 0;
            content: "";
            width: 574px;
            height: 574px;
            border-radius: 574px;
            opacity: 0.7;
            background-image: linear-gradient(256deg, #478BF9 0%, #9DADF2 100%);
            filter: blur(325px);

            @media ${theme.media.desktop} {
                position: absolute;
                content: "";
                width: 240px;
                height: 240px;
                right: 0;
                bottom: 0;
                fill: var(--Main-Blue-Hover, linear-gradient(256deg, #478BF9 0%, #9DADF2 100%));
                opacity: 0.7;
                filter: blur(135.8885040283203px);
            }
        }

        &::after {
            position: absolute;
            top: 0;
            left: 307px;
            content: "";
            width: 226.458px;
            height: 1302.469px;
            transform: rotate(-54.311deg);
            flex-shrink: 0;
            background-image: linear-gradient(180deg, #478BF9 0%, rgba(71, 139, 249, 0.40) 100%);
            opacity: 0.55;
            filter: blur(150px);
        
            @media ${theme.media.desktop} {
                position: absolute;
                content: "";
                width: 81.081px;
                height: 466.334px;
                transform: rotate(-54.311deg);
                left: 69.152px;
                top: 22px;
                background-image: linear-gradient(180deg, #478BF9 0%, rgba(71, 139, 249, 0.40) 100%);
                opacity: 0.55;
                filter: blur(39.734619140625px);
            }
        }

        @media ${theme.media.tablet} {
            padding-top: 10px;
        }
    }

    a {
        text-decoration: none;
        color: ${theme.colors.font};
        transition: ${theme.animations.transition};
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }
`
