import React, { Component } from 'react'
import { motion } from 'framer-motion';

import './styles/structure.css';
import Media from './Media'
import Menu from './Menu'



export default class Structure extends Component {
    render() {
        return (
            <div className="structure">
                {/* <div className="stt_1">111</div> */}
                <div className="stt_title">
                    <img src={this.props.icon} alt="" />
                    <h2> {this.props.title}</h2>
                </div>
                {/* <div className="stt_3">333</div> */}
                <div className="stt_menu">
                    <Menu />
                </div>
                <motion.div 
                    className="stt_info"
                    initial={{ opacity: 0, y: "1%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "1%" }}
                >
                    {this.props.children}
                </motion.div>
                <div className="stt_media">
                    <Media />
                </div>
            </div>
        );
    }
}



