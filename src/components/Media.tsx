import Image from "next/image";
import type { CSSProperties } from "react";
import dims from "@/content/media-dims.json";
import LazyVideo from "./LazyVideo";

const DIMS = dims as unknown as Record<string, [number, number]>;

export function size(file: string): [number, number] {
  const d = DIMS[file];
  if (!d) throw new Error(`Unknown media file: ${file} (run scripts/media-dims.mjs)`);
  return d;
}

type ImgProps = {
  /** File name inside public/media, e.g. "abc.png" or "cap/home-siemens.png" */
  file: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  priority?: boolean;
  /** Render with object-fit inside a sized parent instead of intrinsic ratio */
  fill?: boolean;
};

export function Img({ file, alt = "", className, style, sizes = "(max-width: 809px) 100vw, 1100px", priority, fill }: ImgProps) {
  const src = `/media/${file}`;
  const unoptimized = file.endsWith(".gif") || file.endsWith(".svg");
  if (fill) {
    return <Image src={src} alt={alt} fill className={className} style={style} sizes={sizes} priority={priority} unoptimized={unoptimized} />;
  }
  const [w, h] = size(file);
  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      className={className}
      style={{ width: "100%", height: "auto", ...style }}
      sizes={sizes}
      priority={priority}
      unoptimized={unoptimized}
    />
  );
}

type VidProps = {
  file: string;
  className?: string;
  style?: CSSProperties;
  label?: string;
};

export function Vid({ file, className, style, label }: VidProps) {
  const [w, h] = size(file);
  return (
    <LazyVideo
      src={`/media/${file}`}
      className={className}
      style={{ width: "100%", height: "auto", aspectRatio: `${w} / ${h}`, ...style }}
      label={label}
    />
  );
}
