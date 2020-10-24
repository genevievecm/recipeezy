import React, { useState, useEffect } from 'react';

const Categories = () => {

    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(
                (result) => {
                    setLoading(false);
                    setCategories(result.categories);
                },
                (error) => {
                    setLoading(false);
                    setError(error);
                }
            );
    }, []);

    if (!loading) {
        return(
            <ul>
                {categories.map((cat) => {
                    return <li key={ cat.idCategory }>{ cat.strCategory }</li>
                })}
            </ul>
        );
    } else {
        return (
            <h1>loading</h1>
        )
    }

};

export default Categories;
