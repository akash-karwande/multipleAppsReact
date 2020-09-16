import React, { Fragment , useEffect } from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import './Profile.css';

import profile from './profile.jpg'

function Profile() {

    useEffect(() => {
        document.title = 'Akash | Karwande'
    },[])
    return (
        <div>
            <Fragment>
                <div className='image-and-text'>
                    <div className="small">
                        <div className='name1'><span>I'm</span></div>
                        <div className='name2'><span>Akash</span></div>
                        <div className='name3'><span>Karwande</span></div>
                        <p><strong>Software developer</strong> at Palpx </p>
                        <p>Hands-On experience on developing a web application from scratch using Angular, Node js,
                        ReactJs, Redux, Material UI, MongoDB, HTML, CSS, javaScript, ES6, Typescript,
                        Bootstrap, Angular-material, AWS, Firebase, GCP.
                    </p>
                        <p className='social'><a rel="noopener noreferrer" target='_blank' href='https://github.com/akash-karwande'><FaGithub /></a>
                            <a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/akash-karwande/'><FaLinkedin /></a>
                            <a rel="noopener noreferrer" href='https://www.facebook.com/akash.karwande.03' target='_blank'><FaFacebook /></a>
                            <a rel="noopener noreferrer" href='https://twitter.com/akash_karwande' target='_blank'><FaTwitter /></a>
                            <a rel="noopener noreferrer" href='https://www.instagram.com/akash_karwande/' target='_blank'><FaInstagram /></a>
                        </p>
                    </div>
                    <div className='image'>
                        <img src={profile} alt='profile-pic' />
                    </div>
                </div>
            </Fragment>
        </div>
    )
}

export default Profile
