import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { typeScale, primaryFont } from '../_utils/fonts';

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

const ClostButton = styled.button`
    font-size: 0;
    font-family: ${primaryFont};
    font-size: ${typeScale.header3};
    float: right;

    &:hover {
        cursor: pointer;
    }
`;

export const Modal = (props) => {

    const closeButton = useRef(null);

    useEffect(() => {
        // puts focus on the modal once it appears
        closeButton.current.focus();
    }, []);

    return (
        <ModalOverlay>
            <ModalContent
                role="dialog"
                aria-modal="true"
                aria-hidden={!props.isOpen}
            >
                <ClostButton
                    className="open-modal"
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
