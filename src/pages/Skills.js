import React, { Component } from 'react'

import Layout from '../components/Layout';
import Structure from '../components/Structure';
import pencil from '../assets/images/iconos/pencil.svg';

export default class Skills extends Component {
    render() {
        return (
            <Layout>
                <Structure icon={pencil} title="Habilidades">
                    habilidades

                    
                </Structure>
            </Layout>
        )
    }
}
