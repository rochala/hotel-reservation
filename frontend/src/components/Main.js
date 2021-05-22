import {Route, Switch} from 'react-router-dom'
import * as React from "react";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    Test
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
