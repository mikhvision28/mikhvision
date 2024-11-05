import React from 'react';
import Image from 'next/image';

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="pt-28 pb-20 bg-white dark:bg-gray-800" aria-label="About Us">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Mikhvision
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image 
              src="logo.png" 
              alt="About Mikhvision Digi Solutions" 
              width={500} 
              height={500} 
              className="rounded-xl shadow-2xl"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Mikhvision Digi Solutions is a leading software company dedicated to delivering high-quality digital services to help businesses grow and succeed in an increasingly digital world. Our expertise spans a wide range of services, from web development and app creation to content marketing, SEO, and graphic design.
            </p>

            {/* Mission and Vision Cards */}
            <div className="space-y-6">
              {/* Mission Card */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our mission is to empower our clients by providing innovative solutions that are tailor-made for their needs. We are passionate about technology, creativity, and delivering results that exceed expectations.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Our Vision
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We envision a world where businesses of all sizes can leverage cutting-edge digital solutions to thrive in the competitive landscape, and where innovation and excellence are the hallmarks of progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;