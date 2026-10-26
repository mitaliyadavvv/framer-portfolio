import type { CSSProperties } from "react";

/** Soft rounded star used as background decoration. */
export function Star({
  size = 120,
  color = "var(--cream-star)",
  className,
  style,
}: {
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      aria-hidden
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 253 253"
      fill="none"
    >
      <path
        d="M142.048 43.8327C145.546 38.4464 153.893 40.6829 154.229 47.0966L156.835 96.8144C156.985 99.6826 158.965 102.128 161.739 102.871L209.829 115.757C216.033 117.419 216.485 126.049 210.489 128.35L164.01 146.192C161.328 147.221 159.615 149.86 159.765 152.728L162.371 202.446C162.707 208.86 154.639 211.957 150.598 206.965L119.266 168.274C117.459 166.042 114.419 165.228 111.738 166.257L65.2586 184.099C59.2628 186.4 53.8246 179.685 57.3225 174.299L84.438 132.545C86.0023 130.136 85.8376 126.994 84.0301 124.761L52.6987 86.0704C48.6569 81.0792 53.3633 73.832 59.5669 75.4942L107.657 88.3798C110.431 89.1232 113.368 87.9956 114.933 85.5868L142.048 43.8327Z"
        fill={color}
      />
    </svg>
  );
}
