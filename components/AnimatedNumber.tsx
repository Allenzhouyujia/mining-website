"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export default function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0, duration = 1800 }: Props) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            setDisplay(ease * value);
            if (t < 1) requestAnimationFrame(step);
            else setDisplay(value);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.floor(display).toLocaleString();
  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
