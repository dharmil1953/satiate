"use client";
import { motion } from "framer-motion";
import CTAImg from "@/public/ctaImage.jpg";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center py-24">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* Desktop image - Yoga woman on right side */}
        <Image
          src={CTAImg}
          alt="Woman doing yoga"
          className="hidden md:block w-full h-full object-cover object-right"
        />

        {/* Mobile image */}
        <div className="relative md:hidden w-full h-full">
          <Image
            src={CTAImg}
            alt="Woman doing yoga"
            className="w-full h-full object-cover object-center"
          />
          {/* Mobile dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-robotoCondensed leading-tight text-white md:text-gray-900">
            Ready to make your success stick?
          </h2>

          <p className="text-xl md:text-2xl mt-6 text-blue-100 md:text-gray-700 font-robotoCondensed">
            Join the waitlist today and be part of shaping Satiate from the very
            start.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap md:flex-row gap-4 mt-10 font-robotoCondensed">
            <span className="flex items-center gap-2 bg-white/10 md:bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-white md:text-gray-800">
              ✔ 30-Day Free Trial
            </span>
            <span className="flex items-center gap-2 bg-white/10 md:bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-white md:text-gray-800">
              ✔ Exclusive Content
            </span>
            <span className="flex items-center gap-2 bg-white/10 md:bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-white md:text-gray-800">
              ✔ Early Access
            </span>
          </div>

          {/* CTA button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 bg-blue-600 font-robotoCondensed text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:bg-blue-700"
          >
            Become a FREE Founder Member Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
