import './App.css';
import React from "react";
import About from "./Components/About";
import Contact from "./Components/Conctact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Proyects";
import ProjectsMain from './Components/ProyectsMain';
import Skills from "./Components/Skills"
import Footer from './Components/Footer';
import Presentacion from './Components/Presentacion';
//import 'animate.css';


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <Presentacion/>
      <ProjectsMain />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer/>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
    </main>
  );
}

export default App;
