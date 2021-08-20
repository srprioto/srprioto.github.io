import React, { Component } from 'react'
import './styles/skills.css';

import Layout from '../components/Layout';
import Structure from '../components/Structure';
import Tabs from '../components/Tabs';
import pencil from '../assets/images/iconos/pencil.svg';

import skillsData from '../data/skillsData.js';

export default class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: skillsData
        }
    }

    render() {

        const data = this.state.data;

        return (
            <Layout>
                <Structure icon={pencil} title="Habilidades tecnicas">
                    <div className="skills">

                        <div className="skills_details">
                            <p>Estas son algunas de las habilidades técnicas que he desarrollado trabajando y aprendiendo</p>
                        </div>

                        <Tabs data={data} />

                    </div>
                </Structure>
            </Layout>
        )
    }
}




