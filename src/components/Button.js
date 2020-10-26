import React from 'react';
import styled from 'styled-components';

import { palette } from '../_utils/colors';

const StyledButton = styled.button`
    background: ${palette.secondaryColor};
    border: 2px solid ${palette.secondaryColor};
    cursor: pointer;
    padding: 10px;
    transition:all 0.3s ease;

    &:hover, &:focus {
        background: white;
        border: 2px dotted ${palette.secondaryColor};
    }
`;

export const Button = (props) => {

    return (
        <StyledButton
            type="button"
            onClick={props.onClick}
        >
            {props.children}
        </StyledButton>
    );
}
