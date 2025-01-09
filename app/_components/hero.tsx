"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/studio/components/ui/images-slider";
import { CTAButton } from "./cta-button";

export function Hero() {
  const images = [
    "https://www.shutterstock.com/image-photo/oil-gas-industry-marine-crew-260nw-1010722066.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIm6R87V7Z6XeShXrp_xr_kxxC9RoF28TLA&s",
    "https://media.licdn.com/dms/image/v2/C511BAQFJ2zhM3I2ahA/company-background_10000/company-background_10000/0/1583941359872/marine_offshore_oil_and_gas_association_moogas__cover?e=2147483647&v=beta&t=2sv-FD2s6dUdhIsp4uekbROM9OVeNnEpsFscut6gD2s",
  ];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Offshore & <br /> Marine Supply
        </motion.p>
        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
        <CTAButton/>
      </motion.div>
    </ImagesSlider>
  );
}
