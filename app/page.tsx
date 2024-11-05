import { HeroSection } from '@/components/sections/hero';
import  AboutSection  from '@/components/sections/about';
import { ServicesSection } from '@/components/sections/services';
import { ToolsSection } from '@/components/sections/tools';
import { ClientsSection } from '@/components/sections/clients';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ToolsSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
