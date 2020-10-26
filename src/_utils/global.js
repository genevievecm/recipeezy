import { createGlobalStyle } from 'styled-components';
import { primaryFont } from './fonts';
import { palette } from './colors'

/*
 * Use this file to set default styles on specific HTML elements.
 * Class-based styles like .link or .title, etc. should not be added here.
 */

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ribeye&display=swap');

    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: ${primaryFont};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    main {
        margin: 0 auto;
        width: 80%;
    }

    // TODO: extract this into a Link component
    a {
        text-decoration: none;
        color: ${palette[primaryColor]};
        padding-bottom: 2px;
        border-bottom: 2px dotted ${palette[primaryColor]};
        transition:all 0.3s ease;

        &:hover, &:focus {
            color: ${palette[primaryColor]};
            border-bottom: 2px dotted ${palette[secondaryColor]};
        }
    }
`;
