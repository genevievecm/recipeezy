import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

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
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    min-height: 50vh;
`;

const Modal = (props) => {

    const closeButton = useRef(null);

    useEffect(() => {
        // puts focus on the modal it appears
        closeButton.current.focus();
    }, []);

    return (
        <ModalOverlay>
            <ModalContent>
                <button onClick={ props.handleClose } ref={ closeButton }>close</button>
                {props.children}
            </ModalContent>
        </ModalOverlay>
    );
}

export default Modal;
