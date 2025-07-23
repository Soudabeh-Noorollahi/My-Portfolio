// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function ProfessionalExperience() {
  return (
    <div className="px-10 xl:px-16 mt-10">
      <motion.h3 className="text-2xl font-semibold w-fit text-neutral-700 mx-auto mb-6 border-b-2 pb-2 border-emerald-600">
        Professional Experience
      </motion.h3>
      <motion.div className="bg-white rounded-lg shadow-xl py-2 px-3">
        <motion.ol
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8 }}
          className="relative border-s border-gray-200 dark:border-gray-700"
        >
          {/* My Market  App */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Jun 2025 - Present
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              My Market App – Team Project | Frontend & MongoDB by Me
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              A full-featured marketplace platform for posting and browsing
              classified ads – inspired by Divar.{" "}
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <li>
                Developed the entire frontend using React, TailwindCSS, and
                React Query
              </li>
              <li>
                Designed responsive UI with modular components and clean folder
                structure
              </li>
              <li>
                Implemented OTP-based authentication and cookie-based login flow
              </li>
              <li>
                Handled image uploads with FormData and real-time preview before
                submission
              </li>
              <li>
                Set up and tested MongoDB integration with the backend API
              </li>
              <li>
                Collaborated with a teammate who developed the backend using
                Express.js
              </li>
            </ul>
          </motion.li>

          {/* Portfolio */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Jun 2025
            </time>
            <h3
              className="text-md font-semibold text-, and GraphQL for backend APIs</li>
              <li>gray-500"
            >
              Personal Project
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Portfolio Website
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <li>Designed UI from scratch using React and Tailwind CSS</li>
              <li>
                Implemented smooth and interactive animations with Framer Motion
              </li>
              <li>Modularized components for better maintainability</li>
              <li>Built fully responsive layout for all screen sizes</li>
              <li>Customized icons, theme colors, and content</li>
              <li>Deployed the website live using Vercel</li>
            </ul>
          </motion.li>

          {/* Flashcards */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Mar 2025 – Jun 2025
            </time>
            <h3 className="text-md font-semibold text-gray-500">
              Volunteer Team Project – Full-stack
            </h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Flashcard App for Learning German Verbs with Prepositions (C1
              Level)
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <li>Designed and implemented a full-stack flashcard platform</li>
              <li>
                Built a React-based bilingual UI with RTL and responsive layout
              </li>
              <li>
                Integrated Apollo Client with a GraphQL backend for dynamic data
              </li>
              <li>
                Structured flashcards by verb categories and preposition usage
                at C1 level
              </li>
              <li>
                Collaborated in a volunteer team to deliver educational tools
                and content
              </li>
            </ul>
          </motion.li>

          {/* Freelance */}
          <motion.li
            className="ms-4 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2024 - Present
            </time>
            <h3 className="text-md font-semibold text-gray-500">Freelance</h3>
            <h3 className="text-lg font-semibold text-gray-900">
              Frontend / Full-stack Developer
            </h3>
            <ul className="list-disc ml-6 mt-2 text-gray-500 dark:text-gray-400 space-y-1 text-base font-normal">
              <li>
                <strong>Divar App:</strong> UI for classified ads platform
                (goods, services, businesses)
              </li>
              <li>
                <strong>Todo App (Full-stack):</strong> Frontend app with
                localStorage-based persistence
              </li>
              <li>
                <strong>Crypto App:</strong> Frontend dashboard with exchange
                rate API integration
              </li>
              <li>
                <strong>CRM App (Full-stack):</strong> Customer management
                interface + backend forms
              </li>
            </ul>
          </motion.li>
        </motion.ol>
      </motion.div>
    </div>
  );
}

export default ProfessionalExperience;
