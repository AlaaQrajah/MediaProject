
import React, { useEffect, useRef } from "react";

type Props = {
  color?: string;
  amplitude?: number;
  frequency?: number;
  speed?: number;
  interactive?: boolean;
  className?: string;
};

const WavesBackground: React.FC<Props> = ({
  color = "#6366f1",
  amplitude = 40,
  frequency = 0.02,
  speed = 0.02,
  interactive = true,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      const y = e.clientY - rect.top;
      mouseRef.current = y / height; 
    };

    const handleMouseLeave = () => {
      if (!interactive) return;
      mouseRef.current = null;
    };

    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      t += speed;

      const baseAmplitude = amplitude;
      const amp =
        mouseRef.current != null
          ? baseAmplitude * (0.7 + mouseRef.current * 0.8)
          : baseAmplitude;

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, hexToRgba(color, 0.5));
      gradient.addColorStop(1, hexToRgba(color, 0));

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let x = 0; x <= width; x += 6) {
        const y =
          height / 2 +
          Math.sin(x * frequency + t) * amp * 0.9 +
          Math.cos(x * frequency * 0.6 - t * 1.2) * amp * 0.4;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

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
  }, [color, amplitude, frequency, speed, interactive]);

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

export default WavesBackground;
