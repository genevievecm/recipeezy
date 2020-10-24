import React, { useState, useEffect } from 'react';

import { getRecipe } from '../_api/getRecipes';

const RecipeModal = (props) => {

    const [ error, setError ] = useState(null);
    const [ recipe, setRecipe ] = useState({});

    const recipeId = props.match.params.id;

    useEffect(() => {
        getRecipe( recipeId,
            (data) => {
                setRecipe(data);
            },
            (error) => {
                setError(error);
            });
    }, [recipeId]);

    function handleClose() {
        // does not apply if you're clicking from recipe to recipe
        props.history.goBack();
    }

    return (
        <div>
            <h1>{ recipe.strMeal }</h1>
            <p>{ recipe.strInstructions }</p>
            <button onClick={ handleClose }>close</button>
        </div>
    );
}

export default RecipeModal;
