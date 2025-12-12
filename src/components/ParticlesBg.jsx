import React, { useEffect } from "react";
import Particles from "@tsparticles/react";                     // ✅ FIXED
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";                   // Slim engine

export default function ParticlesBg() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = {
    fullScreen: { enable: true, zIndex: 0 },
    background: { color: "#050508" },

    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: ["#00d9ff", "#7b2cff", "#6ee7b7"] },
      shape: { type: "circle" },
      opacity: { value: 0.06 },
      size: { value: { min: 1, max: 8 } },
      move: { enable: true, speed: 0.4 },
      links: {
        enable: true,
        distance: 150,
        color: "#0ff",
        opacity: 0.1,
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
  };

  return <Particles id="tsparticles" options={options} />;
}
