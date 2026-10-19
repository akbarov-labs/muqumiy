import { useId } from "react";

type Props = {
  /** Tile size in px: 72 for page heroes, 88 for the larger home sections. */
  size?: 72 | 88;
  opacity: number;
  /** Adds a smaller inner star (home hero) or a centre circle (page heroes). */
  inner?: "star" | "circle" | "none";
};

/** The gold eight-point star lattice used behind heroes. */
export function StarPattern({ size = 72, opacity, inner = "circle" }: Props) {
  const id = useId();
  const c = size / 2;
  const outer =
    size === 72
      ? "M36 4 L45 27 L68 36 L45 45 L36 68 L27 45 L4 36 L27 27 Z"
      : "M44 6 L55 33 L82 44 L55 55 L44 82 L33 55 L6 44 L33 33 Z";

  return (
    <svg aria-hidden="true" className="star-pattern" style={{ opacity }}>
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <path d={outer} fill="none" stroke="#E3B04B" strokeWidth="1" />
          {inner === "circle" && <circle cx={c} cy={c} r="4" fill="none" stroke="#E3B04B" strokeWidth="1" />}
          {inner === "star" && (
            <path
              d="M44 22 L50 38 L66 44 L50 50 L44 66 L38 50 L22 44 L38 38 Z"
              fill="none"
              stroke="#E3B04B"
              strokeWidth="1"
            />
          )}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
