import React from 'react';
import './Projects.css';
import  random from '../../images/random.png'
import  todo from '../../images/todo.png'
import weather from '../../images/weather.png'
import twitter from '../../images/twitter.png'
import fairmade from '../../images/fairmade.png'


const Projects = () => {



    return (
        <div class="bandeau">
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

        <div className="imageList">

           <div className="flip-card">
                <div className="inner">
                    <div className="front">
                    <h3>RANDOM</h3>
                    <p>Application which returns a random number.
                        It takes two parameters, a min. number and a max.
                    </p>
                    <p>REACT / JAVASCRIPT / SASS</p>
                    </div>
                    <div className="back">
                    <a href="https://romainbernaz.github.io/randomNumberReact/"><img src={random} alt="random"/></a>

                    </div>
                </div>
            </div>

           <div className="flip-card">
                <div className="inner">
                    <div className="front">
                    <h3>TODO</h3>
                    <p>Simple TodoList application. User can add tasks and delete them. Tasks are saved 
                        in local storage.
                    </p>
                    <p>REACT / JAVASCRIPT / SASS</p>
                    </div>
                    <div className="back">
                    <a href="https://romainbernaz.github.io/todoList-react/"><img src={todo} alt=""/></a> 
                    </div>
                </div>
            </div>
           
        <div className="flip-card">
                <div className="inner">
                    <div className="front">
                    <h3>WEATHER</h3>
                    <p>Weather application. User enter a city in the input and gets the weather back.</p>
                    <p>REACT / JAVASCRIPT / SASS <br/>
                    OPEN WEATHER MAP API</p>
                    </div>
                    <div className="back">
                    <a href="https://romainbernaz.github.io/weatherApp/"><img src={weather} alt=""/></a>
                    </div>
                </div>
            </div>


        </div>
            <div className="imageList2">
            <div className="flip-card">
                <div className="inner">
                    <div className="front">
                    <h3>TWITTER BOT</h3>
                    <p>Twitter bot which returns the number of parking spots in the city center of 
                        Nantes. Works only on my local server for now. Will be host on Heroku.</p>
                    <p>API REST / NODEJS</p>
                    </div>
                    <div className="back">
                    <a href="https://twitter.com/ParkNantesBot"><img src={twitter} alt=""/></a>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="inner">
                    <div className="front">
                    <h3>FAIRMADE</h3>
                    <p>E-commerce website made with Wordpress / Woocommerce and Shop-Isle template.</p>
                    </div>
                    <div className="back">
                    <a href="https://fairmade.fr"><img src={fairmade} alt=""/></a>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="inner">
                    <div className="front">
                    <h3>FAIRMADE</h3>
                    <p>Site web e-commerce Wordpress + template Shop ISLE.</p>
                    </div>
                    <div className="back">
                    <a href="https://fairmade.fr"><img src={fairmade} alt=""/></a>
                    </div>
                </div>
            </div>

        </div>



        </div>



    )
}

export default Projects;