import React from "react";
import { FaCode, FaPalette, FaVideo, FaLaptopCode } from "react-icons/fa"; // Importing icons from react-icons

function Services() {
  const services = [
    {
      id: 1,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs.",
      icon: <FaLaptopCode className="text-6xl text-blue-500" />,
    },
    {
      id: 2,
      title: "Website Design",
      description: "Modern and responsive websites designed for all devices.",
      icon: <FaCode className="text-6xl text-green-500" />,
    },
    {
      id: 3,
      title: "Video Editing",
      description:
        "Professional video editing services for businesses and creators.",
      icon: <FaVideo className="text-6xl text-red-500" />,
    },
    {
      id: 4,
      title: "Graphic Design",
      description:
        "Creative and unique graphic designs to enhance your brand identity.",
      icon: <FaPalette className="text-6xl text-yellow-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore the wide range of services we offer.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 group"
          >
            <div className="flex justify-center items-center mb-4">
              {/* Service Icon */}
              <div className="group-hover:rotate-12 transition-transform duration-500">
                {service.icon}
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center group-hover:text-blue-500 transition-colors duration-300">
              {service.title}
            </h2>
            <p className="text-lg text-gray-600 text-center">
              {service.description}
            </p>

            {/* Hover Effect */}
            <div className="mt-4 text-center">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
