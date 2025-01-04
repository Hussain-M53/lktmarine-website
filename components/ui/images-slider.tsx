"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/util";

interface Image {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: Image[];
  children?: React.ReactNode;
  autoplay?: boolean;
  interval?: number;
  className?: string;
  overlay?: boolean;
  overlayClassName?: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  children,
  autoplay = true,
  interval = 5000,
  className,
  overlay = true,
  overlayClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const loadImages = useCallback(() => {
    images.forEach((image) => {
      const img = new window.Image();
      img.src = image.src;
      img.onload = () => {
        setLoadedImages((prev) => new Set(prev).add(image.src));
      };
    });
  }, [images]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const isCurrentImageLoaded = loadedImages.has(images[currentIndex].src);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoplay) return;

    const intervalId = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(intervalId);
  }, [autoplay, interval, handleNext]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {!isCurrentImageLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      
      <AnimatePresence mode="wait">
        {isCurrentImageLoaded && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {overlay && isCurrentImageLoaded && (
        <div className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)} />
      )}

      {/* Children content */}
      {children && isCurrentImageLoaded && (
        <div className="absolute inset-0 z-50">
          {children}
        </div>
      )}

      {/* Navigation buttons */}
      {isCurrentImageLoaded && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-50"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-50"
          >
            →
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  currentIndex === index ? "bg-white" : "bg-white/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
