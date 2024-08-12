import React from 'react';
import "./contact.scss";
import SouthWestIcon from '@mui/icons-material/SouthWest';
import HoverButton from '../../components/HoverButton/HoverButton';

function Contact() {

  return (
    <section id='contact' className='contact'>
        <div className="contact-container">
            <div className="contact-text">
                <div className="contact-heading">say Helloo...</div>
                <div className="icon"><SouthWestIcon fontSize='large'/></div>
            </div>
            <hr />
            <div className="contact-details">
                <HoverButton text="gouravpanchal1632@gmail.com"/>
                <HoverButton text="+91 94672 66486"/>
            </div>
        </div>
        <footer>
            <div className='copyright'>Copyright © {new Date().getFullYear()} Design & Coded with ❤️ by Gourav Kumar.</div>
            <div className="credit">"<a target='_blank' href="https://skfb.ly/oqAQL">The Buddha statue in a mountain</a>" by AshSkag is licensed under <a target='_blank' href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attributon</a>.</div>
            <div className="credit"></div>
            <div className='social'>
                  <a style={{textDecoration:'none',color:'white'}} href="https://www.linkedin.com/in/gourav-kumar-4230b7286/" target='_blank'><span>LinkedIn</span></a>
                  <a style={{textDecoration:'none',color:'white'}} href="https://www.instagram.com/gourav_kumar946/" target='_blank'><span>Instagram</span></a>
                  <a style={{textDecoration:'none',color:'white'}} href="https://github.com/Gourav1632" target='_blank'><span>Github</span></a>
            </div>
        </footer>
    </section>
  )
}

export default Contact
