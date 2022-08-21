import React from 'react'
import './Download.css'
import { FaApple, FaWindows } from 'react-icons/fa';
import { GrAndroid } from 'react-icons/gr';
import { IconContext } from 'react-icons';



const Download = () => {
    return (
        <section id='download'>
            <div className='container download'>
                <h2> FirstX Messenfer Download</h2>
                <p>Our aps are available on all stores</p>

                <IconContext.Provider value = '{size =30}'>
                <div className='download-icons' data-aos = 'fade-left'>
                    <div className='download-icon'><GrAndroid/>  <p> Android</p></div>
                    <div className='download-icon'> <FaWindows/> <p> Windows</p></div>
                    <div className='download-icon'><FaApple/> <p> ioS</p></div>
                   
                </div>
                </IconContext.Provider>
                
                </div>
        </section>
    )
}

export default Download
