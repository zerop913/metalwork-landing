"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/api/placeholder",
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {!error && (
        <Image
          {...props}
          src={src}
          alt={alt}
          unoptimized
          onError={() => {
            console.log("Image error, showing fallback:", src);
            setError(true);
            setIsLoading(false);
          }}
          onLoad={() => setIsLoading(false)}
        />
      )}

      {error && (
        <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-orange-500/30 via-orange-400/20 to-orange-300/10 flex items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(232,82,26,0.1)_25%,transparent_25%,transparent_50%,rgba(232,82,26,0.1)_50%,rgba(232,82,26,0.1)_75%,transparent_75%,transparent)] bg-[length:40px_40px]" />

          <div className="relative z-50 flex flex-col items-center gap-3">
            <div className="w-20 h-20 bg-orange-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg
                className="w-10 h-10 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider bg-white px-3 py-1.5 rounded text-orange-600 shadow-lg">
              {alt || "Изображение"}
            </span>
          </div>
        </div>
      )}

      {isLoading && !error && (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-400/5 animate-pulse" />
      )}
    </>
  );
}
