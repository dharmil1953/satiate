"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Left1 from "@/public/sliderHero.png";
import Right1 from "@/public/heroRightOne.png";
import Right2 from "@/public/heroRightTwo.png";
import Right3 from "@/public/ImgRightThree.png";

const slides = [
  {
    bgImg: Left1,
    accentImg: Right1,
    heading: "Elevate Your Fitness",
    subheading: "Join a community dedicated to strength and wellness.",
    cta: "Get Started Today",
  },
  {
    bgImg: Left1,
    accentImg: Right2,
    heading: "Push Your Boundaries",
    subheading: "Expert trainers and state-of-the-art facilities await.",
    cta: "Book a Session",
  },
  {
    bgImg: Left1,
    accentImg: Right3,
    heading: "Transform Your Body",
    subheading: "Achieve results with personalized workout plans.",
    cta: "Join Now",
  },
];

const HomeHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={"bg-" + index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 -z-10 w-full h-full"
        >
          <Image
            src={slides[index].bgImg}
            alt="Background"
            priority
            className="object-cover opacity-70 w-[85%]"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto h-full flex items-center px-6 md:px-10 lg:px-16 justify-between gap-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={"text-" + index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight drop-shadow-2xl">
              {slides[index].heading}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-black mt-4 mb-6 drop-shadow-xl">
              {slides[index].subheading}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
            >
              {slides[index].cta}
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT ACCENT IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={"img-" + index}
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block w-1/2 max-w-md lg:max-w-lg"
          >
            <div className="relative w-full h-[90vh] lg:h-[80vh]">
              <Image
                src={slides[index].accentImg}
                alt="Right Accent"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomeHero;
