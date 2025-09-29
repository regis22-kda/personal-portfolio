import type { ISourceOptions } from "tsparticles-engine";

export const particlesConfig: ISourceOptions = {
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  particles: {
    number: { value: 60 },
    color: { value: "#1677ff" },
    links: { enable: true, color: "#1677ff", distance: 150 },
    move: { enable: true, speed: 2 },
    size: { value: 3 },
    opacity: { value: 0.6 },
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 100 } },
  },
};
