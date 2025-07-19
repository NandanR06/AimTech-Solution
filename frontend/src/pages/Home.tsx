import React from 'react';
import { Quote, Briefcase, Code, Server } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-[75px] font-sans bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#0F172A] text-white py-28 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Tech-Driven Solutions for Modern Businesses
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Welcome to AimTech Solution – your partner in Web Development, Automation & DevOps.
        </p>
      </section>

      {/* About Snapshot */}
      <section className="bg-white py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">About AimTech</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          AimTech is a forward-thinking tech company offering innovative web solutions, automation services,
          and DevOps strategies to streamline operations and accelerate digital growth.
        </p>
      </section>

      {/* Services */}
      <section className="bg-[#F8FAFC] py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Code size={40} className="text-blue-600 mx-auto" />,
              title: 'Web Development',
              desc: 'Modern, scalable, and responsive web solutions tailored to your business needs.',
            },
            {
              icon: <Server size={40} className="text-green-600 mx-auto" />,
              title: 'DevOps Solutions',
              desc: 'Streamline CI/CD, automate deployments, and improve infrastructure performance.',
            },
            {
              icon: <Briefcase size={40} className="text-purple-600 mx-auto" />,
              title: 'Business Automation',
              desc: 'Optimize workflows by automating repetitive tasks with reliable tech solutions.',
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-800">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            {
              quote: "AimTech transformed our outdated site into a high-performing digital hub.",
              name: 'John Doe, CEO of TechNova',
            },
            {
              quote: "Their DevOps automation cut our deployment time in half!",
              name: 'Jane Smith, CTO of StartupX',
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow hover:shadow-md transition text-left"
            >
              <Quote size={32} className="text-blue-400 mb-4" />
              <p className="text-gray-700 italic text-lg">"{testimonial.quote}"</p>
              <p className="mt-4 text-sm text-gray-500">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-800 py-20 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Tech Strategy?</h2>
        <p className="mb-8 text-lg text-gray-300">Let’s build something great together.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
          <a
            href="/quote"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
