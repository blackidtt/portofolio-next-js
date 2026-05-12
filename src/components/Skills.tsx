'use client';

import { portfolioData } from '@/data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Frontend Development', items: skills.frontend },
    { title: 'Backend Development', items: skills.backend },
    { title: 'Enterprise Tools & Integration', items: skills.tools },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
