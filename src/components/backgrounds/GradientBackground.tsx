// src/components/backgrounds/GradientBackground.tsx
import React, { useEffect, useRef } from "react";

type Props = {
  colors?: string[];
  speed?: number;
  interactive?: boolean;
  className?: string;
};

type Point = { x: number; y: number; vx: number; vy: number; color: string };

const GradientBackground: React.FC<Props> = ({
  colors = ["#6366f1", "#8b5cf6", "#ec4899"],
  speed = 0.001,
  interactive = true,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const points: Point[] = colors.map((c, i) => ({
      x: (width / colors.length) * i + width / colors.length / 2,
      y: height / 2,
      vx: (Math.random() - 0.5) * speed * width,
      vy: (Math.random() - 0.5) * speed * height,
      color: c,
    }));

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      if (!interactive) return;
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // move points
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (interactive && mouseRef.current.x != null && mouseRef.current.y != null) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 250;
          if (dist < radius) {
            p.x -= dx * 0.004;
            p.y -= dy * 0.004;
          }
        }
      });

      // draw radial gradients and blend
      ctx.globalCompositeOperation = "lighter";
      points.forEach((p) => {
        const radius = Math.max(width, height) * 0.8;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        gradient.addColorStop(0, hexToRgba(p.color, 0.9));
        gradient.addColorStop(1, hexToRgba(p.color, 0));
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalCompositeOperation = "source-over";

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    window.addEventListener("resize", handleResize);
    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [colors, speed, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
};

function hexToRgba(hex: string, alpha: number) {
  const parsed = hex.replace("#", "");
  const bigint = parseInt(
    parsed.length === 3 ? parsed.split("").map((c) => c + c).join("") : parsed,
    16
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default GradientBackground;
