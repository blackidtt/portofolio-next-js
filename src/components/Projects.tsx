'use client';

import { useState } from 'react';
import { portfolioData } from '@/data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const openProject = (projectId: number) => {
    setSelectedProjectId(projectId);
    setGalleryIndex(0);
  };

  const closeModal = () => {
    setSelectedProjectId(null);
  };

  const selectedProject = projects.find((project) => project.id === selectedProjectId);
  const images = selectedProject?.images ?? [];
  const imageCount = images.length;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              onClick={() => openProject(project.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openProject(project.id);
                }
              }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                  <span>Detail</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={closeModal}
          >
            <div
              className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full border border-gray-200 bg-white px-3 py-2 text-gray-700 shadow-sm transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6 px-6 py-6">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                    <img
                      src={images[galleryIndex]}
                      alt={`${selectedProject.title} screenshot ${galleryIndex + 1}`}
                      className="h-[420px] w-full object-contain bg-black/5 dark:bg-white/5"
                    />

                    {imageCount > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => setGalleryIndex((prev) => (prev - 1 + imageCount) % imageCount)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-gray-900 shadow-md transition hover:bg-white dark:bg-gray-900/90 dark:text-white"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          onClick={() => setGalleryIndex((prev) => (prev + 1) % imageCount)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-gray-900 shadow-md transition hover:bg-white dark:bg-gray-900/90 dark:text-white"
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>

                  {imageCount > 1 && (
                    <div className="flex items-center justify-center gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setGalleryIndex(index)}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            index === galleryIndex
                              ? 'bg-blue-600 dark:bg-blue-400'
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedProject.details}
                  </p>

                  {/* <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Fitur 1</h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{selectedProject.featureOne}</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Fitur 2</h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{selectedProject.featureTwo}</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Fitur 3</h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{selectedProject.featureThree}</p>
                    </div>
                  </div> */}

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                    >
                      Buka Proyek
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
