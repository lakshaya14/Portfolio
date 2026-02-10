"use client";

import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // ⭐ Stars
    const stars = Array.from({ length: 160 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6,
      a: Math.random() * 0.8 + 0.2,
    }));

    // 🪐 Cursor direction effect
    let cursorVX = 1;
    let cursorVY = 1;
    let lastX = w / 2;
    let lastY = h / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;

      // slow influence
      cursorVX = dx * 0.004;
      cursorVY = dy * 0.004;

      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ☄️ Comets (few + slow)
    const cometCount = 5;

    const comets = Array.from({ length: cometCount }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: 1.2 + Math.random() * 0.8,
      vy: 1.2 + Math.random() * 0.8,
      len: 120 + Math.random() * 120,
      life: 200 + Math.random() * 200,
      width: 2 + Math.random() * 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // ✅ BLACK BACKGROUND
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);

      // ⭐ draw stars
      for (const s of stars) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // ☄️ draw comets
      for (const c of comets) {
        // comet glow line
        const grad = ctx.createLinearGradient(
          c.x,
          c.y,
          c.x - c.len,
          c.y - c.len
        );

        grad.addColorStop(0, "rgba(255,255,255,0.9)");
        grad.addColorStop(0.2, "rgba(255,255,255,0.35)");
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = c.width;
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - c.len, c.y - c.len);
        ctx.stroke();

        // Move comet (slow + cursor influence)
        c.x += c.vx + cursorVX;
        c.y += c.vy + cursorVY;

        c.life -= 1;

        // Reset comet if out
        if (
          c.x > w + 200 ||
          c.y > h + 200 ||
          c.x < -200 ||
          c.y < -200 ||
          c.life <= 0
        ) {
          // spawn from random top/left
          const spawnFromTop = Math.random() > 0.5;

          c.x = spawnFromTop ? Math.random() * w : -150;
          c.y = spawnFromTop ? -150 : Math.random() * h;

          c.vx = 1.2 + Math.random() * 0.8;
          c.vy = 1.2 + Math.random() * 0.8;

          c.len = 120 + Math.random() * 120;
          c.life = 200 + Math.random() * 200;
          c.width = 2 + Math.random() * 1;
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,          // 👈 BELOW content
        pointerEvents: "none",
        
      }}
    />
  );
  
}
