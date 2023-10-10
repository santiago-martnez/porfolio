import React from "react";
import { useState } from "react";
import './Navbar.css'


export default function Navbar() {

  const [collapsed, setCollapsed] = useState(true);
  return (
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">&lt;/&gt;</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setCollapsed(!collapsed)}>
      {collapsed ? (<span class="navbar-toggler-icon"></span>) : (<h1>x</h1>) }  
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link fw-bold" aria-current="page" href="#about">Sobre mi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#skills">Habilidades</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#projects">Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold" href="#contact" tabindex="-1" aria-disabled="true">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
  
}