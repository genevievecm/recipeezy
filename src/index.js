import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Categories from './pages/Categories';
import Recipes from './pages/Recipes';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Categories} />
            <Route path="/recipes/:category" component={Recipes} />
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
