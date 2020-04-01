import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import './App.css';

import Home from "./Home/Home";
import NewsContainer from "./News/NewsContainer";
import LoginContainer from "./Login/LoginContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import {appRoutes} from "../common/constants/routs";

const App = () => {
    const {main, home, login, news, profile} = appRoutes;

    return (
        <div>
            <Router>
                <HeaderContainer/>
                <div className='routes-wrapper'>
                    <Switch>
                        <Route exact path={main}>
                            <Redirect to={home} />
                        </Route>
                        <Route path={home} component={Home}/>
                        <Route path={login} component={LoginContainer}/>
                        <Route path={news} component={NewsContainer}/>
                        <Route path={profile} component={ProfileContainer}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;