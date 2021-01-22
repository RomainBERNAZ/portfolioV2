import React, { useEffect} from 'react';
import { gsap} from 'gsap';
import './Projects.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    useEffect(() => {
 
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
        <div className="projects">
            <div className="hutownBlock">
                <img src={require ('../../images/hutown.png').default} alt="" className="hutownImg"/>
                <div className="description">
                    <h2>HUTOWN</h2>
                    <p>Portfolio pour un photographe qui souhaite lancer son activité. Le site web fait également 
                        office de boutique en ligne, afin qu'il puisse mettre en avant ses créations. 
                        L'utilisateur peut ajouter, supprimer, modifier des photos, des produits.
                        Il a également accès à une page qui sera dédiée à la mise en avant d'un artiste choisi par ses soins.<br/> 
                        Site en cours de construction. <br/> 
                       Mise en ligne fin Janvier - début Février 2021</p>
                    <h3>Technologies utilisées</h3>
                    <ul>
                        <li>ReactJS / JavaScript</li>
                        <li>Express / NodeJS</li>
                        <li>Mongoose / MongoDB</li>
                        <li>Axios</li>
                        <li>Sass / HTML5</li>
                        <li>GSAP</li>
                        <li className="github">Code visible sur GitHub <a href="https://github.com/RomainBERNAZ/hutown"><i className="fab fa-github"></i></a></li>
                    </ul>
                    <p className="github"></p>
                </div> 
            </div>
        <div className="fairmadeBlock">
        <div className="description">
                    <h2>FAIRMADE</h2>
                    <p>Site web e-commerce réalisé avec WordPress et un template pour une personne souhaitant lancer une boutique en ligne.
                       La thematique étant le bio, le respect de l'environnement et des conditions de travail, j'ai essayé de garder quelque chose 
                       d'assez épuré avec tes tons plutôt clairs. Le site est en route depuis plusieurs mois maintenant, et je continue d'accompagner 
                       la personne en charge du projet assez régulièrement.
                    </p>
                    <h3>Technologies utilisées</h3>
                    <ul>
                        <li>WordPress</li>
                        <li>Template : ShopIsle</li>
                        <li>Plugins: WooCommerce / Yoast / ContactForm / Elementor ...</li>
                        <li>CSS personnalisé</li>
                        <li>Animations en CSS brut</li>
                        <li className="github">Site visible ici <a href="https://fairmade.fr/"><i className="fas fa-caret-square-right"></i></a></li>
                    </ul>
                    <p className="github"></p>
                </div> 
                <img src={require ('../../images/fairmade.png').default} alt="" className="fairmadeImg"/> 
        </div>
        <div className="recipeBlock">
                <img src={require ('../../images/recipe.png').default} alt="" className="recipeImg"/>
                <div className="description">
                    <h2>RECIPE APP</h2>
                    <p>Premier projet de taille moyenne en ReactJs que j'ai réalisé. Cette application de recette est pleinement fonctionnelle.
                        Il est possible de se connecter, ou de créer un profil utilisateur si besoin. L'utilisateur connecté peut alors ajouter ou supprimer
                        des recettes. L'application fonctionne avec le CMS Strapi, qui m'a permis de stocker mes données et de les récupérer
                        via leur API. Elle est hébergée sur Heroku via leur fonction free, et peut donc pour le premier démarrage être un peu longue.
                    </p>
                    <h3>Technologies utilisées</h3>
                    <ul>
                        <li>ReactJS / JavaScript</li>
                        <li>Strapi</li>
                        <li>Axios</li>
                        <li>Sass / HTML5</li>
                        <li className="github">Code visible sur GitHub <a href="https://github.com/RomainBERNAZ/recipe"><i className="fab fa-github"></i></a></li>
                        <li className="github">Site visible ici <a href="https://react-recipe-app-strapi.herokuapp.com/"><i className="fas fa-caret-square-right"></i></a></li>
                    </ul>
                    <p className="github"></p>
                </div> 
        </div>
        <div className="twitterBlock">
        <div className="description">
                    <h2>TWITTER BOT</h2>
                    <p>Premier bot twitter réalisé par mes soins. Pour sa première version, il est capable de deux actions. Si un utilisateur
                        lui envoi un tweet au hasard il lui proposera de lui reposer une question avec le mot 'parking' dedans. Une fois cette 
                        deuxième étape, il répondra avec un tweet indiquant à la personne l'état de remplissage des parkings de Nantes Métropole. 
                        Il est développé en NodeJs avec l'API de la ville de Nantes qui fournit les données demandées.
                    </p>
                    <h3>Technologies utilisées</h3>
                    <ul>
                        <li>NodeJS</li>
                        <li className="github">Code visible sur GitHub <a href="https://github.com/RomainBERNAZ/parkingBot"><i className="fab fa-github"></i></a></li>
                        <li className="github">Compte Twitter visible ici <a href="https://twitter.com/ParkNantesBot"><i className="fas fa-caret-square-right"></i></a></li>
                    </ul>
                    <p className="github"></p>
                </div> 
              <img src={require('../../images/twitter.png').default} alt="" className="twitterImg"/>      
        </div>

        <h2 className="sentenceEnd">D'autres projets de plus petite taille ou reprenant les concepts de ceux visibles précedemment sont disponibles sur mon GitHub.</h2>

        </div>

        </div>



    )
}

export default Projects;