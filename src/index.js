import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalStyle, logoFont, typeScale, palette } from "./_utils";

import { Categories, Recipes, NotFound } from './pages';

// images for header logo
import squares1 from './_img/squares1.png';
import squares2 from './_img/squares2.png';

const DecorativeImage = (size, img, y, x) => {
    return (`
        width: ${size};
        height: ${size};
        background-image: url(${img});
        top: ${y}px;
        left: ${x}px;
    `);
};

const Header = styled.header`
    font-family: ${logoFont};
    font-size: ${typeScale.header1};
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    border-bottom: 5px solid ${palette.primaryColor};
    padding: 40px 0;

    /* Hyperlinked logo with decorative images */
    a {
        color: ${palette.primaryColor};
        position: relative;
        border-bottom: none;

        &:before, &:after {
            content: '';
            position: absolute;
            z-index: -1;
            background-size: cover;
        }
        &:before {
            ${DecorativeImage('80px', squares1, '-20', '-25')}
        }
        &:after {
            ${DecorativeImage('100px', squares2, '-35', '100')}
        }
    }
`;

const App = () => {
    return (
        <>
        <GlobalStyle />
        <Router>
            <Header>
                <Link to="/">Recipeezy</Link>
            </Header>
            <main>
                <Switch>

                    <Route exact path="/" component={ Categories } />
                    <Route path="/recipes/:category" component={ Recipes } />
                    <Route component={ NotFound } />
                </Switch>
            </main>
        </Router>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
