// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// import Left1 from "@/public/sliderHero.png";
// import Right1 from "@/public/heroRightOne.png";
// import Right2 from "@/public/heroRightTwo.png";
// import Right3 from "@/public/ImgRightThree.png";

// const slides = [
//   {
//     bgImg: Left1,
//     accentImg: Right1,
//     heading: "Transform Your Body",
//     subheading: "Personalized workouts, meal plans, and coaching—all in one app.",
//     cta: "Start 7-Day Free Trial",
//   },
//   {
//     bgImg: Left1,
//     accentImg: Right2,
//     heading: "Push Your Boundaries",
//     subheading: "Expert trainers and state-of-the-art facilities await.",
//     cta: "Start 7-Day Free Trial",
//   },
//   {
//     bgImg: Left1,
//     accentImg: Right3,
//     heading: "Transform Your Body",
//     subheading: "Real people achieving real results with personalized plans.",
//     cta: "See Success Stories",
//   },
// ];

// const HomeHero = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={"bg-" + index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0 -z-10 w-full h-full"
//         >
//           <Image
//             src={slides[index].bgImg}
//             alt="Background"
//             priority
//             className="object-cover opacity-70 w-[85%]"
//           />
//         </motion.div>
//       </AnimatePresence>

//       <div className="container mx-auto h-full flex items-center px-6 md:px-10 lg:px-16 justify-between gap-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={"text-" + index}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.7 }}
//             className="w-full md:w-1/2 max-w-2xl"
//           >
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight drop-shadow-2xl">
//               {slides[index].heading}
//             </h1>

//             <p className="text-lg md:text-xl lg:text-2xl text-black mt-4 mb-6 drop-shadow-xl">
//               {slides[index].subheading}
//             </p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
//             >
//               {slides[index].cta}
//             </motion.button>
//           </motion.div>
//         </AnimatePresence>

//         {/* RIGHT ACCENT IMAGE */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={"img-" + index}
//             initial={{ opacity: 0, x: 30, scale: 0.9 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             exit={{ opacity: 0, x: 30, scale: 0.9 }}
//             transition={{ duration: 0.8 }}
//             className="hidden md:block w-1/2 max-w-md lg:max-w-lg"
//           >
//             <div className="relative w-full h-[90vh] lg:h-[80vh]">
//               <Image
//                 src={slides[index].accentImg}
//                 alt="Right Accent"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default HomeHero;


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
    heading: "Transform Your Body",
    subheading: "Personalized workouts, meal plans, and coaching—all in one app.",
    primaryCta: "Download Free App",
    secondaryCta: "Watch Demo",
    ctaAction: "app-download",
  },
  {
    bgImg: Left1,
    accentImg: Right2,
    heading: "Start Your Journey Today",
    subheading: "Get 30 days free. No credit card required. Cancel anytime.",
    primaryCta: "Start Free Trial",
    secondaryCta: "See Pricing",
    ctaAction: "signup",
  },
  {
    bgImg: Left1,
    accentImg: Right3,
    heading: "Join 50,000+ Members",
    subheading: "Real people achieving real results with personalized plans.",
    primaryCta: "See Success Stories",
    secondaryCta: "How It Works",
    ctaAction: "testimonials",
  },
];

const HomeHero = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // Increased to 6s for better readability
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleCTA = (action: string) => {
    switch (action) {
      case "app-download":
        // Show app download modal or redirect
        console.log("Open app download");
        break;
      case "signup":
        // Open signup modal or redirect
        console.log("Open signup");
        break;
      case "testimonials":
        // Scroll to testimonials
        document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
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
        {/* Left Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={"text-" + index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-robotoCondensed text-black leading-tight drop-shadow-2xl">
              {slides[index].heading}
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-robotoCondensed mt-6 mb-8 drop-shadow-xl font-sans">
              {slides[index].subheading}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 hover:bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl flex items-center justify-center gap-2 border-2 border-indigo-600 transition-colors"
              >
                {slides[index].secondaryCta}
              </motion.button>
            </div>

      
          </motion.div>
        </AnimatePresence>

        {/* Right Accent Image */}
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
                alt="Hero visual"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-12 bg-indigo-600" : "w-2 bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHero;