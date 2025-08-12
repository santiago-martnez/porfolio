import React from "react";
import Particles from "react-tsparticles";

export default function ParticleBackground() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: "#ff0000" }, // rojo puro sin alfa
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            distance: 150,
            color: "#ff0000",
            opacity: 0.5, // entre 0 y 1
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 1 } },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
