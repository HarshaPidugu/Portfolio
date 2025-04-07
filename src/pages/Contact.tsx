import React from 'react';
import { Mail, Linkedin, PhoneCall, Send } from 'lucide-react';

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#1f2937] flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Section - Contact Info */}
        <div className="text-white space-y-10 px-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Feel free to reach out if you'd like to discuss potential collaborations, job opportunities, or just say hi.
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="mailto:harshapidugu12@gmail.com"
              className="flex items-center space-x-4 text-slate-300 hover:text-blue-400 transition-colors text-lg"
            >
              <Mail size={26} />
              <span>harshapidugu12@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/harshapidugu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-slate-300 hover:text-blue-400 transition-colors text-lg"
            >
              <Linkedin size={26} />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="#contact"
              className="flex items-center space-x-4 text-slate-300 hover:text-blue-400 transition-colors text-lg"
            >
              <PhoneCall size={26} />
              <span>+91 8074771839</span>
            </a>
          </div>

          <div className="bg-slate-800/70 p-6 rounded-xl mt-6">
            <h3 className="text-xl font-semibold text-white mb-2">Looking for Opportunities</h3>
            <p className="text-slate-400 text-base">
              Actively aiming to build a career in data and analytics, with a strong interest in solving business problems using scalable, data-driven solutions and continuously learning modern data technologies.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="space-y-6 px-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-5 py-3 rounded-xl bg-slate-800 text-white border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-5 py-3 rounded-xl bg-slate-800 text-white border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-5 py-3 rounded-xl bg-slate-800 text-white border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            <Send size={22} />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;