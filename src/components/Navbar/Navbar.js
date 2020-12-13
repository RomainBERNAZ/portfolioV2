import React, { useRef, useEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import './Navbar.css'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {


    useEffect(() => {

        ScrollTrigger.create({
            trigger: ".bandeau",
            start: "top top",
            onEnter: () => gsap.to([".line-1", ".line-2", ".line-3"], {backgroundColor: "white", overwrite: 'auto'}),
            onLeaveBack: () => gsap.to([".line-1", ".line-2", ".line-3"], {backgroundColor: "black", overwrite: 'auto'})})
    })


    const closeMenu = () => {
         //Affichage des catégories de menu
         gsap.to('.line-one',{
            delay:0.3,
            duration:1,
            x:0,
            ease:Power2.out,
            opacity:0
        })
        gsap.to('.line-two',{
            delay:0.7,
            opacity:0,
            duration:1,
            x:0,
            ease:Power2.out,
    
        })
        gsap.to('.line-three',{
            opacity:0,
            delay:0.9,
            duration:1,
            x:0,
            ease:Power2.out,
    
        })
        gsap.to('.line-four',{
            opacity:0,
            delay:1.1,
            duration:1,
            x:0,
            ease:Power2.out,
    
        })
        gsap.to('.line-five',{
            opacity:0,
            delay:1.3,
            duration:1,
            x:0,
            ease:Power2.out,
    
        })

        setTimeout(() => {
            document.getElementById('line-one').style.display='none';
            document.getElementById('hamburger').style.display="inline-flex"
            
        // affichage du hambuger après fermeture du menu
        gsap.to('.line-1',{
            duration:1,
            y:0,
            ease:Power2.out,
            opacity:1
        })
        gsap.to('.line-2',{
            duration:1,
            y:0,
            ease:Power2.out,
            opacity:1
    
        })
        gsap.to('.line-3',{
            duration:1,
            y:0,
            ease:Power2.out,
            opacity:1
    
        })
    
        }, 1900)



    }

    const navbarDisplay =() => {
        document.getElementById('line-one').style.display="block"
        document.getElementById('line1').style.opacity="1"
        document.getElementById('line2').style.opacity="1"
        document.getElementById('line3').style.opacity="1"
        document.getElementById('line4').style.opacity="1"
        document.getElementById('line5').style.opacity="1"
    
        setTimeout(() => {
    
            document.getElementById('line-one').style.display="block"
    
        }, 500)
    
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
        gsap.from('.line-five',{
            opacity:0,
            delay:1.3,
            duration:1,
            x:-200,
            ease:Power2.out,
    
        })
    
    
      }




    return (

        <div>
         <div className="navbar">
            <div className="navbar-lines" id ="hamburger" onClick={navbarDisplay}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
         </div>
            <div className="navbar-menu" id="line-one" >
                <ul className="navbar-lines" id="line-menu" >
                    <a href="https://romain-bernaz-portfolio.herokuapp.com/photographs"><li id="line1" className="line-three">Photographs</li></a>
                    <a href="https://romain-bernaz-portfolio.herokuapp.com/about"><li id="line2" className="line-one">About me</li></a>
                    <a href="https://romain-bernaz-portfolio.herokuapp.com/#bandeau"><li id="line3" className="line-two">Projects</li></a>
                    <a href="https://romain-bernaz-portfolio.herokuapp.com/"><li id="line4" className="line-four">Home</li></a>
                    <li id="line5" className="line-five" onClick={closeMenu}><i  className="far fa-times-circle"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;


