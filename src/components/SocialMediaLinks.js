import React from 'react';
import './SocialMediaLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
  
export default function SocialMediaLinks() {
    return (
        <div className="social-media">
            <ul id="social-media-links">                  
                <li>
                    <a href="https://www.facebook.com/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/" 
                       target="_blank"><FontAwesomeIcon 
                       icon={faTwitter} />
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/" 
                       target="_blank"><FontAwesomeIcon 
                       icon={faLinkedin} />
                    </a>
                </li>
            </ul>
            <h4>Don't have an account ? Sign up now!</h4>
        </div>
    )
}
