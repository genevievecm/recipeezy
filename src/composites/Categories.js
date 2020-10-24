import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getCategories } from '../_api/getCategories';

const Categories = () => {

    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        getCategories(
            (data) => {
                setLoading(false);
                setCategories(data);
            },
            (error) => {
                setLoading(false);
                setError(error);
            });
    }, []);

    if (!loading) {
        return(
            <ul>
                {categories.map((cat) => {
                    return (
                        <li key={ cat.idCategory }>
                            <Link to={`/recipes/${cat.strCategory}`}>
                                { cat.strCategory }
                            </Link>
                        </li>
                    );
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
