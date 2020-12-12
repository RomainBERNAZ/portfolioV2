import React, { useRef, useEffect } from 'react';
import { gsap, Power4, TimelineLite  } from 'gsap';
//import photo from '../../images/principale.png'
// import resume from '../../images/ROMAIN-BERNAZ.pdf'
import './About.css';



const About = () => {

    var blackStart = useRef(null);


    useEffect(() =>{
    var mql = window.matchMedia('(max-width: 600px)');

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
    })

    return (
        <div className="container-about">
            <div ref={el => {blackStart = el}} id="blackStart" className="black-start">
            <h2>
                <div className="line">
                    <span>Let's talk.</span>
                </div>
            </h2>
            </div>
    <div className="div-about">
        <div className="main-title">
            <h3><span>A</span>BOUT ME</h3>
        </div> 
        <div className="presentation">
            <div className="text-presentation">
            <p className="pres">Hi, I'm Romain. Almost 30 years old. <br/>
           I'm a Junior Web developer looking for opportunities. <br/>
           I graduated from ENI école informatique last year. <br/>
           Study contrat would be perfect. A normal job is fine as well. <br/>
        </p>
        <p className="liste">
            Non-exhaustive list of languages and librairy that I work with: <br/>
            <ul>
                <li>- JavaScript x React</li>
                <li>- HTML5</li>
                <li>- CSS3</li>
                <li>- JAVA</li>
                <li>- NODEJS</li>

            </ul>
            You can find my resume  <a class="resume" target="_blank" >here</a>
                
        </p>
        <p className="contact">
            I sometimes stream on Twitch when I work, come say hi ! 
               <a target="_blank" href="https://www.twitch.tv/thxoldsport"><i  className="fas fa-arrow-right"></i></a>  <br/>
            
            Or you can send me an e-mail : 
                bernazromain@gmail.com  
        </p>

            </div>
       <div className="image-presentation">
        {/**<img src={photo} alt=""/> */} 
       </div>
        
        </div>           
        </div>
        </div>
    )
}

export default About;