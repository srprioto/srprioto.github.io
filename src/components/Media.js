import React from 'react'
import { Link } from 'react-router-dom'

import './styles/media.css';

import github from '../assets/images/contacto/github.svg';
import linkedin from '../assets/images/contacto/linkedin.svg';
// import twitter from '../assets/images/contacto/twitter.svg';
import phone from '../assets/images/contacto/phone.svg';
import wsp from '../assets/images/contacto/wsp.svg';
import mail from '../assets/images/contacto/mail.svg';


export default function Media(props) {
    return (
        <div className="component-media">


            {/* <Link to="/" >
                <img src={twitter} alt="twitter" className="icon-twitter"/>
            </Link> */}


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

            <a href="https://github.com/srprioto" target="_blank">
                <img src={github} alt="github" className="icon-github"/>
            </a>

            <Link to="/" >
                <img src={linkedin} alt="linkedin" className="icon-linkedin"/>
            </Link>

            
        </div>
    )
}
