import React, { Component } from 'react'
import './styles/structure.css';
import Media from './Media'
import Menu from './Menu'



export default class Structure extends Component {
    render() {
        return (
            <div class="structure">
                {/* <div class="stt_1">111</div> */}
                <div class="stt_title">
                    <img src={this.props.icon} alt="" />
                    <h2> {this.props.title}</h2>
                </div>
                {/* <div class="stt_3">333</div> */}
                <div class="stt_menu">
                    <Menu />
                </div>
                <div class="stt_info">
                    {this.props.children}
                </div>
                <div class="stt_media">
                    <Media />
                </div>
            </div>
        );
    }
}
