"use client";

import { useEffect, useRef, useState } from "react";

interface Segment {
  value: number;
  color: string;
  label: string;
}

interface Props {
  segments: Segment[];
  size?: number;
  thickness?: number;
}

export default function DonutChart({ segments, size = 160, thickness = 28 }: Props) {
  const ref = useRef<SVGSVGElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const step = (now: number) => {
            const t = Math.min((now - start) / 900, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            setProgress(ease);
            if (t < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cx = size / 2;
  const cy = size / 2;
  const r = (size - thickness) / 2;
  const circumference = 2 * Math.PI * r;
  const total = segments.reduce((s, seg) => s + seg.value, 0);

  let offset = 0;
  const arcs = segments.map((seg) => {
    const pct = (seg.value / total) * progress;
    const dash = pct * circumference;
    const gap = circumference - dash;
    const rotate = (offset / total) * 360 * progress - 90;
    offset += seg.value;
    return { ...seg, dash, gap, rotate };
  });

  return (
    <svg ref={ref} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background ring */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1f2937" strokeWidth={thickness} />
      {arcs.map((arc, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={arc.color}
          strokeWidth={thickness}
          strokeDasharray={`${arc.dash} ${arc.gap}`}
          strokeLinecap="butt"
          transform={`rotate(${arc.rotate} ${cx} ${cy})`}
          style={{ transition: "stroke-dasharray 0.05s" }}
        />
      ))}
    </svg>
  );
}
