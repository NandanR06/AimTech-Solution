import React from "react";
import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 pt-[120px] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2">We'd love to hear from you!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-indigo-600" />
              <span className="text-gray-700 text-lg">contact@aimtechsolutions.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-green-600" />
              <span className="text-gray-700 text-lg">+91 98765 43210</span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-red-500 mt-1" />
              <span className="text-gray-700 text-lg">
                AimTech Solutions, 3rd Floor, Tech Park, Bangalore - 560001, India
              </span>
            </div>

            {/* Social buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/aimtechsolutions"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
              >
                <Instagram size={20} />
                Instagram
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                Request a Quote
              </button>
              <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
                Schedule a Call
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={4}
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
