import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function BackgroundParticles() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "particles": {
                    "number": {
                        "value": 125, // increased number of starting stars
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "links": {
                        "enable": true,
                        "distance": 150,
                        "opacity": 0.5,
                        "width": 1,
                    },
                    "size": {
                        "value": 2
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.05
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onClick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
        }} />
    );
}

export default BackgroundParticles;
