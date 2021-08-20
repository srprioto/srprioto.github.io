import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

import './styles/notfound.css';

export default function NotFound() {

    const transition = {
        duration: 1,
        ease: "easeInOut"
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: "1%" }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: "1%" }}
            transition={transition}
            className="not-found"
            drag
            dragMomentum={false}
        >
            <div className="box-not-found">

                <div className="box-404">
                    <h2>404</h2>
                </div>

                <Link to="/" className="backHome">{"<"} Ir al Home</Link>
            </div>
        </motion.div>
    )
}
