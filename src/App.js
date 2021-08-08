import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/fuentes/fuentes.css';
import './assets/styles/lines.css';
import './assets/styles/bootstrap_reboot.css'
import './assets/styles/App.css';

import Home from './pages/Home';
import Perfil from './pages/Perfil'
import Skills from './pages/Skills'
import Education from './pages/Education'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/acerca_de_mi' component={Perfil} />
                <Route exact path='/habilidades' component={Skills} />
                <Route exact path='/educacion' component={Education} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;




