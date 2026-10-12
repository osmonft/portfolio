import Image from 'next/image';
import type { Shot } from '@/lib/data';

export default function Plate({ shot, sizes, priority, className = '' }: { shot: Shot; sizes: string; priority?: boolean; className?: string }) {
  const cls = shot.size === 'portrait' ? 'half portrait' : shot.size;
  return (
    <figure className={`plate ${cls} ${className}`.trim()}>
      <div className="frame">
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes={sizes} priority={priority} />
      </div>
    </figure>
  );
}
