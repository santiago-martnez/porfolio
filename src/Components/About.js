import React from "react";
import './About.css';
import Button from './Button';
import cv from '../Assets/ultimo-cv.pdf'

export default function About() {
  return (
    <section id="about">
        <h1>Sobre mi</h1>
        <div className="contenedor-about">
        {/* <div class="foto">
                    <img src="./santiago.png" alt=""/>
                </div> */}
                <div>
                    <p>Hola, me llamo <span>Santiago Martinez.</span> En 2022 comence a estudiar <span>Ingenieria en
                    Sistemas de Informacion</span> en la <span>Universidad Abierta Interamericana.</span></p>
                    <p>
                    Desde entonces de forma autodidacta tambien me centro en aprender nuevas tecnologias.
                    </p>
                    < p>
                    Ahora como siguiente paso en mi camino profesional, busco tener mi primer experiencia laboral para
                    poner en practica mis herramientas y adquirir conocimiento valioso.
                    </p>
                    <p>
                    Cuento con una solida base en programacion que me permite aprender y adaptarme a cualquier
                    tecnologia rapidamente.
                    </p>
                </div>
        </div>
                
                
                <div class="redes">
                  <div className="s">
                  <a class="r-a" href={cv} download="cv-santiago-martinez.pdf">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ww">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Descargar CV
                  </a>
                  </div>
              
                    <a title="linkedin" href="https://www.linkedin.com/in/santiago-martinez-5b869620a/"><img src="./i-git.png" class="red" alt="linkedin" /></a>
                    <a title="github" href="https://github.com/santiago-martnez"><img src="./i-linked.png" class="red" alt="github" /></a>
                </div>
               
    </section>
  );
}