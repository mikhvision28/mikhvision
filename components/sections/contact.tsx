'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);

    emailjs
      .sendForm(
        "service_pm2izif",
        "template_dmuaicj",
        form.current!,
        "oOQYvh7mBbxFAGSMc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully");
          (e.target as HTMLFormElement).reset();
          setLoader(false);
        },
        (error) => {
          console.log(error.text);
          setMessage("An error occurred, Please try again");
          setLoader(false);
        }
      );
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Ready to start your digital journey? We&apos;re here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                      <Mail className="h-5 w-5 text-teal-600 dark:text-teal-300" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Email
                      </p>
                      <a
                        href="mailto:info@mikhvision.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-teal-600"
                      >
                        info@mikhvision.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                      <Phone className="h-5 w-5 text-teal-600 dark:text-teal-300" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Phone
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-600 dark:text-gray-300 hover:text-teal-600"
                      >
                        +91 8523031364
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                      <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-300" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Address
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                      SRINIVAS NAGAR COLONY,ECIL POST, Medchal - Malkajgiri, Telangana, 500062
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="How can we help?" required />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={6}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700"
                disabled={loader}
              >
                {loader ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
              {message && (
                <p className={`text-center ${
                  message.includes("error") ? "text-red-500" : "text-green-500"
                }`}>
                  {message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
