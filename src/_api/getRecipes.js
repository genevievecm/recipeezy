import { recipesList, recipeItem } from './constants';

export const getRecipes = (category, successCallback, errorCallback) => {
    fetch(recipesList + category)
        .then(response => response.json())
        .then(
            (result) => successCallback(result.meals),
            (error) => errorCallback(error)
        );
};

export const getRecipe = (item, successCallback, errorCallback) => {
    fetch(recipeItem + item)
        .then(response => response.json())
        .then(
            (result) => successCallback(result),
            (error) => errorCallback(error)
        );
}
