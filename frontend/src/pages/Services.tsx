// src/components/Services.tsx
import React from "react";
import {
  Code,
  ServerCog,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <Code className="w-8 h-8 text-indigo-600" />,
    points: [
      "Frontend & Backend Development",
      "Full-stack Projects",
      "Business & E-commerce Sites",
      "Portfolio Websites",
    ],
  },
  {
    title: "Automation & DevOps",
    icon: <ServerCog className="w-8 h-8 text-green-600" />,
    points: [
      "CI/CD Pipeline Setup",
      "Server Automation",
      "Monitoring & Alerts",
      "Infrastructure as Code (IaC)",
    ],
  },
  {
    title: "Custom Projects",
    icon: <Wrench className="w-8 h-8 text-pink-600" />,
    points: [
      "Game Tournament Platforms",
      "Chat/Dating Apps",
      "Instagram-integrated Platforms",
    ],
  },
];

const Services: React.FC = () => {
  return (
    <div className=" px-6 bg-gray-100 pt-[138px] pb-44" id="services">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-2">
          Empowering businesses with tailored tech solutions.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-700">
                {service.title}
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {service.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
