"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
}

export const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 === testimonials.length ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [handleNext]);

  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-[#DBD3D3]">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="mb-4 text-2xl font-medium text-gray-800">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>
            <p className="text-lg font-semibold text-[#024caa]">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-sm text-gray-600">
              {testimonials[currentIndex].designation}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
