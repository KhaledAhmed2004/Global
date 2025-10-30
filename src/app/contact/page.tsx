"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubjectChange = (subject: string) => {
    setFormData({ ...formData, subject });
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel - Contact Info */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
              <p className="text-purple-100 mb-8">
                Say something to start a live chat!
              </p>

              {/* Contact Items */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5" />
                  <span>+1 012 3456 789</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5" />
                  <span>demo@gmail.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>
                    132 Dartmouth Street Boston,
                    <br />
                    Massachusetts 02156 United States
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-12">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/30 rounded-full -mb-24 -mr-24"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/40 rounded-full -mb-16 -mr-16"></div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="bg-white p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-b-2 focus:border-gray-900 focus:ring-0 outline-none transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-b-2 focus:border-gray-900 focus:ring-0 outline-none transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-b-2 focus:border-gray-900 focus:ring-0 outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-b-2 focus:border-gray-900 focus:ring-0 outline-none transition"
                    placeholder="+1 012 3456 789"
                  />
                </div>
              </div>

              {/* Subject Radio Buttons */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Subject?
                </label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {[
                    "General Inquiry",
                    "Support",
                    "Franchise",
                    "Partnership",
                  ].map((subject) => (
                    <label
                      key={subject}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="subject"
                        value={subject}
                        checked={formData.subject === subject}
                        onChange={() => handleSubjectChange(subject)}
                        className="w-4 h-4 accent-gray-900 border-gray-300 focus:ring-0"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {subject}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-0 py-2 border-0 border-b border-gray-300 rounded-none bg-transparent focus:border-b-2 focus:border-gray-900 focus:ring-0 outline-none transition resize-none"
                  placeholder="Write your message.."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
