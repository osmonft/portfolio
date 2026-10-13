"use client";

import { useLayoutEffect, useRef, useState } from "react";

// The landing page's one quiet ornament: a market that rises, bottom-left to
// upper-right, behind everything. Drawn in real pixels (no viewBox stretch) so
// the stroke stays a true 1px. Its route keeps clear of the words: below the
// centred routes, above the bottom corners, and on phones in the lower half.
// Motion.tsx draws it once (data-draw); after that it never moves.

// [x, y] as fractions of the landing. Smoothly interpolated, then roughened.
const WIDE: [number, number][] = [[0, 0.9], [0.3, 0.82], [0.62, 0.68], [0.76, 0.56], [0.88, 0.36], [1, 0.16]];
const NARROW: [number, number][] = [[0, 0.9], [0.45, 0.8], [0.8, 0.68], [1, 0.58]];

// Seeded, so the line is the same on every visit.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function trend(keys: [number, number][], x: number) {
  let i = 0;
  while (i < keys.length - 2 && x > keys[i + 1][0]) i++;
  const [x0, y0] = keys[i];
  const [x1, y1] = keys[i + 1];
  const t = (x - x0) / (x1 - x0);
  return y0 + (y1 - y0) * (t * t * (3 - 2 * t));
}

function points(w: number, h: number) {
  const narrow = w < 640;
  const keys = narrow ? NARROW : WIDE;
  const step = narrow ? 4 : 6;
  const n = Math.ceil(w / step);
  const rand = mulberry32(1987);
  const amp = h * (narrow ? 0.007 : 0.009);
  let drift = 0;
  const out: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = (i / n) * w;
    // A mean-reverting walk for the swells, a little tick noise on top.
    drift = drift * 0.9 + (rand() - 0.5) * amp;
    const tick = (rand() - 0.5) * amp * 0.6;
    const y = trend(keys, x / w) * h + drift * 2.2 + tick;
    out.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return out.join(" ");
}

export function MarketLine() {
  const ref = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  // Layout effect: the line exists before Motion looks for it.
  useLayoutEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const measure = () => setSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className="market-line"
      aria-hidden="true"
      focusable="false"
      data-draw
      data-intro="8"
      width={size?.w}
      height={size?.h}
      viewBox={size ? `0 0 ${size.w} ${size.h}` : undefined}
    >
      {size && <polyline points={points(size.w, size.h)} />}
    </svg>
  );
}
