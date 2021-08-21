import React from 'react'
import { Link } from 'react-router-dom'

import './styles/media.css';

import github from '../assets/images/contacto/github.svg';
import linkedin from '../assets/images/contacto/linkedin.svg';
import twitter from '../assets/images/contacto/twitter.svg';
import phone from '../assets/images/contacto/phone.svg';
import wsp from '../assets/images/contacto/wsp.svg';
import mail from '../assets/images/contacto/mail.svg';


export default function Media(props) {
    return (
        <div className="component-media">



            {/* <Link to="/" >
                <img src={twitter} alt="twitter" className="icon-twitter"/>
            </Link> */}


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

            <Link to="/github" target="_blank">
                <img src={github} alt="github" className="icon-github"/>
            </Link>

            <Link to="/" >
                <img src={linkedin} alt="linkedin" className="icon-linkedin"/>
            </Link>

            
        </div>
    )
}
