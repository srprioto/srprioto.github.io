import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './assets/fuentes/fuentes.css';
import './assets/styles/lines.css';
import './assets/styles/bootstrap_reboot.css'
import './assets/styles/App.css';

import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Popo from './pages/Popo.js';

function App() {

    return (
        <BrowserRouter>
            <AnimatePresence>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/acerca_de_mi' component={Perfil} />
                    <Route exact path='/habilidades' component={Skills} />
                    <Route exact path='/educacion' component={Education} />
                    <Route exact path='/experiencia' component={Experience} />
                    <Route exact path='/proyectos' component={Projects} />
                    <Route exact path='/login' component={Popo} />
                    <Route exact path='/wp-admin' component={Popo} />
                    <Route path="/404" component={NotFound} />
                    <Redirect from="*" to="/404" />
                </Switch>
            </AnimatePresence>
        </BrowserRouter>
    );
}

export default App;




