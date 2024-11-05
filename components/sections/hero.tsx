'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Palette, Search, Share2, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Transform Your Digital Presence with{' '}
            <span className="gradient-text">Innovative Solutions</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            We craft cutting-edge digital solutions that help businesses thrive in the modern world.
            From web development to digital marketing, we're your one-stop destination for all things digital.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {[
            { icon: Globe, label: 'Web Dev' },
            { icon: Smartphone, label: 'App Dev' },
            { icon: Search, label: 'SEO' },
            { icon: Share2, label: 'Social Media' },
            { icon: Code, label: 'Hosting' },
            { icon: Palette, label: 'Design' },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="h-6 w-6 text-teal-600" />
              <span className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-200">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}