import React, {useState} from "react";
import './Proyects.css';
import ContainerProy from "./ContainerProy";
import AllProyects from "./AllProyects";


export default function Projects() {
  const [tecnologia, setTecnologia] = useState('todos');

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font py-0">
        <h1>Otros</h1>

        <div className="Con-proy">
                <p>Selecciona la tecnologia del proyecto:</p>
        </div>
        <div className="Con-proy2">
              <button className="boton-todos" onClick={() => setTecnologia('todos')}>Todos</button>
              <button className="boton-individual" onClick={() => setTecnologia('fullstack')}>Fullstack</button>
                <button className="boton-individual" onClick={() => setTecnologia('react')}>React</button>
                <button className="boton-individual" onClick={() => setTecnologia('javascript')}>JavaScript</button>
                <button className="boton-individual" onClick={() => setTecnologia('html')}>HTML & CSS</button>
        </div>
                
        <div className="con">
        {tecnologia==='todos'
        ? <AllProyects/>
        : <ContainerProy tema={tecnologia}/>
        }
        </div>

        
    </section>
  );
}