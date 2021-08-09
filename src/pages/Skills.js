import React, { Component } from 'react'
import './styles/skills.css';

import Layout from '../components/Layout';
import Structure from '../components/Structure';
import pencil from '../assets/images/iconos/pencil.svg';

import skillsData from '../data/skillsData.js';

export default class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleState: 1,
            data: skillsData

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

        return (
            <Layout>
                <Structure icon={pencil} title="Habilidades tecnicas">
                    <div className="skills">

                        <div className="skills_details">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, consequuntur recusandae quaerat, cumque hic quia</p>
                        </div>
                        
                        <div className="skills_tabbs">
                            <div className="button-tabs">
                                {
                                    data.map(element => {
                                        return(
                                            <button
                                                key={element.id}
                                                className={toggle === element.id ? "tabs active-tabs" : "tabs"}
                                                onClick={() => this.toggleTab(element.id)}
                                            >{element.title}
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
                                                <h3>{element.title}</h3>
                                                <p>{element.description}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Structure>
            </Layout>
        )
    }
}




