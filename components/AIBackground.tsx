"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

export default function AIBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame: number;

    let width = 0;
    let height = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

    const resize = () => {
      const parent = canvas.parentElement;

      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || 650;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    resize();

    window.addEventListener("resize", resize);

    const particleCount = Math.min(
      100,
      Math.max(55, Math.floor((width * height) / 14000)),
    );

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        size: Math.random() * 1.8 + 0.7,
      });
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Move particles
      particles.forEach((particle) => {
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse interaction
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;

          particle.x += (dx / (distance || 1)) * force * 1.2;
          particle.y += (dy / (distance || 1)) * force * 1.2;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;

        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const first = particles[i];
          const second = particles[j];

          const dx = first.x - second.x;
          const dy = first.y - second.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 145) {
            const opacity = (1 - distance / 145) * 0.5;

            // Slightly brighter when close to mouse
            const mouseDistance = Math.sqrt(
              (first.x - mouse.x) ** 2 + (first.y - mouse.y) ** 2,
            );

            const boost =
              mouseDistance < mouse.radius
                ? (1 - mouseDistance / mouse.radius) * 0.5
                : 0;

            const finalOpacity = Math.min(opacity + boost, 0.85);

            const gradient = ctx.createLinearGradient(
              first.x,
              first.y,
              second.x,
              second.y,
            );

            gradient.addColorStop(0, `rgba(236, 72, 153, ${finalOpacity})`);
            gradient.addColorStop(0.5, `rgba(168, 85, 247, ${finalOpacity})`);
            gradient.addColorStop(1, `rgba(59, 130, 246, ${finalOpacity})`);

            ctx.beginPath();
            ctx.moveTo(first.x, first.y);
            ctx.lineTo(second.x, second.y);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;

            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((particle) => {
        const distance = Math.sqrt(
          (particle.x - mouse.x) ** 2 + (particle.y - mouse.y) ** 2,
        );

        const isNearMouse = distance < mouse.radius;

        const glowSize = isNearMouse ? 12 : 7;

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowSize,
        );

        gradient.addColorStop(
          0,
          isNearMouse ? "rgba(255, 80, 190, 0.95)" : "rgba(120, 160, 255, 0.9)",
        );

        gradient.addColorStop(1, "rgba(120, 100, 255, 0)");

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);

        ctx.fillStyle = gradient;
        ctx.fill();

        // Bright center
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        ctx.fillStyle = isNearMouse
          ? "rgba(255, 100, 200, 1)"
          : "rgba(130, 180, 255, 0.95)";

        ctx.fill();
      });

      // Mouse glow
      if (mouse.x > 0 && mouse.y > 0) {
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          180,
        );

        mouseGlow.addColorStop(0, "rgba(236, 72, 153, 0.10)");

        mouseGlow.addColorStop(0.5, "rgba(99, 102, 241, 0.06)");

        mouseGlow.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);

        ctx.fillStyle = mouseGlow;
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);

      canvas.removeEventListener("mousemove", handleMouseMove);

      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
    />
  );
}
