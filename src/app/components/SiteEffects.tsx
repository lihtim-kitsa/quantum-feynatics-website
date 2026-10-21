"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hover = window.matchMedia("(hover: hover)");
    const cursor = document.querySelector<HTMLElement>(".custom-cursor");
    const fadeElements = document.querySelectorAll<HTMLElement>(".fade-in-up");
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    let moveTimer: ReturnType<typeof setTimeout> | undefined;
    let stopCursor: (() => void) | undefined;

    function configureMotion() {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      if (moveTimer !== undefined) clearTimeout(moveTimer);
      stopCursor?.();
      stopCursor = undefined;
      document.documentElement.classList.remove("custom-cursor-active");

      if (reduceMotion.matches) {
        fadeElements.forEach((element) => element.classList.add("visible"));
      } else {
        observer = new IntersectionObserver((entries, currentObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              currentObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        fadeElements.forEach((element) => observer?.observe(element));
      }

      if (!cursor || !hover.matches || reduceMotion.matches) {
        if (cursor) cursor.style.display = "none";
        return;
      }

      const activeCursor = cursor;
      activeCursor.style.display = "";
      document.documentElement.classList.add("custom-cursor-active");
      let currentX = window.innerWidth / 2;
      let currentY = window.innerHeight / 2;
      let lagX = currentX;
      let lagY = currentY;
      let lastX = lagX;
      let lastY = lagY;
      let scale = 1;
      let isStreaking = false;

      function handleMove(event: MouseEvent) {
        currentX = event.clientX;
        currentY = event.clientY;
        if (moveTimer !== undefined) clearTimeout(moveTimer);
        moveTimer = setTimeout(() => activeCursor.classList.remove("streaking"), 100);
      }

      function renderCursor() {
        lagX += (currentX - lagX) * 0.2;
        lagY += (currentY - lagY) * 0.2;
        const velocityX = lagX - lastX;
        const velocityY = lagY - lastY;
        const speed = Math.hypot(velocityX, velocityY);
        const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI);
        scale += (1 + Math.min(speed / 15, 1.5) - scale) * 0.3;
        const scaleY = 1 / (scale * 0.5 + 0.5);
        activeCursor.style.transform = `translate(${lagX}px, ${lagY}px) translate(-50%, -50%) rotate(${angle}deg) scaleX(${scale}) scaleY(${scaleY})`;
        if ((speed > 1) !== isStreaking) {
          isStreaking = speed > 1;
          activeCursor.classList.toggle("streaking", isStreaking);
        }
        lastX = lagX;
        lastY = lagY;
        frame = requestAnimationFrame(renderCursor);
      }

      window.addEventListener("mousemove", handleMove);
      stopCursor = () => window.removeEventListener("mousemove", handleMove);
      frame = requestAnimationFrame(renderCursor);
    }

    configureMotion();
    reduceMotion.addEventListener("change", configureMotion);
    hover.addEventListener("change", configureMotion);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      if (moveTimer !== undefined) clearTimeout(moveTimer);
      stopCursor?.();
      reduceMotion.removeEventListener("change", configureMotion);
      hover.removeEventListener("change", configureMotion);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return null;
}
