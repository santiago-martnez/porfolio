import React from "react";
import { useState } from "react";
import './Navbar.css'


export default function Navbar() {

  const [collapsed, setCollapsed] = useState(true);
  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#about">&lt;/&gt;</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setCollapsed(!collapsed)}>
      {collapsed ? (<span className="navbar-toggler-icon"></span>) : (<h1>x</h1>) }  
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link fw-bold" aria-current="page" href="#about">Sobre mi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold" href="#skills">Habilidades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold" href="#projects">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fw-bold" href="#contact" tabIndex="-1" aria-disabled="true">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
  
}