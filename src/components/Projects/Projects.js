import React from 'react';
import './Projects.css';
import  random from '../../images/random.png'
import  todo from '../../images/todo.png'


const Projects = () => {



    return (
        <div class="bandeau">
            <div class="photo">
                <span class="photo01">PROJECTS</span>
                <span class="photo02">PROJECTS</span>
                <span class="photo03">PROJECTS</span>
                <span class="photo04">PROJECTS</span>
                <span class="photo05">PROJECTS</span>
                <span class="photo04">PROJECTS</span>
                <span class="photo05">PROJECTS</span>
                <span class="photo04">PROJECTS</span>

            </div>

        <div className="random">
           <a href="https://romainbernaz.github.io/randomNumberReact/"><img src={random} alt="random"/></a>
           <a href="https://romainbernaz.github.io/todoList-react/"><img src={todo} alt=""/></a> 
           <a href="https://romainbernaz.github.io/todoList-react/"><img src="/images/todo.jpg" alt=""/></a> 
        </div>





        </div>
    )
}

export default Projects;