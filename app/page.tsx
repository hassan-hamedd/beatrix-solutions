import { HeroSection } from '@/components/hero-section';
import { AboutPreview } from '@/components/about-preview';
import { Services } from '@/components/services';
import { Testimonials } from '@/components/testimonials';
import { CTASection } from '@/components/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <AboutPreview />
      <Services />
      <Testimonials />
      <CTASection />
    </div>
  );
}