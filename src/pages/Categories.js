import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getCategories } from '../_api/getCategories';

import { UnorderedInlineList, Card } from '../components';


export const Categories = () => {

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
            <>
            <p style={{ textAlign: "center" }}>Browse categories to discover recipes from around the world!</p>
            <UnorderedInlineList
                largeRow="4"
                smallRow="2"
                margin="30px 0"
            >
                {categories.map((cat) => {
                    return (
                        <li key={ cat.idCategory }>
                            <Card textAlign="center">
                                <img
                                    className="decorative-image"
                                    src={ cat.strCategoryThumb }
                                    loading="lazy"
                                    aria-hidden
                                />
                                <h4>{ cat.strCategory }</h4>
                                <Link className="card-cta" to={`/recipes/${cat.strCategory}`}>See Recipes</Link>
                            </Card>
                        </li>
                    );
                })}
            </UnorderedInlineList>
            </>
        );
    } else {
        return (
            <p style={{ textAlign: "center" }}>Loading categories...</p>
        );
    }

};
