import React, { Component } from 'react';
import Typed from 'react-typed';

import Layout from '../components/Layout';
import Structure from '../components/Structure';
import perfil from '../assets/images/iconos/avatar.svg';


export default class Perfil extends Component {
    render() {
        return (
            <Layout>
                <Structure icon={perfil} title="Perfil">

                    
                    <Typed 
                        strings={[
                            `
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore laboriosam rerum molestiae similique, eveniet nam repudiandae accusamus eligendi quasi. Repellat excepturi ab tempore consequatur necessitatibus eligendi enim mollitia nisi!</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore laboriosam rerum molestiae similique, eveniet nam repudiandae accusamus eligendi quasi. Repellat excepturi ab tempore consequatur necessitatibus eligendi enim mollitia nisi!</p>
                            `
                        ]} 
                        typeSpeed={7}
                        contentType={'html'}
                        showCursor={false}
                        loop={false}
                    /> 
                    
        

                </Structure>
            </Layout>
        )
    }
}
