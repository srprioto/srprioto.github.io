import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './styles/Layout.css';

export default class Layout extends Component {
    render() {
        return (
            <div className="container">
                <div className="layout">
                    
                    <div className="main">
                        <div className="header">
                            <Link to="/"><h1>Prioto.<strong>github.io</strong></h1></Link>
                        </div>

                        <div className="body-app">
                            {this.props.children}
                        </div>
                    </div>

                    <div className="footer">
                        <h6>Designed & Built by Prioto.github.io // renatoluhe@gmail.com</h6>
                    </div>

                </div>
            </div>
        )
    }
}
