import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import './styles/menu.css'

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li>
                        <NavLink 
                            exact 
                            to="/acerca_de_mi" 
                            activeClassName="menu-active" 
                            >.{'\\>'} Perfil
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            exact 
                            to="/habilidades" 
                            activeClassName="menu-active" 
                            >.{'\\>'} Habilidades
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            exact 
                            to="/proyectos" 
                            activeClassName="menu-active" 
                            >.{'\\>'} Proyectos
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            exact 
                            to="/experiencia" 
                            activeClassName="menu-active" 
                            >.{'\\>'} Experiencia
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            exact 
                            to="/educacion" 
                            activeClassName="menu-active" 
                            >.{'\\>'} Educación
                        </NavLink>
                    </li>


                    
                </ul>
            </div>
        )
    }
}


