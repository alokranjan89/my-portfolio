import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // load the slim bundle
    });
  }, []);

  const particlesOptions = {
    background: {
      color: "transparent",
    },
    particles: {
      number: { value: 40 },
      size: { value: 3 },
      links: {
        enable: true,
        color: "#00eaff",
      },
      move: { enable: true },
    },
  };

  return (
    <Particles id="tsparticles" options={particlesOptions} />
  );
}
