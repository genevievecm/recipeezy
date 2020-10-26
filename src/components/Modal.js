import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { palette, typeScale, primaryFont } from '../_utils';

const ModalOverlay = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
    background-color: white;
    border-radius: 10px;
    margin: 15% auto;
    padding: 30px;
    border: 1px solid #888;
    width: 80%;
    min-height: 50vh;
`;

const StyledModalImage = styled.img`
    background-color: ${palette.secondaryColor};
    float: right;
    width: 25%;
    padding: 0 0 10px 10px;
    margin: 0 0 20px 20px;
`;

const ClostButton = styled.button`
    font-size: 0;
    font-family: ${primaryFont};
    font-size: ${typeScale.header3};
    float: right;

    &:hover {
        cursor: pointer;
    }
`;

export const ModalImage = (props) => {
    return (
        <StyledModalImage
            src={ props.src }
            alt={ props.alt || '' }
            aria-hidden={ props.isDecorative }
            loading="lazy"
        />
    );
};

export const Modal = (props) => {

    const closeButton = useRef(null);

    useEffect(() => {
        // puts focus on the modal once it appears
        closeButton.current.focus();
    }, []);

    return (
        <ModalOverlay
        >
            <ModalContent
                role="dialog"
                aria-modal="true"
                aria-labelledby={ props.title }
            >
                <ClostButton
                    onClick={ props.handleClose }
                    ref={ closeButton }
                >
                    close
                </ClostButton>
                <h2>{ props.title }</h2>
                { props.children }
            </ModalContent>
        </ModalOverlay>
    );
}
