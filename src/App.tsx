import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { BrutalMathSection } from './components/BrutalMathSection';
import { ImageGallery } from './components/ImageGallery';
import { WhyCentauraSection } from './components/WhyCentauraSection';
import { ServicesGrid } from './components/ServicesGrid';
import { ComparisonTable } from './components/ComparisonTable';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { PeopleBehindStrategy } from './components/PeopleBehindStrategy';
import { WhyWeBuiltSection } from './components/WhyWeBuiltSection';
import { ProcessSection } from './components/ProcessSection';
import { FinalWordSection } from './components/FinalWordSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      <BrutalMathSection />
      <ImageGallery />
      <WhyCentauraSection />
      <ServicesGrid />
      <ComparisonTable />
      <CaseStudiesSection />
      <PeopleBehindStrategy />
      <WhyWeBuiltSection />
      <ProcessSection />
      <FinalWordSection />
      <Footer />
    </div>
  );
}