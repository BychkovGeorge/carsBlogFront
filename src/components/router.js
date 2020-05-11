import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from "../App";
import Home from "../components/home";
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import newTitle from "./newTitle";

class RouterClass extends React.Component {
    render() {
        return(
            <Switch>
                <React.Suspense fallback={(<div/>)}>
                    <Route path='/' exact={true} component={App}/>
                    <Route path='/home' exact={true} component={Home}/>
                    <Route path='/newTitle' exact={true} component={newTitle}/>
                </React.Suspense>
            </Switch>
        );
    }
}

export default RouterClass;
