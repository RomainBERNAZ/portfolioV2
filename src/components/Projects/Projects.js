import React from 'react';
import './Projects.css';
import random from '../../images/random.png'
import todo from '../../images/todo.png'
import weather from '../../images/weather.png'
import twitter from '../../images/twitter.png'
import fairmade from '../../images/fairmade.png'


const Projects = () => {




    return (
        <div class="bandeau">
            <div className="cursor"></div>
            <div class="photo">
                <span class="photo01">PROJECTS</span>
                <span class="photo02">PROJECTS</span>
                <span class="photo01">PROJECTS</span>
                <span class="photo02">PROJECTS</span>
                <span class="photo01">PROJECTS</span>
                <span class="photo02">PROJECTS</span>
                <span class="photo01">PROJECTS</span>
                <span class="photo02">PROJECTS</span>

            </div>

        <div className="fairmadeBlock">
                <div className="fairmadeImage">
                    <img src={fairmade} alt="" className="fairmade"/>
                    <div className="fairmadeSquare"></div>
                </div>
                <div className="fairmadeText">
                <div className="fairmadeTitle">FAIRMADE</div>
                    <div className="fairmadeExp">
                        Site Web e-commerce WordPress <br/>
                        Template Shop-Isle <br/>
                        Accompagnement client complet <br/>
                        CSS personnalisé 
                        
                    </div>
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
                        HTML / CSS / JAVASCRIPT 
                        
                    </div>
                </div>
        </div>



        </div>



    )
}

export default Projects;