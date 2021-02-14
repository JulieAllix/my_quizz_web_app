import React from 'react';
import {useEffect, useState} from "react";
import {Route, Switch, useLocation} from "react-router-dom";

import {Header} from "./components/Header";
import {BottomTabNavigator} from "./components/BottomTabNavigator";

import {SignIn} from './pages/signIn/SignIn';
import {SignUp} from './pages/signUp/SignUp';
import {Home} from './pages/home/Home';
import {Quizz} from './pages/quizz/Quizz';
import {EditThemes} from './pages/edit/EditThemes';

import './App.scss';


function App() {
    const [headerText, setHeaderText] = useState<string>('Parameters of the quizz');
    let location = useLocation();

    useEffect(() => {
        switch(location.pathname) {
            case '/quizz':
                setHeaderText('Parameters of the quizz')
            break;
            case '/editThemes':
                setHeaderText('Themes')
                break;
            case '/sign-in':
                setHeaderText('Sign in')
                break;
            case '/sign-up':
                setHeaderText('Sign up')
                break;
        }

    }, [location.pathname]);

  return (
    <div className="component_App">
        {location.pathname === '/' ?
            <Home />
            :
            <div>
                <Header title={headerText}/>
                    <Switch>
                        <Route exact path={"/quizz"} component={Quizz}/>
                        <Route exact path={"/editThemes"} component={EditThemes}/>
                        <Route exact path={"/sign-in"} component={SignIn}/>
                        <Route exact path={"/sign-up"} component={SignUp}/>
                        <Route path={"*"} component={Quizz}/>
                    </Switch>
                {(location.pathname !== '/sign-in' && location.pathname !== '/sign-up') &&
                <BottomTabNavigator/>
                }
            </div>
        }
    </div>
  );
}

export default App;
