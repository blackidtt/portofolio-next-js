'use client';

import { portfolioData } from '@/data/portfolio';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>

        <div className="space-y-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {about.intro}
          </p>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {about.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
