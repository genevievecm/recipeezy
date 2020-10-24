import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getRecipes } from '../_api/getRecipes';
import RecipeModal from './RecipeModal';

const Recipes = (props) => {

    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ recipes, setRecipes ] = useState([]);
    const [ recipeId, setRecipeId ] = useState(null);
    const [ showModal, setShowModal ] = useState(false);

    const { category } = props.match.params;
    const history = useHistory();

    useEffect(() => {
        // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
        const params = new URLSearchParams(props.location.search);

        if (params.has('recipeId')) {
            const recipeValue = params.get('recipeId');
            openModal(recipeValue);
        }

        getRecipes( category,
            (data) => {
                setLoading(false);
                setRecipes(data);
            },
            (error) => {
                setLoading(false);
                setError(error);
            });
    }, []);

    function openModal(id) {
        setShowModal(true);
        setRecipeId(id);

        history.push({
            location: category,
            search: `?recipeId=${id}`
        });
    }

    function closeModal() {
        setRecipeId(null);
        setShowModal(false);

        history.push({
            location: category
        });
    }

    return (
        <div>
            <ul>
                {   recipes.length > 0 &&
                    recipes.map((rec) => {
                        return (
                            <li key={ rec.idMeal }>
                                <button onClick={ () => openModal(rec.idMeal) }>{ rec.strMeal }</button>
                            </li>
                        );
                    })
                }
            </ul>
            {
                showModal &&
                <RecipeModal id={ recipeId } handleClose={ () => closeModal() } />
            }
        </div>
    );
}

export default Recipes;
