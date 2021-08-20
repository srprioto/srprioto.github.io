import React, { Component } from 'react'
import './styles/projects.css';

import Layout from '../components/Layout';
import Structure from '../components/Structure';
import MouseScroll from '../components/MouseScroll';
import ProyectsItem from '../components/ProjectsItem';
import projectsData from '../data/projectsData';

import gear from '../assets/images/iconos/gear.svg';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: projectsData
        }
    }

    render() {

        return (
            <Layout>
                <Structure icon={gear} title="Mis projectos">

                    <ProyectsItem data={this.state.data} />

                    <MouseScroll />

                </Structure>
            </Layout>
        )
    }
}
