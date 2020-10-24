import React, { useState, useEffect } from 'react';
import { Link, pathname } from 'react-router-dom';

import { getRecipes } from '../_api/getRecipes';
import RecipeModal from './RecipeModal';

const Recipes = (props) => {

    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ recipes, setRecipes ] = useState([]);

    useEffect(() => {
        getRecipes( 'Beef',
            (data) => {
                setLoading(false);
                setRecipes(data);
            },
            (error) => {
                setLoading(false);
                setError(error);
            });
    }, []);

    return (
        <div>
            <ul>
                {recipes.map((rec) => {
                    return (
                        <li key={ rec.idMeal }>
                            <Link to={`/recipes/${rec.strCategory}/${rec.idMeal}`}>{rec.strMeal}</Link>
                        </li>
                    );
                })}
            </ul>
            <RecipeModal />
        </div>
    );
}

export default Recipes;
