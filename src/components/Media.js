import React from 'react'

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
            <img src={github} alt="github" className="icon-github"/>
            <img src={linkedin} alt="linkedin" className="icon-linkedin"/>
            <img src={twitter} alt="twitter" className="icon-twitter"/>
            <img src={phone} alt="phone" className="icon-phone"/>
            <img src={wsp} alt="wsp" className="icon-wsp"/>
            <img src={mail} alt="mail" className="icon-mail"/>
        </div>
    )
}
