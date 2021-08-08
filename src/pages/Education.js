import React, { Component } from 'react'

import Layout from '../components/Layout';
import Structure from '../components/Structure';
import books from '../assets/images/iconos/books.svg';

export default class Education extends Component {
    render() {
        return (
            <Layout>
                <Structure icon={books} title="Educación">
                    educación

                    
                </Structure>
            </Layout>
        )
    }
}
