'use client';

import { portfolioData } from '@/data/portfolio';

export default function Hero() {
  const { name, title, description, photo } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full text-center lg:text-left lg:max-w-2xl">
            <div className="space-y-6">
              <div>
                <p className="text-blue-600 dark:text-blue-400 text-lg font-semibold mb-2">Welcome to my portfolio</p>
                <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-4">
                  {name}
                </h1>
                <p className="text-2xl text-gray-600 dark:text-gray-400 mb-6">
                  {title}
                </p>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                  {description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-900 transition-colors font-semibold"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-blue-600/20 bg-white shadow-xl dark:bg-gray-900">
              <img
                src={photo}
                alt={`${name} profile`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
