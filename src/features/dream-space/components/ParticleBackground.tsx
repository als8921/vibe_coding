"use client";

import React, { useEffect, useState } from "react";
import { Theme } from "../types";

interface ParticleBackgroundProps {
  theme: Theme | null;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
  size: number;
  speed: number;
  opacity: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ theme }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!theme) return;

    const createParticle = (id: number): Particle => ({
      id,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      emoji:
        theme.particles[Math.floor(Math.random() * theme.particles.length)],
      size: Math.random() * 20 + 10,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.3,
    });

    const initialParticles = Array.from({ length: 15 }, (_, i) =>
      createParticle(i)
    );
    setParticles(initialParticles);

    const animate = () => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            y: particle.y + particle.speed,
            x: particle.x + Math.sin(particle.y * 0.01) * 0.5,
            opacity: Math.sin(particle.y * 0.01) * 0.3 + 0.4,
          }))
          .map((particle) =>
            particle.y > window.innerHeight
              ? { ...particle, y: -20, x: Math.random() * window.innerWidth }
              : particle
          )
      );
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [theme]);

  if (!theme) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute transition-all duration-1000"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            fontSize: `${particle.size}px`,
            opacity: particle.opacity,
            transform: `rotate(${particle.y * 0.1}deg)`,
            filter: `drop-shadow(0 0 8px ${theme?.colors.primary}40)`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};

export default ParticleBackground;
