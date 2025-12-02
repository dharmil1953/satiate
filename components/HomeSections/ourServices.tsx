"use client"
import { useState } from 'react';

const OurServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "GROUP FITNESS",
      icon: "👥",
      description: "Customized workout programs designed specifically for your body type and fitness goals.",
      details: "Join energetic group sessions with personalized attention. Our trainers adapt exercises to match your body's needs, ensuring optimal results while maintaining proper form and safety.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
    },
    {
      title: "PERSONAL TRAINER",
      icon: "🏋️",
      description: "One-on-one training sessions tailored to your unique physical requirements and objectives.",
      details: "Get dedicated attention from certified trainers who create workout plans based on your body composition, strength levels, and fitness aspirations. Track your progress with detailed metrics.",
      image: "https://images.unsplash.com/photo-1549476464-37392f717541?w=800&q=80"
    },
    {
      title: "CARDIO PROGRAM",
      icon: "❤️",
      description: "Comprehensive nutrition plans designed to complement your body's metabolic needs.",
      details: "Receive personalized meal recommendations that fuel your workouts and support your goals. We track your calorie intake, macros, and nutritional balance to optimize your results.",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            OUR SERVICES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide personalized workout programs, nutrition plans, and comprehensive tracking 
            to help you achieve your fitness goals effectively.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-96 overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-75"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-center p-6 text-white z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center tracking-wide">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-center text-sm md:text-base mb-4 px-2 transition-opacity duration-300">
                  {service.description}
                </p>

                {/* Extra Info on Hover */}
                <div
                  className={`text-center text-sm px-4 transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'opacity-100 max-h-48 mt-2'
                      : 'opacity-0 max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="leading-relaxed border-t border-white/30 pt-4">
                    {service.details}
                  </p>
                </div>

                {/* Learn More Button - appears on hover */}
                <div
                  className={`transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'opacity-100 translate-y-0 mt-4'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Tracking Info */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Comprehensive Data Tracking
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We save and analyze all your fitness data including calories burned, calories consumed, 
            workout intensity, progress photos, body measurements, and performance metrics. 
            Get detailed insights to optimize your fitness journey.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600">📊</div>
              <p className="mt-2 text-sm font-semibold">Calorie Tracking</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600">🔥</div>
              <p className="mt-2 text-sm font-semibold">Burn Analysis</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-purple-600">📈</div>
              <p className="mt-2 text-sm font-semibold">Progress Reports</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-red-600">💪</div>
              <p className="mt-2 text-sm font-semibold">Body Metrics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;