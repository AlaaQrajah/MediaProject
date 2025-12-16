// src/components/backgrounds/GeometricBackground.tsx
import React, { useEffect, useRef } from "react";

type Props = {
  count?: number;
  colors?: string[];
  speed?: number;
  size?: number;
  interactive?: boolean;
  className?: string;
};

type ShapeType = "square" | "circle" | "triangle";

type Shape = {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  type: ShapeType;
};

const GeometricBackground: React.FC<Props> = ({
  count = 30,
  colors = ["#6366f1", "#8b5cf6", "#ec4899"],
  speed = 0.5,
  size = 60,
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

    const shapes: Shape[] = [];
    const types: ShapeType[] = ["square", "circle", "triangle"];

    const initShapes = () => {
      shapes.length = 0;
      for (let i = 0; i < count; i++) {
        shapes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: size * (0.6 + Math.random() * 0.8),
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: ((Math.random() - 0.5) * speed) / 50,
          color: colors[i % colors.length],
          type: types[i % types.length],
        });
      }
    };

    initShapes();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      initShapes();
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

    const renderShape = (s: Shape) => {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rotation);
      ctx.strokeStyle = hexToRgba(s.color, 0.8);
      ctx.lineWidth = 2;
      ctx.beginPath();

      switch (s.type) {
        case "square": {
          const half = s.size / 2;
          ctx.rect(-half, -half, s.size, s.size);
          break;
        }
        case "circle": {
          ctx.arc(0, 0, s.size / 2, 0, Math.PI * 2);
          break;
        }
        case "triangle": {
          const h = (Math.sqrt(3) / 2) * s.size;
          ctx.moveTo(-s.size / 2, h / 3);
          ctx.lineTo(s.size / 2, h / 3);
          ctx.lineTo(0, -((2 * h) / 3));
          ctx.closePath();
          break;
        }
      }

      ctx.stroke();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      shapes.forEach((s) => {
        s.rotation += s.rotationSpeed;

        if (interactive && mouseRef.current.x != null && mouseRef.current.y != null) {
          const dx = mouseRef.current.x - s.x;
          const dy = mouseRef.current.y - s.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 250;
          if (dist < radius) {
            s.rotation += ((radius - dist) / radius) * 0.01;
          }
        }

        renderShape(s);
      });

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
  }, [count, colors, speed, size, interactive]);

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

export default GeometricBackground;
