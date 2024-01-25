import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyled = createGlobalStyle`
  *,
  *::before,
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
