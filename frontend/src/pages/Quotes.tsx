// src/components/RequestQuote.tsx
import React, { useState } from "react";

const Quotes: React.FC = () => {
  const [formData, setFormData] = useState({
    serviceType: "",
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
    file: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, file: e.target.files?.[0] || null }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Handle form submission logic here (e.g. send to backend)
  };

  return (
    <section className="bg-[#f3f6f9] py-16 pt-[138px] " id="request-quote">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Start Your Project</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block font-medium mb-1">Select Service</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">-- Choose Service --</option>
              <option value="Web Development">Web Development</option>
              <option value="DevOps">Automation & DevOps</option>
              <option value="Custom Project">Custom Project</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <input
            name="company"
            type="text"
            placeholder="Company / Organization"
            value={formData.company}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="budget"
              type="text"
              placeholder="Estimated Budget (USD)"
              value={formData.budget}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
            <input
              name="timeline"
              type="text"
              placeholder="Expected Timeline (e.g. 2 weeks)"
              value={formData.timeline}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <textarea
            name="message"
            placeholder="Describe your project"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-lg p-3"
          />

          <div>
            <label className="block mb-1 font-medium">Upload File (optional)</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default Quotes;
