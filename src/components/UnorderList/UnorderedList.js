import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledUnorderedList = styled.ul`
    list-style: none;
`;

const UnorderedList = (props) => {

    return (
        <StyledUnorderedList>
            {props.children}
        </StyledUnorderedList>
    );
}

export default UnorderedList;
