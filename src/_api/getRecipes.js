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
            (result) => successCallback(result.meals[0]),
            (error) => errorCallback(error)
        );
}

const normalizeRecipe = () => {
    const meal = Object.keys(meals);
    const rest = meal.reduce((acc, curr) => {
        debugger;
        if (/str(Ingredient|Measure)/.test(curr)) return acc;
        return {
            [curr]: meal[curr],
            ...acc
        }
    }, {});

    console.log(rest)
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
}
