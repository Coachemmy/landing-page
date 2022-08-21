import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className ='container navbar'>
        <p className ='logo-text' > 
        first <span>X</span>
        </p>

        <menu>
            <ul className ='nav-list'>
                <li><a href='#'>Home</a></li>
                <li><a href='#features'>Features</a></li>
                <li><a href='#download'>Download</a></li>
                <li><a href='#subscribe'>Subscribe</a></li>
                <li><a href='#faq' className ='btn'>Get Started</a></li>
            </ul>
        </menu>
        
            

        

            
        </nav>
    )
}

export default Navbar
