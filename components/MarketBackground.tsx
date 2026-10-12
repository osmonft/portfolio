'use client';
import { useEffect, useMemo, useState } from 'react';
import { NEWS } from '@/lib/data';

const W = 1440;
const H = 900;

function buildPaths() {
  // Deterministic upward random walk so the chart looks the same on every load
  let s = 7;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const N = 140;
  const pts: [number, number][] = [];
  const bench: [number, number][] = [];
  let y = 820;
  let b = 800;
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const x = t * W;
    y += (820 - t * 700 - y) * 0.12 + (rnd() - 0.5) * 46;
    b += (800 - t * 380 - b) * 0.1 + (rnd() - 0.5) * 20;
    pts.push([x, Math.max(60, Math.min(870, y))]);
    bench.push([x, b]);
  }
  const toD = (a: [number, number][]) =>
    a.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const line = toD(pts);
  return { pts, line, bench: toD(bench), area: `${line} L${W} ${H} L0 ${H} Z` };
}

export default function MarketBackground() {
  const { pts, line, bench, area } = useMemo(buildPaths, []);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = document.scrollingElement || document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProg(max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const p = Math.max(0.12, prog);
  const dot = pts[Math.min(pts.length - 1, Math.round(p * (pts.length - 1)))];
  const price = 100 + (820 - dot[1]) * 0.21;

  return (
    <>
      <div className="bg" aria-hidden="true">
        <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, opacity: 0.55 }}>
          <g stroke="#1C1E1B" strokeWidth="1">
            {[150, 300, 450, 600, 750].map((y) => (
              <line key={`h${y}`} x1="0" y1={y} x2={W} y2={y} />
            ))}
            {[240, 480, 720, 960, 1200].map((x) => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2={H} />
            ))}
          </g>
          <path d={bench} fill="none" stroke="#3A3C38" strokeWidth="1.5" strokeDasharray="6 6" />
          <path className="bgarea" d={area} fill="var(--acc)" fillOpacity="0.07" style={{ clipPath: `inset(0 ${((1 - p) * 100).toFixed(2)}% 0 0)` }} />
          <path
            className="bgline"
            d={line}
            pathLength={1}
            fill="none"
            stroke="var(--acc)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            style={{ strokeDasharray: 1, strokeDashoffset: 1 - p }}
          />
          <circle className="dot" cx={dot[0]} cy={dot[1]} r="5" fill="var(--acc)" />
        </svg>

        {NEWS.map((n) => (
          <div
            key={n.tag}
            className={`news${n.hideSm ? ' hide-sm-news' : ''}`}
            style={{ top: n.top, left: n.left, animationDelay: n.delay }}
          >
            <div className="news-top mono">
              <span className="acc">
                <span className="flash">●</span> {n.tag}
              </span>
              <span style={{ color: '#8A8A82' }}>{n.time}</span>
            </div>
            <div className="news-text">{n.text}</div>
          </div>
        ))}
      </div>

      <div className="chip-price mono" aria-hidden="true">
        <span style={{ fontSize: 13, color: 'var(--ink3)' }}>$OD</span>
        <span style={{ fontSize: 16 }}>{price.toFixed(2)}</span>
        <span className="acc" style={{ fontSize: 13 }}>▲ +{(price - 100).toFixed(2)}%</span>
      </div>
    </>
  );
}
