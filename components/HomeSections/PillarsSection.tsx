"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    id: "eat",
    title: "EAT",
    subtitle: "Enjoy satisfying meals",
    description:
      "Get personalized meal plans that fit your tastes and goals. No restrictive diets—just real food that fuels your body and satisfies your cravings",
    image: "/eat.png",
    color: "bg-white",
    textColor: "text-green-600",
  },
  {
    id: "move",
    title: "MOVE",
    subtitle: "Fun workouts you can stick to",
    description:
      "Choose from strength training, yoga, HIIT, or low-impact options. Every workout adapts to your fitness level and schedule, so you'll actually look forward to moving",
    image: "/move.png",
    color: "bg-white",
    textColor: "text-blue-600",
  },
  {
    id: "feel",
    title: "FEEL",
    subtitle: "Mindset coaching to build confidence",
    description:
      "Work with wellness coaches who help you overcome emotional eating, build healthy habits, and develop the confidence to maintain your results for life",
    image: "/feel.png",
    color: "bg-white",
    textColor: "text-purple-600",
  },
];

const PillarsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-wider uppercase mb-4 block font-robotoCondensed"
          >
            Our Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-robotoCondensed"
          >
            Your all-in-one coach to lasting success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 font-robotoCondensed"
          >
            Satiate helps you transition from weight loss to long-term
            maintenance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`${pillar.color} rounded-3xl p-8 transition-all duration-300 flex flex-col items-center text-center`}
            >
              <div className="h-24 w-24 relative ">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3
                className={`text-4xl font-bold mb-2 ${pillar.textColor} font-robotoCondensed`}
              >
                {pillar.title}
              </h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                {pillar.subtitle}
              </h4>
              <p className="text-gray-600 leading-relaxed font-robotoCondensed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
