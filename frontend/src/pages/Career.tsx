import React from "react";

const jobOpenings = [
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote",
    description: "React.js, Tailwind CSS, REST APIs",
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Bangalore",
    description: "Node.js, MongoDB, Express.js",
  },
  {
    title: "Digital Marketing Intern",
    type: "Internship",
    location: "Remote",
    description: "Social Media, SEO, Content Writing",
  },
];

const Career: React.FC = () => {
  return (
    <div className="px-6 py-16 pt-[138px] bg-gray-50" id="careers">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Join Our Team</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We’re building a team of passionate individuals who love technology, innovation, and a great work culture.
        </p>
      </div>

      {/* Job Listings */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Current Openings</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {jobOpenings.map((job, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-bold text-indigo-600 mb-1">{job.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{job.type} · {job.location}</p>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-indigo-700 text-sm">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Culture */}
      <div className="bg-white p-8 rounded-xl shadow mb-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Culture</h3>
        <p className="text-gray-600">
          At AimTech Solutions, we foster creativity, teamwork, and personal growth. Our team enjoys flexible hours, remote work opportunities, and a collaborative environment that encourages innovation.
        </p>
      </div>

      {/* Application Form */}
      <div className="bg-white p-8 rounded-xl shadow max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">General Application</h3>
        <form className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="border p-3 rounded w-full" required />
            <input type="email" placeholder="Email" className="border p-3 rounded w-full" required />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Role Interested In" className="border p-3 rounded w-full" />
            <input type="text" placeholder="LinkedIn or Portfolio" className="border p-3 rounded w-full" />
          </div>
          <textarea placeholder="Why do you want to join us?" className="border p-3 rounded w-full h-32" />
          <div>
            <label className="block text-sm mb-2">Upload Resume</label>
            <input type="file" className="border p-2 w-full rounded focus:outline" />
          </div>
          <button className="w-full bg-gray-600 text-white py-3 rounded hover:bg-indigo-700">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
