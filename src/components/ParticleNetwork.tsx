"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  depth: number;
};

const LINK_DISTANCE = 220;
const DENSITY = 8500;
const DOT_RADIUS = 3;
const LINE_WIDTH = 1.75;

/** Subtle at top; ramps up before Experience & education. */
function opacityForScroll(scrollY: number): number {
  const min = 0.22;
  const max = 0.92;
  const vh = window.innerHeight;

  const rampStart = vh * 0.15;
  const experienceEl = document.getElementById("experience");
  const rampEnd = experienceEl
    ? experienceEl.offsetTop - vh * 0.2
    : vh * 1.5;

  if (scrollY <= rampStart) return min;
  if (scrollY >= rampEnd) return max;

  const t = (scrollY - rampStart) / Math.max(1, rampEnd - rampStart);
  return min + t * (max - min);
}

export function ParticleNetwork() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const initParticles = (w: number, h: number) => {
      const count = Math.max(
        40,
        Math.min(100, Math.floor((w * h) / DENSITY)),
      );
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        depth: 0.12 + Math.random() * 0.5,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (particlesRef.current.length === 0) initParticles(w, h);
    };

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let time = 0;

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scroll = scrollRef.current;
      const particles = particlesRef.current;
      const reduced = reducedMotionRef.current;

      ctx.clearRect(0, 0, w, h);
      if (!reduced) time += 0.007;

      const points: { x: number; y: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;
        }

        const parallaxX = scroll * p.depth * 0.1;
        const parallaxY = scroll * p.depth * 0.4;
        const drift = reduced ? 0 : 10;

        const x = p.x - parallaxX + Math.sin(time + i * 0.6) * drift;
        const y =
          p.y - parallaxY + Math.cos(time * 0.85 + i * 0.5) * drift;

        points.push({ x, y });

        ctx.beginPath();
        ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(244, 244, 245, 0.55)";
        ctx.fill();
      }

      if (wrapperRef.current) {
        wrapperRef.current.style.opacity = String(opacityForScroll(scroll));
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.32;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(201, 162, 39, ${alpha})`;
            ctx.lineWidth = LINE_WIDTH;
            ctx.stroke();
          }
        }
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
