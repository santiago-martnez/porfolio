import './ContainerProy.css';
import './Proyects.css';
import './AllProyects.css';
import { projects } from "../data";
import React from "react";

export default function ContainerProy(prop) {
  return (
    <div>
      <div className="grid">
        {
          projects
            .filter((project) => project.lenguaje === prop.tema)
            .map((project) => (
              <div
                key={project.image}
                className="card-proyect"
                onClick={() => window.open(project.link, "_blank")}
                style={{ cursor: "pointer" }}
              >
                <img
                  alt={project.subtitle}
                  className="foto-proyecto"
                  src={project.image}
                />
                <h2>{project.title}</h2>
                <p className="p-pro">{project.subtitle}</p>
                <div className="go-proy" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5} stroke="currentColor" className="ww">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>
                    Demo
                  </a>
                  <a
                    href={project.codigo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5} stroke="currentColor" className="ww">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                    Código
                  </a>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};
