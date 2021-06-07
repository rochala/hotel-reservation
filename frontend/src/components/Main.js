import {Route, Switch} from 'react-router-dom';
import * as React from "react";
import Hero from '../views/ProductHero';
import Values from '../views/Values';
import Photos from '../views/Photos';
import ContactHero from '../views/ContactHero';
import Login from '../views/Login';
import Register from '../views/Register';
import Reservation from '../views/Reservation';
import Contact from '../views/Contact';
import Profile from '../views/Profile';

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
                    <Reservation />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/sign-up'>
                    <Register />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
            </Switch>
        </main>
    );
}

export default Main
