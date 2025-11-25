import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function CaseStudiesSection() {
  const cases = [
    {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      category: 'MANUFACTURING',
      title: 'From $8M to $14M in 18 Months',
      description: 'How we transformed operational chaos into a premium exit for a mid-market manufacturer.',
    },
    {
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
      category: 'PROFESSIONAL SERVICES',
      title: 'Breaking Owner Dependency',
      description: 'Strategic automation and leadership restructure increased valuation by 2.3x.',
    },
    {
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
      category: 'TECHNOLOGY',
      title: 'The Roll-Up Strategy',
      description: 'Acquiring competitors and integrating operations to dominate a niche market.',
    },
  ];

  return (
    <div className="bg-[#f8f8f8] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[60px]">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#00686f] tracking-[0.2em] mb-4 text-xs md:text-sm">SUCCESS STORIES</p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] tracking-tight mb-6 px-4">
            Real Exits. <span className="text-[#00686f]">Real Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <ImageWithFallback
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5 md:p-6">
                <p className="text-[#00686f] text-xs md:text-sm tracking-[0.15em] mb-3">
                  {caseStudy.category}
                </p>
                
                <h3 className="text-xl md:text-2xl mb-3">
                  {caseStudy.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  {caseStudy.description}
                </p>
                
                <button className="text-[#00686f] hover:text-[#004d52] transition-colors inline-flex items-center gap-2 group-hover:gap-3 text-sm md:text-base">
                  Read Case Study
                  <ArrowRight size={16} className="transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
