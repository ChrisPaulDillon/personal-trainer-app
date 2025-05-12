import { Testimonials } from '@/components/testimonials';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { AboutPreview } from '@/components/about-preview';
import { CTA } from '@/components/cta';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutPreview />
      <Services />
      <Testimonials />
      <CTA />
    </div>
  );
}