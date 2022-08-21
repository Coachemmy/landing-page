import React, { useEffect } from 'react'
import Phoneheader from '../../assets/phone-header-bg.png';
import './Header.css'
import {BsMouse} from 'react-icons/bs';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, [])
    return (
        <section id= 'header'>
        <div className='container header'>
           <div className='left' data-aos = 'fade-right'>
             <h1>
                <span>EMMA GOT YOU </span>
                <span>BE PERSONATE ABOUT </span>
                <span>DREAM BIG AND DON'T </span>
            </h1>
            <p> Check it if it is working well and perfect 
                Check it if it is working well and perfect
                Check it if it is working well and perfect 
                Check it if it is working well and perfect</p>
           <div className=' blist'>
           <a href='#' className ='btn1'>View More</a>
           <a href='#' className ='btn2'>View More</a>
           </div>
           </div>

           <div className='right' data-aos = 'fade-left'>
            <img src={Phoneheader} alt='phone'/>
           </div>
           </div>

           <div className='floating-icon'>
            <a href='#feature'/>
            <BsMouse className='mouse' color='white' size={25} />
           
           </div>

          
        </section>
    )
}

export default Header
