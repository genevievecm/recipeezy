import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import { getRecipes, getRecipe } from '../_api/getRecipes';

import { UnorderedInlineList, Modal, Card } from '../components';
import { palette } from '../_utils';

export const Recipes = (props) => {

    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ recipesList, setRecipesList ] = useState([]);
    const [ recipeItem, setRecipeItem ] = useState(null);
    const [ recipeId, setRecipeId ] = useState(null);
    const [ showModal, setShowModal ] = useState(false);
    const [ buttonId, setButtonId ] = useState(false);


    const { category } = props.match.params;
    const history = useHistory();
    const recipeButtons = useRef([]);

    // handles list of recipes
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

    // handles single recipe
    useEffect(() => {
        // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
        const params = new URLSearchParams(props.location.search);

        // handles if the user visits the recipe url directly
        if (params.has('recipeId')) {
            openModal(params.get('recipeId'));
        }

        if (recipeId) {
            getRecipe( recipeId,
                (data) => {
                    console.log(data)
                    setRecipeItem(data);
                },
                (error) => {
                    setError(error);
                });
        }
    }, [recipeId]);

    function handleSelectedRecipe(recipeId, buttonId) {
        setButtonId(buttonId);
        openModal(recipeId);
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
        // TODO: determine the buttonId corresponding to modal if a refresh happens on recipe modal,
        // otherwise keyboard focus is lost when returning back to the recipe list
        if (buttonId) {
            recipeButtons.current[buttonId].focus();
        } else {
            recipeButtons.current[0].focus();
        }

        history.push({
            location: category
        });
    }

    return (
        <div>
            {   category &&
                <p style={{ textAlign: "center" }}>{ category } Recipes</p>
            }
            <UnorderedInlineList
                largeRow="3"
                smallRow="2"
                margin="30px 0"
            >{
                recipesList.length > 0 &&
                recipesList.map((rec, index) => {
                    return (
                        <li key={ rec.idMeal }>
                            <Card textAlign="center">
                                <h4 className="flex-title">{ rec.strMeal }</h4>
                                {
                                    // need to use an actual button element because ref won't work the same on a functional component: https://reactjs.org/docs/refs-and-the-dom.html
                                }
                                <button
                                    className="card-cta open-modal"
                                    ref={ ref => recipeButtons.current[index] = ref }
                                    onClick={ () => handleSelectedRecipe(rec.idMeal, index) }
                                >
                                    View Recipe
                                </button>
                            </Card>
                        </li>
                    );
                })
            }</UnorderedInlineList>
            {
                showModal &&
                <Modal
                    title={recipeItem ? recipeItem.strMeal : ''}
                    isOpen={showModal}
                    handleClose={() => closeModal()}
                >
                    {
                        recipeItem &&
                        <Fragment>
                            <img
                                src={recipeItem.strMealThumb}
                                style={{ backgroundColor: palette.secondaryColor, float: 'right', width: '50%', padding: '0 0 10px 10px', marginLeft: '10px' }}
                                loading="lazy"
                                aria-hidden
                            />
                            <p>{ recipeItem.strInstructions }</p>
                            <ul>
                                {
                                    recipeItem.ingredients.map((item) => {
                                        return <li>{item.measurement} {item.ingredient}</li>
                                    })
                                }
                            </ul>
                            {
                                recipeItem.strSource &&
                                <a href={ recipeItem.strSource } target="_blank">See Original Recipe Source</a>
                            }
                        </Fragment>
                    }
                </Modal>
            }
        </div>
    );
}
