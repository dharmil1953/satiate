"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-14 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block text-sm font-sans">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight font-playfair">
              Satiate is built for the next era of weight management.
            </h2>

            <div className="space-y-6 text-lg text-gray-800 leading-relaxed font-sans">
              <p>
                We combine nutrition science, personalized fitness plans, and
                mental wellness coaching to help you achieve lasting results—not
                just quick fixes.
              </p>
              <p>
                Unlike traditional diets, our approach adapts to your lifestyle.
                You get: <br />- Custom meal plans that fit your preferences <br />-
                Workouts designed for your fitness level <br />- 1-on-1 coaching to
                overcome mental barriers <br />- Progress tracking that keeps you
                motivated
              </p>
              <p>
                Ready to see how we're different from every diet you've tried
                before?
              </p>
            </div>

            <div className="mt-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-8 py-3 font-sans text-lg border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
              >
                Discover Our Method →
              </motion.button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative h-[400px] w-full">
              {/* Main Image */}
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/assets/about.png"
                  alt="Satiate Weight Management"
                  fill
                  className="object-cover rounded-xl transition-all duration-700 ease-in-out"
                />
              </div>

              {/* Decorative Border/Frame (Prowess style) */}
              <div className="absolute top-10 -right-6 w-full h-full border-2 border-gray-200 -z-10 hidden lg:block" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
