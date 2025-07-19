import React from "react";
import { FolderOpen, Quote } from "lucide-react";
import image1 from "../assets/pexels-2150381842-33050343.jpg";
import image2 from "../assets/pexels-michal-petras-2152077115-32994267.jpg";
import image3 from "../assets/pexels-muzin-kahraman-789215623-32990867.jpg";
import image4 from "../assets/pexels-muzin-kahraman-789215623-32990863.jpg";


const projects = [
  {
    name: "Game Tournament Platform",
    problem: "Lack of centralized platform to host, manage and automate esports tournaments.",
    solution: "Developed a responsive full-stack web app with user registration, live brackets, score updates, and admin tools.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Socket.IO"],
    screenshots: [
      image1,image2
    ],
    testimonial: {
      quote: "The platform has transformed our tournament management. Easy to use and highly scalable!",
      author: "Ravi Kumar, GamingHub CEO",
    },
  },
  {
    name: "Chat/Dating App",
    problem: "Users face issues finding reliable, real-time chat applications that are secure and scalable.",
    solution: "Created a mobile-responsive app with real-time chat, user profile management, and swipe-based matching.",
    techStack: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    screenshots: [
      image3,
      image4],
    testimonial: null,
  },
];

const Portpolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 px-6 bg-gray-100 pt-[138px]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 flex justify-center items-center gap-2">
          <FolderOpen className="w-8 h-8 text-indigo-600" />
         Case Studies
        </h2>
        <p className="text-gray-600 mt-2">
          Explore how we've helped businesses grow with innovative tech solutions.
        </p>
      </div>

      <div className="grid gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {project.name}
            </h3>

            <div className="space-y-3 text-gray-700">
              <div>
                <strong className="text-indigo-600">Problem Statement:</strong>
                <p>{project.problem}</p>
              </div>

              <div>
                <strong className="text-indigo-600">Our Solution:</strong>
                <p>{project.solution}</p>
              </div>

              <div>
                <strong className="text-indigo-600">Tech Stack Used:</strong>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="text-indigo-600">Screenshots:</strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {project.screenshots.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      className="rounded-lg border shadow-sm"
                    />
                  ))}
                </div>
              </div>

              {project.testimonial && (
                <div className="mt-6 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                  <div className="flex items-start gap-2">
                    <Quote className="w-6 h-6 text-indigo-500 mt-1" />
                    <div>
                      <p className="italic text-gray-700">
                        “{project.testimonial.quote}”
                      </p>
                      <p className="mt-2 text-sm font-medium text-indigo-700">
                        — {project.testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portpolio;
