import React from "react";
import './Proyects.css';

export default function Projects() {
  return (
    <section id="projects" className="text-light py-0 mb-0">
      <div className="container">
        <h1 className="mb-1">Aplicaciones que he construido</h1>
        
        <div className="mb-0 text-center">
          <p>Último proyecto y más completo:</p>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="./abasto.png" 
              className="img-fluid rounded shadow w-100" 
              alt="Sistema de alquileres" 
            />
                <div className="go-proy">
                      <a href="https://sistema-inmobliario.netlify.app/" target="_blank"
                    rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ww">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg>
                          Demo
                          </a>
                        <a href="https://github.com/santiago-martnez/inmo" target="_blank"
                    rel="noopener noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ww">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                          </svg>
                          Codigo
                        </a>
                      </div>
                      <p className="fw-bold font-subtitulo-color">User: <span className="fw-normal text-white">test</span></p>
                      <p className="fw-bold font-subtitulo-color">Pass: <span className="fw-normal text-white">test123</span></p>
          </div>

          
          <div className="col-lg-6">
            <h2 className="fw-bold fs-5 mb-0 font-subtitulo-color">Sistema de alquileres</h2>
            <p className="mb-3 fs-6">
              Este sistema web permite gestionar un conjunto de propiedades en alquiler. Incluye funcionalidades clave para la administración de residentes, contratos, departamentos y saldos. Está orientado a propietarios o administradores que desean llevar un control digital de su cartera de alquileres.
            </p>

            <h5 className="font-subtitulo-color fw-semibold fs-6 mb-1">🚀 Funcionalidades principales</h5>
            <ul className="mb-4 ps-3">
              <li>📋 Gestión de residentes.</li>
              <li>🏢 Gestión de departamentos.</li>
              <li>📝 Generación y seguimiento de contratos.</li>
              <li>💵 Visualización de saldos.</li>
              <li>📈 Indicadores económicos diarios.</li>
              <li>📂 Uso de almacenamiento en base de datos.</li>
              <li>⚡ Módulo de consumo eléctrico (en desarrollo).</li>
              <li>🧾 Generación de reportes PDF (en desarrollo).</li>
            </ul>

            <h5 className="font-subtitulo-color fw-semibold fs-6 mb-1">🛠️ Tecnologías utilizadas</h5>
            <ul className="mb-0 ps-3">
              <li>Frontend: React.js</li>
              <li>Estilos: Bootstrap + CSS personalizado</li>
              <li>HTTP Client: Axios (consumo de APIs y comunicación con el backend)</li>
              <li>Backend: Node.js + Express</li>
              <li>Autenticación: JWT para proteger rutas y verificar usuarios</li>
              <li>Base de datos: MongoDB</li>
              <li>API externa: Cotizaciones del dólar y euro blue (integración en tiempo real)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
