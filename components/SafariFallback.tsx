'use client';

import { useEffect } from 'react';

export default function SafariFallback() {
  useEffect(() => {
    // Détecter les appareils mobiles et activer les fallbacks pour les dégradés
    // L'utilisateur a signalé que les dégradés ne s'affichent pas sur tous les navigateurs de son téléphone
    const activateFallbacks = () => {
      if (typeof window === 'undefined') return;
      
      const ua = navigator.userAgent;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
      
      // Activer les fallbacks sur tous les appareils mobiles
      // Cela garantit que les dégradés seront remplacés par des couleurs solides
      if (isMobile) {
        document.documentElement.classList.add('old-safari');
        return;
      }
      
      // Pour desktop, tester le support réel
      const testClip = document.createElement('div');
      testClip.style.backgroundClip = 'text';
      testClip.style.webkitBackgroundClip = 'text';
      const supportsClip = testClip.style.backgroundClip === 'text' || 
                          testClip.style.webkitBackgroundClip === 'text';
      
      if (!supportsClip) {
        document.documentElement.classList.add('old-safari');
      }
    };

    activateFallbacks();
  }, []);

  return null;
}

