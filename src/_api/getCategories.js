import { categoriesList } from './constants';

export const getCategories = (successCallback, errorCallback) => {
    fetch(categoriesList)
        .then(response => response.json())
        .then(
            (result) => successCallback(result.categories),
            (error) => errorCallback(error)
        );
};
