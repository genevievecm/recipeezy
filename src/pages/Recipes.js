import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import { getRecipes, getRecipe } from '../_api/getRecipes';

import Modal from '../components/Modal/Modal';
import UnorderedList from '../components/UnorderList/UnorderedList';


const Recipes = (props) => {

    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ recipesList, setRecipesList ] = useState([]);
    const [ recipeItem, setRecipeItem ] = useState(null);
    const [ recipeId, setRecipeId ] = useState(null);
    const [ showModal, setShowModal ] = useState(false);
    const [ buttonId, setButtonId ] = useState(null);


    const { category } = props.match.params;
    const history = useHistory();
    const recipeButtons = useRef([]);

    // get list of recipes
    useEffect(() => {
        getRecipes( category,
            (data) => {
                setLoading(false);
                setRecipesList(data);
            },
            (error) => {
                setLoading(false);
                setError(error);
            });
    }, []);

    // get sinlge recipe
    useEffect(() => {
        // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
        const params = new URLSearchParams(props.location.search);

        if (params.has('recipeId')) {
            openModal(params.get('recipeId'));
        }

        if (recipeId) {
            getRecipe( recipeId,
                (data) => {
                    setRecipeItem(data);
                },
                (error) => {
                    setError(error);
                });
        }
    }, [recipeId]);

    function handleClick(recipeId, buttonId) {
        openModal(recipeId);
        setButtonId(buttonId);
    }

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
        setRecipeItem(null);
        setShowModal(false);

        // put focus back on the last clicked recipe button
        recipeButtons.current[buttonId].focus();

        history.push({
            location: category
        });
    }

    return (
        <div>
            <UnorderedList>
                {   recipesList.length > 0 &&
                    recipesList.map((rec, index) => {
                        return (
                            <li key={ rec.idMeal }>
                                <button
                                    ref={ ref => recipeButtons.current[index] = ref }
                                    onClick={ () => handleClick(rec.idMeal, index) }
                                >
                                    { rec.strMeal }
                                </button>
                            </li>
                        );
                    })
                }
            </UnorderedList>
            {
                showModal &&
                <Modal handleClose={ () => closeModal() } >
                    {
                        recipeItem &&
                        <Fragment>
                            <h1>{ recipeItem.strMeal }</h1>
                            <p>{ recipeItem.strInstructions }</p>
                            <a href={ recipeItem.strSource } target="_blank">Recipe Source</a>
                        </Fragment>
                    }
                </Modal>
            }
        </div>
    );
}

export default Recipes;
