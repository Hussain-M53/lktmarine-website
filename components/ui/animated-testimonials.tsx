"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    quote: "The best marine equipment supplier I've worked with.",
    name: "John Smith",
    title: "Ship Captain",
  },
  {
    quote: "Exceptional service and quality products.",
    name: "Sarah Johnson",
    title: "Fleet Manager",
  },
  {
    quote: "Reliable and professional team.",
    name: "Michael Brown",
    title: "Marine Engineer",
  },
];

export const AnimatedTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 === testimonials.length ? 0 : prevIndex + 1
    );
  }, []);

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
              {testimonials[currentIndex].title}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
