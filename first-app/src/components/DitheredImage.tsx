"use client";

import { ImageDithering } from "@paper-design/shaders-react";

type DitheredImageProps = {
  src: string;
  className?: string;
  size?: number;
  type?: "random" | "2x2" | "4x4" | "8x8";
};

export function DitheredImage({
  src,
  className = "",
  size = 1.7,
  type = "4x4",
}: DitheredImageProps) {
  return (
    <ImageDithering
      className={className}
      image={src}
      width="100%"
      height="100%"
      originalColors
      inverted={false}
      type={type}
      size={size}
      colorSteps={7}
      fit="cover"
      minPixelRatio={1}
    />
  );
}
