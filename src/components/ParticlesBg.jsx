import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: "#050508" },

        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { enable: true, speed: 0.4 },
          links: { enable: true, distance: 150, color: "#00eaff" },
        },

        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 120 } },
        }
      }}
    />
  );
}
