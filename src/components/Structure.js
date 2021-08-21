import React, { Component } from 'react'
import { motion } from 'framer-motion';

import './styles/structure.css';
import Media from './Media'
import Menu from './Menu'

import menuIcon from '../assets/images/iconos/menu.svg'
import closeIcon from '../assets/images/iconos/close.svg'

export default class Structure extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggle_menu: false
        }
    }
    
    toggle_menu = () => {
        this.setState({
            toggle_menu: !this.state.toggle_menu
        })
    }

    render() {
        return (
            <div className="structure">
                <div className="button-menu">
                    <button onClick={this.toggle_menu}>
                        <img src={this.state.toggle_menu ? closeIcon : menuIcon} alt="" />
                    </button>
                </div>
                {/* <div className="stt_1">111</div> */}
                <div className="stt_title">
                    <img src={this.props.icon} alt="" />
                    <h2> {this.props.title}</h2>
                </div>
                {/* <div className="stt_3">333</div> */}
                <div 
                    className={this.state.toggle_menu ? 'stt_menu show_menu' : 'stt_menu close_menu'}
                >
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



