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
            (result) => successCallback(normalizeRecipe(result.meals)[0]),
            (error) => errorCallback(error)
        );
}

// https://gist.github.com/danew/072a61343dfd103e21f7c9168627a01c
const normalizeRecipe = (meals) => {
    return meals.map(meal => {
        const rest = Object.keys(meal).reduce((acc, curr) => {
            if (/str(Ingredient|Measure)/.test(curr)) return acc;
            return {
                [curr]: meal[curr],
                ...acc
            }
        }, {});
        let ingredients = [];
        for (let i = 1; i <= 20; i++) {
            if (!meal[`strIngredient${i}`]) continue;
            ingredients.push({
                ingredient: meal[`strIngredient${i}`],
                measurement: meal[`strMeasure${i}`]
            });
        }

        return {
            ...rest,
            ingredients,
        }
    });
}
