import React, { Component } from 'react';
import './styles/education.css';

import Layout from '../components/Layout';
import Structure from '../components/Structure';
import books from '../assets/images/iconos/books.svg';
import educData from '../data/educData';

import Tabs from '../components/Tabs';

export default class Education extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: educData
        }
    }
    
    render() {

        const data = this.state.data;

        return (
            <Layout>
                <Structure icon={books} title="Educación">

                    <div className="education-description">
                        <p>Con el fin de alcanzar mejores resultados, intento capacitarme constantemente, estas son algunas de las instituciones y plataformas en las que me eduqué:</p>
                    </div>

                    <Tabs data={data} />

                </Structure>
            </Layout>
        )
    }
}
