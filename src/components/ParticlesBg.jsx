import React from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles-engine";

export default function ParticlesBg() {
  const particlesInit = async (engine) => {
    // Loads the full tsparticles package (compatible with latest version)
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },

        background: {
          color: "#050508",
        },

        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },

          color: {
            value: ["#00d9ff", "#7b2cff", "#6ee7b7"],
          },

          shape: { type: "circle" },

          opacity: {
            value: 0.06,
            random: true,
          },

          size: {
            value: { min: 1, max: 8 },
          },

          move: {
            enable: true,
            speed: 0.4,
            random: true,
          },

          links: {
            enable: true,
            distance: 160,
            color: "#0ff",
            opacity: 0.04,
          },
        },

        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },

          modes: {
            repulse: { distance: 120 },
            push: { quantity: 2 },
          },
        },
      }}
    />
  );
}
