'use client';

import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact } = portfolioData;

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">{'Maftuh Ahnan'}</h3>
            <p className="text-gray-400">Software Engineer | Full Stack Web Developer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              <a href={`mailto:${contact.email}`} className="hover:text-blue-400 transition-colors">
                {contact.email}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Maftuh Ahnan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
