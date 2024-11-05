'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const tools = [
  {
    name: 'React',
    category: 'Web Development',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg'
  },
  {
    name: 'Next.js',
    category: 'Web Development',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg'
  },
  {
    name: 'Vue',
    category: 'Web Development',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg'
  },
  {
    name: 'Node.js',
    category: 'Web Development',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'WordPress',
    category: 'Web Development',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg'
  },
  {
    name: 'Python',
    category: 'Web Development',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
  },
  {
    name: 'PHP',
    category: 'Web Development',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg'
  },
  {
    name: 'Shopify',
    category: 'Web Development',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/shopify/shopify-original.svg'
  },
  {
    name: 'Flutter',
    category: 'App Development',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg'
  },
  {
    name: 'Figma',
    category: 'Design',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg'
  },
  {
    name: 'Adobe',
    category: 'Design',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/adobe/adobe-original.svg'
  },
  {
    name: 'AWS',
    category: 'Cloud',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg'
  },
  {
    name: 'Azure',
    category: 'Cloud',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg'
  },
  {
    name: 'GCP',
    category: 'Cloud',
    image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg'
  }
];

const categories = ['Web Development', 'App Development', 'Design', 'Cloud'];

export function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-12 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Tools & Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We use cutting-edge technologies to deliver exceptional results
          </p>
        </motion.div>

        <div className="mt-8 sm:mt-16">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:space-x-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tools Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          >
            {tools
              .filter((tool) => tool.category === activeCategory)
              .map((tool) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative w-8 h-8 sm:w-12 sm:h-12">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-200">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}