import React from 'react'
import './Subscribe.css'
import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti'

const Subscribe = () => {
    return (
        <section id = 'subscribe'>
         <div className='container subscribe'>
                <h2>Subscribe Now</h2>
                <form>
                    <div className = 'forrm-control'>
                    <input type = 'email'  placeholder ='Enter your email...'/>
                    <button>Subscribe</button>
                    </div>
                </form>

            <div className = 'social-icons' data-aos = 'fade-down'>
                 <div className = 'social-icon'> <TiSocialGooglePlus/> </div>
                 <div className = 'social-icon'><FaFacebookF/> </div>
                 <div className = 'social-icon'> <FaTwitter/> </div>
                 <div className = 'social-icon'> <FaInstagram/> </div>
            </div>
           
        </div>
            
        </section>
    )
}

export default Subscribe
