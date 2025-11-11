'use client';

import { useState, useEffect } from 'react';

const words = [
  'ultra-personnalisés',
  'créés en un rien de temps',
  'ultra bien référencés',
  'qui ne demandent aucun effort',
  'faits pour durer',
  'à un prix imbatable',
];

export default function RotatingWords() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Plus rapide en suppression
    const pauseBeforeDelete = 2000; // Pause avant de commencer à supprimer
    const pauseBeforeNext = 500; // Pause avant le mot suivant

    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      // Écriture
      timeoutId = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Pause avant suppression
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && charIndex > 0) {
      // Suppression
      timeoutId = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      // Passage au mot suivant
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setDisplayedText('');
      }, pauseBeforeNext);
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, currentIndex]);

  // Trouver le mot le plus long pour fixer la largeur
  const longestWord = words.reduce((a, b) => a.length > b.length ? a : b);
  const minWidth = `${longestWord.length * 0.65}ch`; // Largeur fixe basée sur le mot le plus long
  
  return (
    <span className="inline-block">
      <span className="inline-block">Des sites</span>
      <span className="inline-block text-pink-500" style={{ minWidth, textAlign: 'left', marginLeft: '0.5rem' }}>
        {displayedText}
        <span className="animate-pulse inline">|</span>
      </span>
    </span>
  );
}

