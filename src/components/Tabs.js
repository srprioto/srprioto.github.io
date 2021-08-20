import React, { Component } from 'react';

import './styles/tabs.css';

export default class Tabs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleState: 1,
            data: this.props.data
        }
    }

    toggleTab = (index) => { 
        this.setState({
            toggleState: index
        })
    }

    render() {

        const toggle = this.state.toggleState;
        const data = this.state.data;

        const images = (img) => {
            if (img) {
                return (
                    <img src={`./public_assets/logos/${img}`} alt={img} />
                );
            }
        }

        return (
            <div className="tabbs">
            
                <div className="button-tabs">
                    {
                        data.map(element => {
                            return(
                                <button
                                    key={element.id}
                                    className={toggle === element.id ? "tabs active-tabs" : "tabs"}
                                    onClick={() => this.toggleTab(element.id)}
                                >{element.tab ? element.tab : element.title}
                                </button>
                            );
                            
                        })
                    }
                </div>
                <div className="descrip-tabs">
                    {
                        data.map(element => {
                            return(
                                <div 
                                    key={element.id}
                                    className={toggle === element.id ? "descrip  active-descrip" : "descrip"} >

                                    {element.logo ? images(element.logo) : <h3>{element.title}</h3>}

                                    <div>{element.description}</div>

                                </div>
                            );
                        })
                    }
                </div>

            </div>
        )
    }
}
