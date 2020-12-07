import React, { useRef, useEffect, useState } from 'react';
import { gsap, Power4, TimelineLite } from 'gsap';
import london from '../../images/photographs/london.jpg'
import bridge from '../../images/photographs/pont.jpg'
import shop from '../../images/photographs/shop.jpg'
import jude from '../../images/photographs/judstreet.jpg'


import './Photographs.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


const Photographs = () => {

   
    var blackStart = useRef(null);

    useEffect(() =>{

        var mql = window.matchMedia('(max-width: 600px)');

        
        //Animation de la div noire au démarrage de la page.
        gsap.to(blackStart, {
            duration: 1.3,
            delay:5.8,
            x:2600,
            ease: Power4.in
        })


        // Animation du titre au démarrage de la page.
        var tl = new TimelineLite();

        tl.from(".line span",{
            duration:2.5,
            y:150,
            ease:"power4.out",
            delay:1,
            skewY:3,
            stagger: {
               amount: 1
            }
        })
        tl.to(".line span",{
            duration:3.5,
            y:-250,
            ease:"power4.out",
            delay:1.2,
            skewY:-3,
            stagger: {
               amount: 1
            }
        })

        //Vérification pour la taille de l'écran. Mobile first.
        if (mql.matches) {
        gsap.from('.londonCity',{
            scrollTrigger : {
                trigger : '.photograph-text',
                start :'top center',
                end: "+=800px",
                scrub: true

            },
            x:-400
        })
        gsap.from('.londonBridge',{
            scrollTrigger : {
                trigger : '.london',
                start :'top bottom',
                end: "+=1000px",
                scrub: true

            },
            x:700
        })
        gsap.from('.londonShop',{
            scrollTrigger : {
                trigger : '.bridge',
                start :'top center',
                end: "+=700px",
                scrub: true

            },
            x:-400
        })
        gsap.from('.judStreet',{
            scrollTrigger : {
                trigger : '.shop',
                start :'top bottom',
                end: "+=700px",
                scrub: true

            },
            x:600
        })
    }else {
        gsap.from('.londonCity',{
            scrollTrigger : {
                trigger : '.photograph-text',
                start :'top center',
                end: "+=1500px",
                scrub: true

            },
            x:-500
        })
        gsap.from('.londonBridge',{
            scrollTrigger : {
                trigger : '.london',
                start :'top bottom',
                end: "+=3000px",
                scrub: true

            },
            x:700
        })
        gsap.from('.londonShop',{
            scrollTrigger : {
                trigger : '.bridge',
                start :'top center',
                end: "+=2000px",
                scrub: true

            },
            x:-700
        })
        gsap.from('.judStreet',{
            scrollTrigger : {
                trigger : '.shop',
                start :'top bottom',
                end: "+=3000px",
                scrub: true

            },
            x:600
        })

    }

        //Changement de couleur du background 
        ScrollTrigger.create({
            trigger: ".photograph-text",
            start: "bottom top",
            onEnter: () => gsap.to(".container-photograph", {backgroundColor: "black", overwrite: 'auto'}),
            onLeaveBack: () => gsap.to(".container-photograph", {backgroundColor: "#A49C9B", overwrite: 'auto'})})

        ScrollTrigger.create({
            trigger: ".jude",
            start: "top top",
            onEnter: () => gsap.to(".container-photograph", {backgroundColor: "#A49C9B", overwrite: 'auto'}),
            onLeaveBack: () => gsap.to(".container-photograph", {backgroundColor: "black", overwrite: 'auto'})})




    },[])

    return (
        <div className="container-photograph">
            <div ref={el => {blackStart = el}} id="blackStart" className="black-start">
            <h2>
                <div className="line">
                    <span>Hello again.</span>
                </div>
            </h2>
            </div>
        <div className="main-title">
            <h3><span>P</span>HOTOGRAPHS</h3>
        </div>

        <div className="photograph-text-intro">
            <p className="photograph-text">
                Photographe amateur depuis plusieurs années. <br/>
                Les clichés suivants ont été pris avec un Canon 600D. <br/>
                Plutôt orienté nature brute et architecture. <br/>
                Il m'arrive néanmoins de photographier des moments de vie.
            </p>
        </div>

        <div className="photographs">
            <div className="londonCity">
                <img className="london" src={london} alt=""/>
                <p>Londres, La City</p>
            </div>
            
            <div className="londonBridge">
                <img className="bridge" src={bridge} alt=""/>
                <p>Londres, Southwark Bridge</p>
            </div>
            
            <div className="londonShop">
                <img className="shop" src={shop} alt=""/>
                <p>Londres, Boutique à Shoreditch</p>
            </div>

            <div className="judStreet">
                <img className="jude" src={jude} alt=""/>
                <p>Londres, Rue inconnue.</p>
            </div>

            <div className="titre-divers">
                <h3>DIVER<span>S</span></h3>
            </div>

            <div className="photographs-divers">
            

            </div>

        </div>


        </div>
    )
}

export default Photographs;