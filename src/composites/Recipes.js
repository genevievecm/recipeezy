import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getRecipes } from '../_api/getRecipes';
import RecipeModal from './RecipeModal';

const Recipes = (props) => {

    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ recipes, setRecipes ] = useState([]);

    const { category } = props.match.params;

    useEffect(() => {
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

    return (
        <div>
            <ul>
                {recipes.map((rec) => {
                    return (
                        <li key={ rec.idMeal }>
                            <Link to={`/recipes/${category}/${rec.idMeal}`}>{rec.strMeal}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Recipes;
