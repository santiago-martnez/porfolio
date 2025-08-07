import React from "react";
import { skills } from "../data";
import './Skills.css';


export default function Skills() {
  return (
    <section id="skills">
      <div className="container-skill">
        <div className="text-skill">
          <h1>
            Habilidades y Tecnologías
          </h1>
        </div>
        <div className="habilidades">
          {skills.map((skill) => (
            <div key={skill.title} className="hab-individual">
              <div>
                <img
                  alt={skill.title}
                  className="imagen-hab"
                  src={skill.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}