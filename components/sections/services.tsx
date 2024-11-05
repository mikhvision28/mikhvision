'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Search,
  Share2,
  Server,
  Palette,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    description:
      'Custom websites that engage visitors and drive conversions. Expert in WordPress, React, and more.',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration'],
    href: '#',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS & Android', 'Cross-platform Apps', 'Progressive Web Apps'],
    href: '#',
  },
  {
    icon: Search,
    title: 'Content Writing & SEO',
    description:
      'Data-driven SEO strategies and compelling content that boost your online visibility.',
    features: ['Keyword Research', 'Content Strategy', 'Technical SEO'],
    href: '#',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'Strategic social media campaigns that build brand awareness and engage your audience.',
    features: ['Platform Management', 'Content Creation', 'Analytics'],
    href: '#',
  },
  {
    icon: Server,
    title: 'Domain and Hosting',
    description:
      'Reliable hosting solutions and domain management for optimal website performance.',
    features: ['Cloud Hosting', 'Domain Registration', 'SSL Certificates'],
    href: '#',
  },
  {
    icon: Palette,
    title: 'Logo & Graphic Design',
    description:
      'Creative design solutions that capture your brands essence and leave lasting impressions.',
    features: ['Brand Identity', 'Visual Design', 'Print Materials'],
    href: '#',
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            Everything you need to establish and grow your digital presence
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <service.icon className="h-8 w-8 text-teal-600" />
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-6 w-full bg-teal-600 hover:bg-teal-700"
                >
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
