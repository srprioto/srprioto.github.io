import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
// import Typed from 'react-typed';

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
                        {/* <Typed strings={['./> Perfil']} typeSpeed={50}/>  */}
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
                            to="/educacion" 
                            activeClassName="menu-active" 
                            >.{'\\>'} Educación
                        </NavLink>
                    </li>

                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}


