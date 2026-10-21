"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  depth: number;
  size: number;
  tint: number;
}

const NEAR = 0.28;
const FAR = 8;
const SPEED = 0.65;
const COLORS = ["210, 196, 255", "167, 174, 255", "155, 210, 255"];

export default function WormholeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const surface = canvas;
    const ctx = context;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0;
    let height = 0;
    let mobile = false;
    let stars: Star[] = [];
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;
    let seed = 41023;

    function random() {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      return seed / 4294967296;
    }

    function positionStar(star: Star) {
      const angle = random() * Math.PI * 2;
      const radius = 0.5 + Math.sqrt(random()) * 5;
      star.x = Math.cos(angle) * radius * Math.max(1, width / height);
      star.y = Math.sin(angle) * radius;
    }

    function draw(delta: number) {
      elapsed += delta;
      ctx.clearRect(0, 0, width, height);
      const scale = Math.min(width, height) * 0.7;
      const centerX = width * (0.5 + Math.sin(elapsed * 0.055) * 0.025);
      const centerY = height * (0.43 + Math.cos(elapsed * 0.045) * 0.018);

      // Staggered rings describe the tunnel's depth without a synchronized reset.
      const ringCount = mobile ? 10 : 16;
      for (let index = 0; index < ringCount; index++) {
        const phase = (index / ringCount + elapsed * SPEED / (FAR - NEAR)) % 1;
        const depth = FAR - phase * (FAR - NEAR);
        const radius = scale * 2.3 / depth;
        if (radius > Math.max(width, height) * 1.2) continue;
        const fade = Math.sin(phase * Math.PI);
        const bend = Math.sin(depth * 0.55 + elapsed * 0.035);
        ctx.beginPath();
        ctx.ellipse(
          centerX + bend * radius * 0.11,
          centerY + Math.cos(depth * 0.45) * radius * 0.06,
          radius,
          radius * 0.86,
          bend * 0.12,
          0,
          Math.PI * 2,
        );
        ctx.strokeStyle = `rgba(143, 105, 230, ${fade * 0.075})`;
        ctx.lineWidth = 0.65;
        ctx.stroke();
      }

      for (const star of stars) {
        star.depth -= delta * SPEED;
        if (star.depth < NEAR) {
          star.depth += FAR - NEAR;
          positionStar(star);
        }

        const perspective = scale / star.depth;
        const x = centerX + star.x * perspective;
        const y = centerY + star.y * perspective;
        if (x < -20 || x > width + 20 || y < -20 || y > height + 20) continue;

        // A fixed exposure length keeps streaks consistent across refresh rates.
        const tailPerspective = scale / (star.depth + 0.12);
        const tailX = centerX + star.x * tailPerspective;
        const tailY = centerY + star.y * tailPerspective;
        const arrival = Math.min(1, (FAR - star.depth) / 1.5);
        const departure = Math.min(1, (star.depth - NEAR) / 0.55);
        const brightness = arrival * departure * (0.22 + (1 - star.depth / FAR) * 0.5);
        const radius = Math.min(1.8, star.size * (0.4 + perspective / scale));

        ctx.strokeStyle = `rgba(${COLORS[star.tint]}, ${brightness * 0.7})`;
        ctx.lineWidth = radius * 0.85;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = `rgba(${COLORS[star.tint]}, ${brightness})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function resize() {
      width = Math.max(1, window.innerWidth);
      height = Math.max(1, window.innerHeight);
      mobile = width < 768;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.5);
      surface.width = Math.round(width * pixelRatio);
      surface.height = Math.round(height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = mobile ? 160 : 300;
      if (stars.length !== count) {
        seed = 41023;
        stars = Array.from({ length: count }, (_, index) => {
          const star: Star = {
            x: 0,
            y: 0,
            depth: NEAR + ((index + random()) / count) * (FAR - NEAR),
            size: 0.65 + random() * 0.65,
            tint: Math.floor(random() * COLORS.length),
          };
          positionStar(star);
          return star;
        });
      }
      draw(0);
    }

    function animate(time: number) {
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;
      draw(delta);
      frame = requestAnimationFrame(animate);
    }

    function updateMotion() {
      cancelAnimationFrame(frame);
      lastTime = 0;
      if (document.hidden) return;
      if (reducedMotion.matches) {
        draw(0);
        return;
      }
      frame = requestAnimationFrame(animate);
    }

    resize();
    updateMotion();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", updateMotion);
    reducedMotion.addEventListener("change", updateMotion);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", updateMotion);
      reducedMotion.removeEventListener("change", updateMotion);
    };
  }, []);

  return <canvas ref={canvasRef} className="wormhole-bg" aria-hidden="true" />;
}
