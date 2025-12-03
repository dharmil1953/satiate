"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Jessica M., Lost 32 lbs",
    quote: "I've tried every diet out there, but Satiate was the first program that actually worked with my lifestyle. Down 32 pounds in 4 months and I feel amazing!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    date: "December 15, 2024",
  },
  {
    name: "Marcus T., Lost 45 lbs",
    quote: "The coaching made all the difference. It's not just about the workouts—it's about changing how you think about food and fitness. Best investment I've made.",
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop",
    date: "Jan 12, 2025",
  },
  {
    name: "Sarah L., Lost 28 lbs",
    quote: "Finally, a program that doesn't make me feel like I'm starving or spending hours at the gym. The personalized approach actually fits my busy schedule.",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&h=300&fit=crop",
    date: "Nov 02, 2024",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[index];

  return (
    <section className="py-16 bg-white font-robotoCondensed">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Clients Say About Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-robotoCondensed">
            Real people. Real transformations. Real results.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center"
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {testimonial.name}
              </h3>

              {/* Quote */}
              <p className="text-gray-900 text-xl leading-relaxed max-w-3xl mx-auto mb-6 px-4 font-robotoCondensed">
                "{testimonial.quote}"
              </p>

              {/* Date */}
              <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm font-robotoCondensed">
                {testimonial.date}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <svg
              className="w-5 h-5 text-gray-700 hover:text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <svg
              className="w-5 h-5 text-gray-700 hover:text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const dir = idx > index ? 1 : -1;
                setDirection(dir);
                setIndex(idx);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === index
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-blue-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}