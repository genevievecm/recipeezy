import React from 'react';
import styled from 'styled-components';

const StyledUnorderedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: ${props => props.margin || 0};
`;

const StyledUnorderedInlineList = styled(StyledUnorderedList)`
    display: flex;
    flex-wrap: wrap;

    li {
        box-sizing: border-box;
        flex-grow: 1;
        padding: 10px;
        width: ${props => `${100 / props.largeRow}%` || 'initial'};
        max-width: ${props => `${100 / props.largeRow}%` || 'auto'};

        @media (max-width: 640px) {
            width: ${props => `${100 / props.smallRow}%` || 'initial'};
            max-width: ${props => `${100 / props.smallRow}%` || 'auto'};
        }
    }
`;

export const UnorderedList = (props) => {

    return (
        <StyledUnorderedList margin={props.margin}>
            {props.children}
        </StyledUnorderedList>
    );
}

export const UnorderedInlineList = (props) => {
    return (
        <StyledUnorderedInlineList
            largeRow={props.largeRow}
            smallRow={props.smallRow}
            margin={props.margin}
        >
            {props.children}
        </StyledUnorderedInlineList>
    )
}
