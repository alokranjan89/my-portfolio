import { useEffect } from "react";
import { Particles } from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // NEW v3 engine

export default function ParticlesBg() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the SLIM engine (no checkVersion issue)
    });
  }, []);

  const options = {
    background: { color: "#050508" },
    fullScreen: { enable: true, zIndex: 0 },

    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: ["#00d9ff", "#7b2cff", "#6ee7b7"] },
      shape: { type: "circle" },
      opacity: { value: 0.08 },
      size: { value: { min: 1, max: 6 } },
      move: { enable: true, speed: 0.4 },
      links: {
        enable: true,
        distance: 150,
        color: "#0ff",
        opacity: 0.08,
      },
    },

    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 140 },
        push: { quantity: 2 },
      },
    },
  };

  return <Particles id="tsparticles" options={options} />;
}
