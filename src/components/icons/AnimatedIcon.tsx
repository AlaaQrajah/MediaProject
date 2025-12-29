import React from "react";
import type { LucideIcon } from "lucide-react";

type AnimationType = "bounce" | "spin" | "pulse" | "shake" | "flip" | "scale";

type Props = {
  icon: LucideIcon;
  animation?: AnimationType;
  size?: number;
  color?: string;
  className?: string;
};

const mapAnimationToClass: Record<AnimationType, string> = {
  bounce: "ani-bounce",
  spin: "ani-spin",
  pulse: "ani-pulse",
  shake: "ani-shake",
  flip: "ani-flip",
  scale: "ani-scale",
};

const AnimatedIcon: React.FC<Props> = ({
  icon: Icon,
  animation = "bounce",
  size = 32,
  color = "#6366f1",
  className = "",
}) => {
  const cls = mapAnimationToClass[animation];

  return (
    <span
      className={`
        inline-flex items-center justify-center
        transition-transform duration-200
        hover:scale-110
        ${cls}
        ${className}
      `}
      style={{ color, fontSize: size }}
    >
      <Icon size={size} />
    </span>
  );
};

export default AnimatedIcon;
