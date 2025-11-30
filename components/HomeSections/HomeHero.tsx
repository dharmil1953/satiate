"use client";

import Image from "next/image";
import SliderImage from "@/public/sliderHero.png";
import { motion } from "framer-motion";

const HomeHero = () => {
  return (
    <div className="w-[70%] h-screen overflow-hidden relative">
      <motion.div
        initial={{ x: "-40%", scale: 1.1, opacity: 0 }}
        animate={{ x: "0%", scale: 1, opacity: 0.8 }}   // 👈 less opacity
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={SliderImage}
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default HomeHero;
