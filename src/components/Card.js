import React from 'react';
import styled from 'styled-components';

import { palette } from '../_utils/colors';
import { primaryFont } from '../_utils/fonts';

const StyledBlock = styled.div`
    border: 1px solid ${palette.secondaryColor};
    box-sizing: border-box;
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: ${props => props.textAlign || 'left'};

    .decorative-image {
        width: 100%;
    }

    /* a title that will take up available space and appear vertically aligned */
    .flex-title {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    /* float to the bottom of the card */
    .card-cta {
        margin-top: auto;
    }

    // TODO: ideally add these to a styled Button component; refs don't work the same on functional components
    .open-modal {
        background: ${palette.secondaryColor};
        border: 2px solid ${palette.secondaryColor};
        cursor: pointer;
        padding: 10px;
        transition:all 0.3s ease;
        font-family: ${primaryFont};

        &:hover, &:focus {
            background: white;
            border: 2px dotted ${palette.secondaryColor};
        }
    }
`;

export const Card = (props) => {

    return (
        <StyledBlock textAlign={ props.textAlign }>
            {props.children}
        </StyledBlock>
    );
}
