import React, { Component } from 'react';

// fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

//pages
import MainPage from "./Pages/index";
import Notn from "./Pages/NotN";
import PageNotFound from "./Pages/404";
import TimKoehoorn from './Pages/TimKoehoorn';

library.add(faGraduationCap);

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/NotN" component={Notn} />
                    <Route exact path="/404" component={PageNotFound}/>
                    <Route exact path="/TimKoehoorn" component={TimKoehoorn} />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        )
    };
}

export default App;