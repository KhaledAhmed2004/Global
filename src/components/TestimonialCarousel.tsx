"use client";

import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

type TestimonialItem = {
  rating: number;
  quote: string;
  name: string;
  imageSrc: string;
  role?: string;
};

type Props = {
  testimonials: TestimonialItem[];
};

export default function TestimonialCarousel({ testimonials }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);
  const intervalMs = 2600;
  const count = testimonials.length;

  const positions = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < count; i++) arr.push(relative(i, index, count));
    return arr;
  }, [index, count]);

  function relative(i: number, active: number, len: number) {
    let diff = i - active;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
  }

  const next = () => setIndex((p) => (p + 1) % count);
  const prev = () => setIndex((p) => (p - 1 + count) % count);

  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      if (!paused) next();
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, intervalMs, count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const mapStyle = (pos: number) => {
    const clamped = Math.max(-2, Math.min(2, pos));
    const w = viewportWidth;

    // Responsive positioning - reduced offsets for mobile
    let baseX;
    if (w == null) {
      baseX = clamped * 140;
    } else if (w < 640) {
      // Mobile: much smaller offset to prevent overflow
      baseX = clamped * 100;
    } else if (w < 768) {
      baseX = clamped * 140;
    } else {
      baseX = clamped * 220;
    }

    const scale =
      clamped === 0 ? 1 : clamped === -1 || clamped === 1 ? 0.95 : 0.9;
    const opacity =
      clamped === 0 ? 1 : clamped === -1 || clamped === 1 ? 0.75 : 0.4;
    const z = clamped === 0 ? 30 : clamped === -1 || clamped === 1 ? 20 : 10;
    const blur = clamped === 0 ? 0 : 1.5;
    return { x: baseX, scale, opacity, z, blur, hidden: Math.abs(pos) > 2 };
  };

  return (
    <div
      className="relative w-full mx-auto px-2 sm:px-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Changed overflow-visible to overflow-hidden to prevent horizontal scroll */}
      <div className="relative h-[340px] sm:h-[360px] md:h-[400px] overflow-hidden">
        {testimonials.map((t, i) => {
          const pos = positions[i];
          const { x, scale, opacity, z, blur, hidden } = mapStyle(pos);
          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-0 -translate-x-1/2"
              style={{
                zIndex: z,
                filter: blur ? `blur(${blur}px)` : undefined,
              }}
              initial={false}
              animate={{ x, scale, opacity }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.45 }}
              drag={pos === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => pos === 0 && setPaused(true)}
              onDragEnd={(_, info) => {
                if (pos !== 0) return;
                setPaused(false);
                const threshold = 50;
                const vThreshold = 300;
                const dx = info.offset.x;
                const vx = info.velocity.x;
                if (dx < -threshold || vx < -vThreshold) next();
                else if (dx > threshold || vx > vThreshold) prev();
              }}
            >
              {!hidden && (
                <div className="w-[280px] sm:w-[340px] md:w-[480px] lg:w-[520px] mx-auto">
                  <TestimonialCard
                    rating={t.rating}
                    quote={t.quote}
                    name={t.name}
                    imageSrc={t.imageSrc}
                    role={t.role ?? "Doctor"}
                    interactive={false}
                    className={pos === 0 ? "shadow-2xl" : "shadow-lg"}
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
