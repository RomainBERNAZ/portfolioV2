import React from 'react';
import './Projects.css';
import  random from '../../images/random.png'
import  todo from '../../images/todo.png'
import weather from '../../images/weather.png'


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

           <div className="random">
               <a href="https://romainbernaz.github.io/randomNumberReact/"><img src={random} alt="random"/></a>
           </div>
           <div className="todo">
               <a href="https://romainbernaz.github.io/todoList-react/"><img src={todo} alt=""/></a> 
           </div>
           <div className="weather">
                <a href="https://romainbernaz.github.io/weatherApp/"><img src={weather} alt=""/></a>
        </div>
        </div>
        </div>



    )
}

export default Projects;