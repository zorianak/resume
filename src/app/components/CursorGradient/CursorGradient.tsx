"use client";

import { useEffect, useRef } from "react";

export const CursorGradient = () => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gradientRef.current) return;

      const x = e.clientX;
      const y = e.clientY;

      gradientRef.current.style.opacity = "1";
      gradientRef.current.style.background = `radial-gradient(300px at ${x}px ${y}px, oklch(20.8% 0.042 265.755), transparent 80%)`;
      gradientRef.current.style.mixBlendMode = "screen";
      gradientRef.current.style.zIndex = "-1";
    };

    const handleMouseLeave = () => {
      if (!gradientRef.current) {
        gradientRef.current!.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={gradientRef}
      className="pointer-events-none fixed inset-0 hidden lg:block transition-opacity duration-300 opacity-0"
      style={{
        background: `radial-gradient(300px at 50% 50%, oklch(20.8% 0.042 265.755), transparent 80%)`,
        zIndex: -1,
        mixBlendMode: "screen",
      }}
    />
  );
};

export default CursorGradient;
