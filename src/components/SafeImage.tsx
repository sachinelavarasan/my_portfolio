'use client';

import Image, { ImageProps } from "next/image";
import { useState } from "react";

// next/image that removes itself if the file fails to load, instead of showing a broken image.
export const SafeImage = ({ onError, ...props }: ImageProps) => {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <Image
      {...props}
      onError={(e) => {
        setFailed(true);
        onError?.(e);
      }}
    />
  );
};
