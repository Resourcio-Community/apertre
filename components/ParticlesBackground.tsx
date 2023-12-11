import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from "tsparticles-engine";
import ParticlesConfig from 'config/particlesjs-config';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // await console.log(container);
  }, []);

  return (
    // <div id="particle-backgroud">
        <Particles
            id='tsparticles'
            // particlesLoaded='particlesLoaded'
            init={particlesInit}
            loaded={particlesLoaded}
            options={ParticlesConfig}
        ></Particles>
    // </div>
  )
};

export default ParticlesBackground;
