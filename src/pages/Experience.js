import React, { Component } from 'react';

import Layout from '../components/Layout';
import Structure from '../components/Structure';
import Tabs from '../components/Tabs';
import expData from '../data/expData';

import experienceIcon from '../assets/images/iconos/experience.svg';

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: expData
        }
    }
    

    render() {

        return (
            <Layout>
                <Structure icon={experienceIcon} title="Experiencia laboral">
                    <div className="description-experience">
                        <p>Algunas de las empresas en las que he trabajado:</p>
                    </div>

                    <Tabs data={this.state.data} />

                </Structure>
            </Layout>
        );
    }
}

export default Experience;
