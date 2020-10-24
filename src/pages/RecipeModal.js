import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getRecipe } from '../_api/getRecipes';

const Modal = styled.div`
    background: red;
`;

const RecipeModal = (props) => {

    console.log(props);

    const [ error, setError ] = useState(null);
    const [ recipe, setRecipe ] = useState({});

    const recipeId = props.id;

    useEffect(() => {
        getRecipe( recipeId,
            (data) => {
                setRecipe(data);
            },
            (error) => {
                setError(error);
            });
    }, [recipeId]);

    return (
        <Modal>
            <h1>{ recipe.strMeal }</h1>
            <p>{ recipe.strInstructions }</p>
            <button onClick={ props.handleClose }>close</button>
        </Modal>
    );
}

export default RecipeModal;
