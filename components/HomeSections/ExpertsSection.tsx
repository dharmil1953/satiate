"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const experts = [
    {
        name: "Shavina",
        role: "Head of Nutrition & Dietetics",
        quote: "Registered Dietitian with 8+ years helping clients build sustainable eating habits. Shantna creates personalized meal plans that work with your lifestyle, not against it",
        image: "/Shavina_img.png",
    },
    {
        name: "Vicky",
        role: "Head of Mindset Coaching",
        quote: "Certified Personal Trainer and Movement Specialist with expertise in creating adaptive workout plans. Vicky designs programs that challenge you while preventing injury and burnout",
        image: "/vicky_img.png",
    },
    {
        name: "Ali",
        role: "Lead Exercise Physiologist",
        quote: "Licensed Wellness Coach specializing in habit formation and emotional wellness. Ali helps clients overcome mental barriers and build the confidence needed for lasting change",
        image: "/Ali_img.png",
    },
];

const ExpertsSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-10 lg:px-16">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase mb-4 block">
                        Our Team
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-playfair">
                        Backed by experts, built for you
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {experts.map((expert, index) => (
                        <motion.div
                            key={expert.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group text-center"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg group-hover:border-blue-100 transition-colors duration-300">
                                <Image
                                    src={expert.image}
                                    alt={expert.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair">{expert.name}</h3>
                            <p className="text-blue-600 font-medium mb-4 uppercase text-sm tracking-wide">{expert.role}</p>

                            <div className="relative p-1 bg-gray-50 rounded-2xl">
                                
                                <p className="text-gray-600 italic leading-relaxed relative z-10 font-sans">
                                    "{expert.quote}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertsSection;
