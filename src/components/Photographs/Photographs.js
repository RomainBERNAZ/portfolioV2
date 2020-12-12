import React, { useRef, useEffect, useState } from 'react';
import { gsap, Power4, TimelineLite } from 'gsap';
import array from './images'


import './Photographs.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


const Photographs = () => {
    const arrayPhoto = array.adata.initialdata;
    const [srcImage, setSrcImage] = useState(null); 
    var blackStart = useRef(null);

    useEffect(() =>{
        var mql = window.matchMedia('(max-width: 600px)');
        
        if (mql.matches) {
            //Animation de la div noire au démarrage de la page.Mobile first
            gsap.to(blackStart, {
                duration: 1.3,
                delay:5.8,
                x:600,
                ease: Power4.in
            })}else{
                gsap.to(blackStart, {
                    duration: 1.3,
                    delay:5.8,
                    x:2600,
                    ease: Power4.in
                })
    
            }


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
                end: "+=500px",
                scrub: true

            },
            x:-400
        })
        gsap.from('.londonBridge',{
            scrollTrigger : {
                trigger : '.london',
                start :'top bottom',
                end: "+=600px",
                scrub: true

            },
            x:700
        })
        gsap.from('.londonShop',{
            scrollTrigger : {
                trigger : '.bridge',
                start :'top bottom',
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
            trigger: ".titre-divers",
            start: "bottom bottom",
            onEnter: () => gsap.to(".container-photograph", {backgroundColor: "#A49C9B", overwrite: 'auto'}),
            onLeaveBack: () => gsap.to(".container-photograph", {backgroundColor: "black", overwrite: 'auto'})})

    },[])
    
    const closeModal = () => {
        let modal = document.getElementById('modal-image');
        modal.style.display="none"; 
    }

    const resize = (e) => {
        let modal = document.getElementById('modal-image');

        console.log(modal)
        modal.style.display="block"; 
        let image = document.getElementById(e.target.id);
        let imagesrc = image.src
        setSrcImage(imagesrc)
        console.log(imagesrc)
     //   image.style.cssText = 'object-fit: none; width: 50vw; height: auto; position:absolute; z-index: 10;'


    }


    return (
        <div className="container-photograph">
            <div ref={el => {blackStart = el}} id="blackStart" className="black-start">
            <h2>
                <div className="line">
                    <span>Hello again.</span>
                </div>
            </h2>
            </div>
            <div className="div-photo">
         
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
    {/* <img className="london" src={require ('../../images/photographs/london.jpg').default} alt=""/>*/}           
                <p>Londres, La City</p>
            </div>
            <div className="londonBridge">
      {/*  <img className="bridge" src={require ('../../images/photographs/pont.jpg').default} alt=""/>*/}           
                <p>Londres, Southwark Bridge</p>
            </div>
            <div className="londonShop">
     {/*   <img className="shop" src={require ('../../images/photographs/shop.jpg').default} alt=""/>*/}           
                <p>Londres, Boutique à Shoreditch</p>
            </div>
            <div className="judStreet">
         {/*<img className="jude" src={ require ('../../images/photographs/judstreet.jpg').default} alt=""/> */}         
                <p>Londres, Rue inconnue.</p>
            </div>

            <div className="titre-divers">
                <h3>DIVER<span>S</span></h3>
            </div>

            <div className="photographs-divers">
                {arrayPhoto.map((photo) =>
                    <img onClick={resize} key={photo.key} id={photo.key} src={ require (`../../images/photographs/${photo.image}.jpg`).default} alt=""/>
                 )}
            </div>
        </div>
         
        </div>
        <div className="modal-image" id='modal-image' onClick={closeModal}>
                <img src={srcImage} alt=""/>
            </div>
        </div>
    )
}

export default Photographs;