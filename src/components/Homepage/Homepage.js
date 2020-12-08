import React, { useRef, useEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import './Homepage.css';



const Homepage = () => {

  let webDev = useRef(null);
  let design = useRef(null);
  let city = useRef(null);


  //Affichage du titre, de la ville au démarrage du site
  useEffect(() => {
    gsap.from(webDev, {
        opacity: 0,
        y: 70,
        duration: 2.5,
        delay: 1.5,
        ease: Power2.easeOut,
        stagger: {
            amount: 0.4}
    })
    gsap.from(design, {
        opacity: 0,
        y: 70,
        duration: 2.5,
        delay: 2.3,
        ease: Power2.easeOut,
        stagger: {
            amount: 0.4}
    })
    gsap.from(city, {
        opacity: 0,
        y: 70,
        duration: 2.5,
        delay: 3.1,
        ease: Power2.easeOut,
        stagger: {
            amount: 0.4}
    })

    }
  )


    return (
        <div className="menu">
            
        <div className="name">
            <h2 className="surname"> <span className="firstLetter">R</span>OMAIN</h2>
            <h2 className="lastname">BERNA<span className="firstLetter">Z</span></h2>
        </div>


        <div className="title">
            <h3 ref={el => {webDev = el}} id="webDev" className="webDev">WEB DEVELOPER </h3>
            <h3 ref={el => {design = el}} id="design" className="design">DESIGN ENTHOUSIAST </h3>
            <h4 ref={el => {city = el}} id="city" className="city">NANTES FR</h4>
        </div>
        <script src="./Homepage.js"></script>
    </div>
    )
}

export default Homepage;