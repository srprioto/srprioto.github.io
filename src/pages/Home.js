import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import './styles/home.css';

import Layout from '../components/Layout';
import Console from '../components/Console';
import ConsoleMovil from '../components/ConsoleMovil'

import github from '../assets/images/contacto/github.svg';
import linkedin from '../assets/images/contacto/linkedin.svg';
// import twitter from '../assets/images/contacto/twitter.svg';
import phone from '../assets/images/contacto/phone.svg';
import wsp from '../assets/images/contacto/wsp.svg';
import mail from '../assets/images/contacto/mail.svg';
import click from '../assets/images/iconos/cursor.svg';
import downloadcv from '../assets/images/iconos/download.svg';
import cv from "../assets/docs/cv.pdf";


class Home extends Component {

    constructor(props) {
        super(props);
        this.transition = {
            duration: .5,
            delay: .5,
            ease: "easeInOut"
        }

        
    }

    render() {

        return (
            <motion.div
                initial={{ opacity: 0, y: "1%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "1%" }}
                duration={1}
                transition={this.transition}
            >
                <Layout>
                    <div className="home">
                        <div className="home-container">
                            <div className="main-home">
                                <div className="box1 box-img-media">

                                    <a href="https://github.com/srprioto" target="_blank">
                                        <img src={github} alt="github" className="icon-github"/>
                                    </a>

                                    <Link to="/" >
                                        <img src={linkedin} alt="linkedin" className="icon-linkedin"/>
                                    </Link>

                                    {/* <Link to="/" >
                                        <img src={twitter} alt="twitter" className="icon-twitter"/>
                                    </Link> */}

                                </div>
                                <div className="box2">
                                    <div className="box">
                                        <p>Hola, mi nombre es</p>
                                        <h2>Renato <strong>Luna</strong></h2>
                                        <h3>Soy{' '} 
                                            <strong>
                                                <Typed
                                                    strings={[
                                                        'Ingeniero de Sistemas',
                                                        'Desarrollador de Software',
                                                        'Desarrollador Full Stack',
                                                    ]}
                                                    typeSpeed={70}
                                                    backSpeed={40}
                                                    backDelay={1000}
                                                    // showCursor={false}
                                                    // smartBackspace={false}
                                                    loop 
                                                /> 
                                            </strong>
                                        </h3>
                                        <p>renatoluhe@gmail.com</p>
                                    </div>
                                </div>
                                <div className="box3 consoleDesktop">
                                    <Console />
                                </div>
                                <div className="box3 consoleResponsive">
                                    <ConsoleMovil />
                                </div>
                                <div className="box4 box-img-media">

                                    <a href="tel:+51984741614" target="_blank" className="iconHiddenPC">
                                        <img src={phone} alt="phone" className="icon-phone"/>
                                    </a>

                                    <a href="https://web.whatsapp.com/send?phone=+51984741614" target="_blank"  className="iconHiddenMovil">
                                        <img src={wsp} alt="wsp" className="icon-wsp"/>
                                    </a>

                                    <a href="https://api.whatsapp.com/send?phone=+51984741614" target="_blank"  className="iconHiddenPC">
                                        <img src={wsp} alt="wsp" className="icon-wsp"/>
                                    </a>

                                    <a href="mailto:renatoluhe@gmail.com" target="_blank">
                                        <img src={mail} alt="mail" className="icon-mail"/>
                                    </a>

                                </div>
                            </div>

                            <div className="show-me">

                                <Link to="/acerca_de_mi" className="showmore">
                                    Mas sobre mi
                                    <img src={click} alt="Show me more"/>
                                </Link>

                                {/* <a href="https://drive.google.com/file/d/1_w0AoCxYz6jXPwnI70WfwSCcfUUP51aB/view?usp=sharing" target="_blank">
                                    Descargar CV 
                                    <img src={downloadcv} alt="download"/>
                                </a> */}
                                <a href={cv} target="_blank">
                                    Descargar CV 
                                    <img src={downloadcv} alt="download"/>
                                </a>

                            </div>
                        </div>
                    </div>
                </Layout>
            </motion.div>
        );
    }
}

export default Home;


// import React from 'react'

// export default function Home() {
//     return (
//         <div>
            
//         </div>
//     )
// }
