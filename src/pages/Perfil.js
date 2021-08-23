import React, { Component } from 'react';

import Layout from '../components/Layout';
import Structure from '../components/Structure';
import perfil from '../assets/images/iconos/avatar.svg';
import MouseScroll from '../components/MouseScroll';

import './styles/perfil.css';

export default class Perfil extends Component {
    render() {
        return (
            <Layout>
                <Structure icon={perfil} title="Acerca de mi">

                    <div className="profile scroll cutout">

                        <div className="description_profile">
                            <p>
                                ¡Hola! Mi nombre es Renato y soy Desarrollador de Software especializado en crear soluciones digitales y productos para Internet.
                            </p>
                            <p>
                                Me ocupo de construir aplicaciones web únicas, rápidas y de fácil acceso, disponibles para todo tipo de dispositivos móviles y escritorio, que permitan una sencilla comunicación entre empresas y clientes.
                            </p>
                            <p>
                                Me gusta resolver problemas usando tecnología, automatizando procesos y trabajando en proyectos ambiciosos con gente positiva y brillante. 
                            </p>
                            <p>
                                Trabaje en empresas de desarrollo web, seguridad digital, y de forma independiente para diferentes sectores, como educación, turismo, etc.
                            </p>
                            <p>
                                Mantengo mi conocimiento constantemente actualizando, aprendiendo nuevas tecnologías de diferentes plataformas online y progresando persistentemente mientras afronto nuevas dificultades.
                            </p>
                            <p>He aquí algunas habilidades personales que intento mejorar:</p>
                        </div>

                        <div className="soft_skills list-icon">
                            <ul>
                                <li>Pensamiento lateral</li>
                                <li>Trabajo en equipo</li>
                                <li>Empatía</li>
                                <li>Iniciativa para relacionarme con el equipo</li>
                                <li>Propiedad colectiva</li>
                                <li>Atención a los detalles</li>
                                <li>Suficiencia para capacitar y enseñar</li>
                                <li>Pasión por la tecnología</li>
                            </ul>
                        </div>
                        
                    </div>

                    <MouseScroll />

                </Structure>
            </Layout>
        )
    }
}
