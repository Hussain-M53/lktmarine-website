"use client";
import { ImageSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";

export function Hero() {
  const images = [
    {
      src: "https://www.shutterstock.com/image-photo/oil-gas-industry-marine-crew-260nw-1010722066.jpg",
      alt: "Hero image 1"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwIm6R87V7Z6XeShXrp_xr_kxxC9RoF28TLA&s",
      alt: "Hero image 2"
    },
    {
      src: "  https://media.licdn.com/dms/image/v2/C511BAQFJ2zhM3I2ahA/company-background_10000/company-background_10000/0/1583941359872/marine_offshore_oil_and_gas_association_moogas__cover?e=2147483647&v=beta&t=2sv-FD2s6dUdhIsp4uekbROM9OVeNnEpsFscut6gD2s",
      alt: "Hero image 3"
    },
    // Add more images as needed
  ];
  return (
    <ImageSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-col items-center justify-center h-full text-center text-white relative z-50"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your Marine Solutions Partner
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl">
          Providing quality marine equipment and services worldwide
        </p>
        {/* Add any other hero content */}
      </motion.div>
    </ImageSlider>
  );
}
