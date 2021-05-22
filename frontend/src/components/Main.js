import {Route, Switch} from 'react-router-dom';
import * as React from "react";
import Hero from '../views/ProductHero';
import Values from '../views/Values';
import Photos from '../views/Photos';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Hero />
                    <Values />
                    <Photos />
                </Route>
                <Route path='/reservations'>
                    test2
                </Route>
                <Route path='/contact'>
                    test3
                </Route>
                <Route path='/login'>
                    login
                </Route>
            </Switch>
        </main>
    );
}

export default Main
