import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import './styles/home.css'

import Layout from '../components/Layout';
import Console from '../components/Console';

import github from '../assets/images/contacto/github.svg';
import linkedin from '../assets/images/contacto/linkedin.svg';
// import twitter from '../assets/images/contacto/twitter.svg';
import phone from '../assets/images/contacto/phone.svg';
import wsp from '../assets/images/contacto/wsp.svg';
import mail from '../assets/images/contacto/mail.svg';
import click from '../assets/images/iconos/cursor.svg';
import downloadcv from '../assets/images/iconos/download.svg';

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

                                    <Link to="/github" target="_blank">
                                        <img src={github} alt="github" className="icon-github"/>
                                    </Link>

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
                                                        'Desarrollador Full Stack',
                                                        'Freelancer',
                                                        'Desarrollador de Software'
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
                                <div className="box3">
                                    <Console />
                                </div>
                                <div className="box4 box-img-media">

                                    <Link to="/phone" target="_blank" className="iconHiddenPC">
                                        <img src={phone} alt="phone" className="icon-phone"/>
                                    </Link>

                                    <Link to="/wspweb" target="_blank"  className="iconHiddenMovil">
                                        <img src={wsp} alt="wsp" className="icon-wsp"/>
                                    </Link>

                                    <Link to="/wspmovil" target="_blank"  className="iconHiddenPC">
                                        <img src={wsp} alt="wsp" className="icon-wsp"/>
                                    </Link>

                                    <Link to="/mailto" target="_blank">
                                        <img src={mail} alt="mail" className="icon-mail"/>
                                    </Link>

                                </div>
                            </div>
                            <div className="show-me">
                                <Link to="/acerca_de_mi">Acerca de mí <img src={click} alt="Show me more"/></Link>
                                <Link to="/cv" target="_blank">
                                    Descargar CV 
                                    <img src={downloadcv} alt="download"/>
                                </Link>

                                {/* https://drive.google.com/file/d/1_w0AoCxYz6jXPwnI70WfwSCcfUUP51aB/view?usp=sharing */}

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
