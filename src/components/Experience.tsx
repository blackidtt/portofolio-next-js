'use client';

import { portfolioData } from '@/data/portfolio';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Experience & Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Work Experience</h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={job.id} className="border-l-4 border-blue-600 pl-6 pb-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">{job.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{job.period}</p>
                  <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-4 border-green-600 pl-6 pb-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-green-600 dark:text-green-400 font-semibold">{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.yearIn} - {edu.yearOut} | GPA: {edu.gpa}</p>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
