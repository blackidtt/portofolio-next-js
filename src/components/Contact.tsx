'use client';

import { portfolioData } from '@/data/portfolio';

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Contact
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Feel free to contact me via email, phone, or LinkedIn for collaboration opportunities and new projects
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:border-blue-500 transition-colors">
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-white break-words">{contact.email}</p>
            </a>
          )}

          {contact.whatsapp && (
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:border-blue-500 transition-colors">
              <p className="text-sm text-gray-500 dark:text-gray-400">Whatsapp</p>
              <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">+{contact.whatsapp}</p>
            </a>
          )}

          {contact.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-left hover:border-blue-500 transition-colors">
              <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
              <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-white">Maftuh Ahnan</p>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
