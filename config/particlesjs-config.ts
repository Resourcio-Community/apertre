import type { ISourceOptions } from 'tsparticles-engine';

// Config by Raja & Abhirup
export const ParticlesConfig: ISourceOptions = {
  fpsLimit: 60,
  pauseOnOutsideViewport: true,
  smooth: true,
  detectRetina: true,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: '#dfabbf',
    },
    opacity: {
      value: 0.5,
      random: false,
      animation: {
        enable: false,
        speed: 1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      animation: {
        enable: false,
        speed: 40,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        }
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.2,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
};
