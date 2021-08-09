import React, { Component } from 'react';

import Layout from '../components/Layout';
import Structure from '../components/Structure';
import perfil from '../assets/images/iconos/avatar.svg';

import './styles/perfil.css';

export default class Perfil extends Component {
    render() {
        return (
            <Layout>
                <Structure icon={perfil} title="Acerca de mi">

                    <div className="profile">

                        <div className="description_profile">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore laboriosam rerum molestiae similique, eveniet nam repudiandae accusamus eligendi quasi. Repellat excepturi ab tempore consequatur necessitatibus eligendi enim mollitia nisi!</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore laboriosam rerum molestiae similique, eveniet nam repudiandae accusamus eligendi quasi. Repellat excepturi ab tempore consequatur necessitatibus eligendi enim mollitia nisi!</p>
                        </div>

                        <div className="soft_skills list-icon">
                            <ul>
                                <li>ipsum dolor</li>
                                <li>ipsum dolor ssitit</li>
                                <li>ipsum dol</li>
                                <li>ipsum</li>
                            </ul>
                        </div>
                        
                    </div>

                </Structure>
            </Layout>
        )
    }
}
