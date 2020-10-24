import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, browserHistory } from "react-router-dom";

import Categories from './composites/Categories';
import Recipes from './composites/Recipes';

// https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
// https://github.com/jintoppy/react-training/blob/master/basic/node_modules/react-router/docs/guides/Histories.md#browserhistory

const App = () => {
    return (
        <Router>
            <Route exact path="/" component={Categories} />
            <Route path="/recipes/:category" component={Recipes} />
            <Route path="/recipes/:category/:title" component={Recipes} />
        </Router>
    )
}

ReactDOM.render(
    <App history={browserHistory} />,
    document.getElementById('app')
);
