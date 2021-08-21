import React from 'react'
import { motion } from 'framer-motion'
import Typed from 'react-typed';

import './styles/console.css';

export default function Console() {
    return (

        <div className="linux_desktop">
            <motion.div 
                className="console"
                drag
                dragMomentum={false}
            >
                <div className="scrollbar-top">
                    <div className="scrollbar-boton1 scrollbar-boton"/>
                    <div className="scrollbar-boton"/>
                    <div className="scrollbar-boton"/>
                </div>

                <div className="text-console">
                    
                    <Typed
                        strings={[
                            `
                            <h5> </h5>
                            <h5> </h5>
                            <h5> </h5>
                            <h5>>_ </h5>
                            <h5>>_   Bienvenid@ a mi web!! </h5>
                            <h5>>_ </h5>
                            <h5>>_       ( ( </h5>
                            <h5>>_        ) ) </h5>
                            <h5>>_      ........ </h5>
                            <h5>>_      |      |] </h5>
                            <h5>>_      \\      /</h5>
                            <h5>>_       \\____/</h5>
                            <h5>>_ </h5>

                            `
                        ]}
                        cursorChar="_"
                        typeSpeed={10}
                        contentType="html"
                        
                    />

                    
                </div>

            </motion.div>
        </div>
    )
}
