import React, { Fragment , useEffect } from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaFile } from "react-icons/fa";

import './Profile.css';

import profile from './profile.jpg'
// import profile from './profile2.jpg'

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
                        <p><strong>Software developer II</strong> at <a className='company' href="http://oracle.com" target="_blank" rel="noopener noreferrer">Oracle</a> </p>
                        <p>Development of a web application from scratch utilising Angular, Ojet, ReactJs, KnockoutJs, Redux, JavaScript, Angular-material, AWS, Firebase, and GCP.
                    </p> <br />
                    <p>Work on Oracle banking software is ongoing.</p>
                        <p className='social'>
                            <a rel="noopener noreferrer" target='_blank' href='https://drive.google.com/file/d/1KuQ7d18ivTbJaDII7bUveOqfgStTz3nc/view?usp=sharing'><FaFile /></a>
                            <a rel="noopener noreferrer" target='_blank' href='https://github.com/akash-karwande'><FaGithub /></a>
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
