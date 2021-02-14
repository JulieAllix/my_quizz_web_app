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
import {CreateThemes} from './pages/createThemes/CreateThemes';

import './App.scss';


function App() {
    const [headerText, setHeaderText] = useState<string>('Parameters of the quizz');
    let location = useLocation();

    useEffect(() => {
        switch(location.pathname) {
            case '/quizz':
                setHeaderText('Parameters of the quizz')
            break;
            case '/edit-themes':
                setHeaderText('Themes')
                break;
            case '/sign-in':
                setHeaderText('Sign in')
                break;
            case '/sign-up':
                setHeaderText('Sign up')
                break;
            case '/create-theme':
                setHeaderText('New theme')
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
                        <Route exact path={"/edit-themes"} component={EditThemes}/>
                        <Route exact path={"/sign-in"} component={SignIn}/>
                        <Route exact path={"/sign-up"} component={SignUp}/>
                        <Route exact path={"/create-theme"} component={CreateThemes}/>
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
