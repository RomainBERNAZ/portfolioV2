import React, { useEffect} from 'react';
import { gsap} from 'gsap';
import './Projects.css';
import recipe from '../../images/recipe.png'
import weather from '../../images/weather.png'
import twitter from '../../images/twitter.png'
import fairmade from '../../images/fairmade.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


const Projects = () => {


    useEffect(() => {

        // Paramètre qui permet de vérifier si l'utilisateur est sur mobile. 
        var mql = window.matchMedia('(max-width: 600px)');
    
        if (mql.matches) {
      /* pour la version mobile */

      gsap.to(".fairmade",{
        scrollTrigger: {
            trigger :'.bandeau',
            start: 'top 10%',
            end : '+=3000px',
            scrub: true
        },
        y: 100 ,
        x: 100
    
    })
    gsap.to(".fairmadeSquare",{
        scrollTrigger: {
            trigger :'.bandeau',
            start: 'top 10%',
            end : '+=3000px',
            scrub: true
        },
        y: -100 ,
        x: -100
    
    })
    gsap.to(".twitter",{
        scrollTrigger: {
            trigger :'.twitterTitle',
            start: 'top center',
            end : '+=3000px',
            scrub: true
        },
        y: -100 ,
        x: -100
    
    })
    gsap.to(".twitterSquare",{
        scrollTrigger: {
            trigger :'.twitterTitle',
            start: 'top center',
            end : '+=3000px',
            scrub: true
        },
        y: 100 ,
        x: 100
    
    })
    gsap.to(".weather",{
        scrollTrigger: {
            trigger :'.weatherTitle',
            start: 'top center',
            end : '+=3000px',
            scrub: true
        },
        y: 100 ,
        x: 100
    
    })
    gsap.to(".weatherSquare",{
        scrollTrigger: {
            trigger :'.weatherTitle',
            start: 'top center',
            end : '+=3000px',
            scrub: true
        },
        y: -100 ,
        x: -100
    
    })
    gsap.to(".recipe",{
        scrollTrigger: {
            trigger :'.recipeTitle',
            start: 'top center',
            end : '+=3000px',
            scrub: true
        },
        y: -100 ,
        x: -100
    
    })
    gsap.to(".recipeSquare",{
        scrollTrigger: {
            trigger :'.recipeTitle',
            start: 'top center',
            end : '+=3000px',
            scrub: true
        },
        y: 100 ,
        x: 100
    
    })


    } else {
      /* pour la version desktop */

      gsap.to(".fairmade",{
        scrollTrigger: {
            trigger :'.bandeau',
            start: 'top 10%',
            end : '+=3000px',
            scrub: true
        },
        y: 100 ,
        x: 100
    
    })
    gsap.to(".fairmadeSquare",{
        scrollTrigger: {
            trigger :'.bandeau',
            start: 'top 10%',
            end : '+=3000px',
            scrub: true
        },
        y: -100 ,
        x: -100
    
    })
    gsap.to(".twitter",{
        scrollTrigger: {
            trigger :'.fairmade',
            start: 'top 10%',
            end : '+=3000px',
            scrub: true
        },
        y: -100 ,
        x: -100
    
    })
    gsap.to(".twitterSquare",{
        scrollTrigger: {
            trigger :'.fairmade',
            start: 'top 10%',
            end : '+=3000px',
            scrub: true
        },
        y: 100 ,
        x: 100
    
    })
    gsap.to(".weather",{
        scrollTrigger: {
            trigger :'.twitter',
            start: 'top center',
            end : '+=3000px',
            scrub: true
        },
        y: 100 ,
        x: 100
    
    })
    gsap.to(".weatherSquare",{
        scrollTrigger: {
            trigger :'.twitter',
            start: 'top center',
            end : '+=3000px',
            scrub: true
        },
        y: -100 ,
        x: -100
    
    })
    gsap.to(".recipe",{
        scrollTrigger: {
            trigger :'.weather',
            start: 'top center',
            end : '+=3000px',
            scrub: true
        },
        y: -100 ,
        x: -100
    
    })
    gsap.to(".recipeSquare",{
        scrollTrigger: {
            trigger :'.weather',
            start: 'top center',
            end : '+=3000px',
            scrub: true
        },
        y: 100 ,
        x: 100
    
    })

    }
 
        }, [])

   


    return (
        <div id="bandeau" className="bandeau">
            <div className="cursor"></div>
            <div className="photo">
                <span className="photo01">PROJECTS</span>
                <span className="photo02">PROJECTS</span>
                <span className="photo01">PROJECTS</span>
                <span className="photo02">PROJECTS</span>
                <span className="photo01">PROJECTS</span>
                <span className="photo02">PROJECTS</span>
                <span className="photo01">PROJECTS</span>
                <span className="photo02">PROJECTS</span>
 
            </div>

        <div className="fairmadeBlock">
                <div className="fairmadeImage">
                    <img src={fairmade} alt="" className="fairmade"/>
                    <div className="fairmadeSquare"></div>
                </div>
                <div className="fairmadeText">
                <div className="fairmadeTitle">FAIRMADE.FR</div>
                    <div className="fairmadeExp">
                        Site Web e-commerce WordPress <br/>
                        Template Shop-Isle <br/>
                        Accompagnement client complet <br/>
                        CSS personnalisé <br/>
                    </div>
                <a target="_blank" href="https://www.fairmade.fr"> <i  className="fas fa-arrow-right"></i></a>
                </div>
        </div>

        <div className="twitterBlock">
                <div className="twitterText">
                <div className="twitterTitle">TWITTER BOT</div>
                    <div className="twitterExp">
                        V1 <br/>
                        Donne le nombre de places de parkings disponibles <br/>
                        Fonctionne avec l'API de Nantes Métropole <br/>
                        NODE JS
                        
                    </div>
                    <a target="_blank" href="https://twitter.com/ParkNantesBot"> <i  className="fas fa-arrow-right"></i></a>
                </div>
                <div className="twitterImage">
                    <img src={twitter} alt="" className="twitter"/>
                    <div className="twitterSquare"></div>
                </div>
        </div>

        <div className="weatherBlock">
                <div className="weatherImage">
                    <img src={weather} alt="" className="weather"/>
                    <div className="weatherSquare"></div>
                </div>
                <div className="weatherText">
                    <div className="weatherTitle">WEATHER APP</div>
                    <div className="weatherExp">
                        V1 <br/>
                        Donne la météo de la ville entrée en paramètre <br/>
                        Affiche la ville, une icone et la température<br/>
                        Fonctionne avec l'API OpenWeatherMap  <br/>
                        HTML / CSS / REACT 
                        
                    </div>
                    <a target="_blank" href="https://romainbernaz.github.io/weatherApp/"> <i  className="fas fa-arrow-right"></i></a>
                </div>
        </div>

        <div className="recipeBlock">
                <div className="recipeText">
                    <div className="recipeTitle">RECIPE APP</div>
                    <div className="recipeExp">
                        V1 <br/>
                        Création de compte et login / Déconnexion<br/>
                        Création / Suppression de recette<br/>
                        Gestion des routes utilisateurs <br/>
                        REACT / SASS / STRAPI / AXIOS
                        
                    </div>
                    <a target="_blank" href="https://react-recipe-app-strapi.herokuapp.com/"> <i  className="fas fa-arrow-right"></i></a>
                </div>
                <div className="recipeImage">
                    <img src={recipe} alt="" className="recipe"/>
                    <div className="recipeSquare"></div>
                </div>
        </div>


        </div>



    )
}

export default Projects;