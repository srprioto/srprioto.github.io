import React from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

import './styles/popo.css';
import Iconpopo from '../assets/images/iconos/popo.svg';

export default function Popo() {

    console.log();

    return (
        <div className="poop">
            <div className="poop-box">
                
                <motion.img 
                    drag
                    dragMomentum={false}
                    src={Iconpopo} 
                    alt="popo" 
                />

                <h4>No hay {window.location.pathname === "/wp-admin" ? "WordPress" : "nada"} por aqui</h4>

                <Link to="/" className="backHome">{"<"} Ir al Home</Link>

            </div>
        </div>
    )
}


