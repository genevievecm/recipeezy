import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Categories from './composites/Categories';
import Recipes from './composites/Recipes';
import RecipeModal from './composites/RecipeModal';
import NotFound from './composites/NotFound';

// https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
// https://github.com/jintoppy/react-training/blob/master/basic/node_modules/react-router/docs/guides/Histories.md#browserhistory

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Categories} />
            <Route path="/recipes/:category" component={Recipes} />
            <Route path="/recipes/:category/:id" component={RecipeModal} />
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
