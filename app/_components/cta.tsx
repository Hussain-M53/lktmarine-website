"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { CTAButton } from "./cta-button";

export default function CTA() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-4 py-24"
      >
        <div className="text-4xl md:text-6xl font-bold text-white text-center max-w-4xl">
          Your Trusted Partner in Marine & Industrial Solutions
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-neutral-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="font-light text-xl md:text-2xl text-neutral-200 max-w-2xl text-center mt-6">
          We remain uncompromising in our commitment to putting the needs of our customers first
        </div>
        
        <div className="mt-8">
          <CTAButton />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

const stats = [
  {
    value: "25+",
    label: "Years of Experience",
  },
  {
    value: "1000+",
    label: "Products Available",
  },
  {
    value: "24/7",
    label: "Customer Support",
  },
];
