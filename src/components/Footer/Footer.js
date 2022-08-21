import React from 'react'
import './Footer.css'
import { 
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaFax,
    FaEnvelope,
    FaGlobe,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id = 'footer'>
            <div className ='container footer'>
                <div className = 'footer-box'>
                    <h4>Useful Links</h4>
                    <div className = 'footer-links'>
                       <a href = '#'>Support</a>
                       <a href = '#'>About</a>
                       <a href = '#'>Learn</a>
                       <a href = '#'>Hosting</a>
                       <a href = '#'>Messenger</a>
                        </div>
                </div>

                <div className = 'footer-box'>
                <h4>Support</h4>
                    <div className = 'footer-links'>
                       <a href = '#'>Support</a>
                       <a href = '#'>About</a>
                       <a href = '#'>Learn</a>
                       <a href = '#'>Hosting</a>
                       <a href = '#'>Messenger</a>
                        </div>
                </div>

                <div className = 'footer-box'>
                <h4>Contact US</h4>
                <div className ='footer-contact'>
                    <p>
                        <FaMapMarkerAlt/>  Address: Nigeria
                    </p>

                     <p>
                        <FaPhoneAlt/>  Phone: 08130003432
                    </p>

                     <p>
                        <FaFax/>  Fax: 55465
                    </p>

                     <p>
                        <FaEnvelope/> ; Email: coachemmyb@gmail.com
                    </p>

                     <p>
                        <FaGlobe/>  Website: www.coachemmyb.com
                    </p>
                
                </div>
                    
                </div>
                

            </div>
        </footer>
    )
}

export default Footer
