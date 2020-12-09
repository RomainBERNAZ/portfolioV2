import React, { useRef, useEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import './Navbar.css'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

    const navbarDisplay =() => {
        document.getElementById('line-one').style.display="block"
    
    
        setTimeout(() => {
    
            document.getElementById('line-one').style.display="block"
    
        }, 500)
    
        console.log('test')
        gsap.to('.line-1',{
            duration:1,
            y:-50,
            ease:Power2.out,
            opacity:0
        })
        gsap.to('.line-2',{
            duration:1,
            y:50,
            ease:Power2.out,
            opacity:0
    
        })
        gsap.to('.line-3',{
            duration:1,
            y:-50,
            ease:Power2.out,
            opacity:0
    
        })
    
        //Affichage des catégories de menu
        gsap.from('.line-one',{
            delay:0.3,
            duration:1,
            x:-200,
            ease:Power2.out,
            opacity:0
        })
        gsap.from('.line-two',{
            delay:0.7,
            opacity:0,
            duration:1,
            x:-200,
            ease:Power2.out,
    
        })
        gsap.from('.line-three',{
            opacity:0,
            delay:0.9,
            duration:1,
            x:-200,
            ease:Power2.out,
    
        })
        gsap.from('.line-four',{
            opacity:0,
            delay:1.1,
            duration:1,
            x:-200,
            ease:Power2.out,
    
        })
    
    
      }




    return (

        <div>
         <div className="navbar">
            <div className="navbar-lines" onClick={navbarDisplay}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
         </div>
            <div className="navbar-menu" id="line-one" >
                <ul className="navbar-lines" >
                    <a href="https://romain-bernaz-portfolio.herokuapp.com/photographs"><li  className="line-three">Photographs</li></a>
                    <li className="line-one">About me</li>
                    <a href="#bandeau"><li className="line-two">Projects</li></a>
                    <a href="https://romain-bernaz-portfolio.herokuapp.com/"><li className="line-four">Home</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;


