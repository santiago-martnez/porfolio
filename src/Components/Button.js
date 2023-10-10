import React from "react";
import './About.css';
import './Button.css';

export default function Button(contenido) {
  
  return (
    <button>{contenido.title}</button>
  );
}