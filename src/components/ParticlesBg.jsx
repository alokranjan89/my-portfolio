import React from "react";
import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },   // <-- FIX HERE

        background: { color: "#000000" },

        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: ["#00d9ff", "#7b2cff", "#6ee7b7"] },
          shape: { type: "circle" },
          opacity: { value: 0.06, random: true },
          size: { value: { min: 1, max: 8 } },
          move: { enable: true, speed: 0.4, random: true },
          links: { enable: true, distance: 160, color: "#00d9ff", opacity: 0.08 },
        },

        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: { repulse: { distance: 120 }, push: { quantity: 2 } },
        },
      }}
    />
  );
}
