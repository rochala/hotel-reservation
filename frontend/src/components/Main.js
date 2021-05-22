import {Route, Switch} from 'react-router-dom';
import * as React from "react";
import Hero from '../views/ProductHero';
import Values from '../views/Values';
import Photos from '../views/Photos';
import ContactHero from '../views/ContactHero';
import Login from '../views/Login';
import Register from '../views/Register';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Hero />
                    <Values />
                    <Photos />
                    <ContactHero />
                </Route>
                <Route path='/reservations'>
                    test2
                </Route>
                <Route path='/contact'>
                    test3
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
            </Switch>
        </main>
    );
}

export default Main
