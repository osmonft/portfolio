import Image from "next/image";
import type { Plate } from "@/content/site";

// Pictures on their mounts. Full plates span the column; half plates pair up.
export function Plates({ plates, eager = 1 }: { plates: Plate[]; eager?: number }) {
  return (
    <div className="plates">
      {plates.map((p, i) => (
        <figure
          key={p.src}
          className={`plate ${p.size}${p.height > p.width ? " portrait" : ""}`}
          data-plate
          {...(i < eager ? { "data-intro": 2 + i } : { "data-rise": "" })}
        >
          <div className="frame">
            <Image
              src={p.src}
              alt={p.alt}
              width={p.width}
              height={p.height}
              sizes={p.size === "full" ? "(min-width: 1000px) 62vw, 92vw" : "(min-width: 1000px) 31vw, 92vw"}
              priority={i < eager}
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
