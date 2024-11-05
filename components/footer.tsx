import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">About Us</h3>
            <p className="text-sm">
              Mikhvision Digi Solutions LLP is your trusted partner for comprehensive digital solutions,
              delivering excellence in web development, app creation, and digital marketing.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Website Development',
                'App Development',
                'Content Writing & SEO',
                'Social Media Marketing',
                'Domain and Hosting',
                'Logo Design',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href={`#services`}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-teal-400" />
                <a href="mailto:info@mikhvision.com" className="text-sm hover:text-teal-400">
                  info@mikhvision.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-teal-400" />
                <a href="tel:+1234567890" className="text-sm hover:text-teal-400">
                  +91 8523031364
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span className="text-sm">SRINIVAS NAGAR COLONY,ECIL POST, Medchal - Malkajgiri,
Telangana, 500062</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/mikhvision' },
                { icon: Instagram, href: 'https://www.instagram.com/mikhvision/' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/mikhvision' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Mikhvision Digi Solutions LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}