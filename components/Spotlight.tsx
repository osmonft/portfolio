'use client';
import { useEffect, useRef } from 'react';

/** Soft accent glow that follows the cursor. Hidden on touch devices via CSS. */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} className="spot" aria-hidden="true" />;
}
