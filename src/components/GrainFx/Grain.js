// Grain.js

import React, { useEffect } from 'react';
import './Grain.css';

const Grain = () => {
  useEffect(() => {
    // Aggiungi il codice per l'animazione della grana qui
    const grainOverlay = document.getElementById('grain-overlay');

    if (grainOverlay) {
      const animateGrain = () => {
        // Aggiungi qui la logica per l'animazione della grana
        requestAnimationFrame(animateGrain);
      };

      animateGrain();
    }
  }, []);

  return (
    <div id="grain-overlay" className="grain-overlay"></div>
  );
};

export default Grain;
