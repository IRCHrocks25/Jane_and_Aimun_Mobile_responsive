import { ArrowRight } from 'lucide-react';

export function ServicesGrid() {
  const services = [
    {
      label: 'YOUR NORTH STAR',
      title: 'Strategic Roadmap',
      description: 'A clear, actionable blueprint that balances technology adoption, acquisitions, and succession planning to maximize exit value.',
      outcome: 'A tailored plan that aligns ambition with execution.',
    },
    {
      label: 'KNOW YOUR WORTH',
      title: 'Exit Readiness Diagnostic',
      description: 'In-depth review of financial, operational, and digital maturity to benchmark valuation and identify untapped potential and hidden risks.',
      outcome: 'Crystal-clear picture of where you stand and what you are truly worth.',
    },
    {
      label: 'CONFIDENCE IN EVERY DEAL',
      title: 'Technology Due Diligence',
      description: 'Assess IT infrastructure, cybersecurity, data quality, and scalability. Identify hidden risks and provide buyers with confidence.',
      outcome: 'Every deal built on confidence and transparency.',
    },
    {
      label: 'MAKING GROWTH STICK',
      title: 'Integrate & Optimise',
      description: 'Deploy AI-driven automation, refine processes, and integrate acquisitions seamlessly to deliver sustainable performance improvements.',
      outcome: 'Sustainable performance that buyers pay premiums for.',
    },
    {
      label: 'UNLOCK HIDDEN VALUE',
      title: 'Valuation Engineering',
      description: 'Transform operational inefficiencies into strategic advantages. Increase EBITDA, reduce owner dependency, and strengthen market position.',
      outcome: 'Higher multiples and competitive buyer interest.',
    },
    {
      label: 'EXECUTE WITH PRECISION',
      title: 'Exit Execution',
      description: 'From buyer outreach to deal structure and closing, we orchestrate every step to ensure you exit on your terms at maximum value.',
      outcome: 'The exit you deserve, executed flawlessly.',
    },
  ];

  return (
    <div className="bg-[#05282a] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[60px]">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#19b2bc] tracking-[0.2em] mb-4 text-xs md:text-sm">OUR SERVICES</p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] tracking-tight text-white mb-6 px-4">
            How We <span className="text-[#19b2bc]">Maximize Your Exit Value</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#00686f] p-6 md:p-8 rounded-lg hover:bg-[#007a82] transition-colors group"
            >
              <p className="text-[#19b2bc] text-xs md:text-sm tracking-[0.15em] mb-4">
                {service.label}
              </p>
              
              <h3 className="text-white text-xl md:text-2xl mb-4">
                {service.title}
              </h3>
              
              <p className="text-white/80 mb-6 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
              
              <div className="border-t border-white/20 pt-6">
                <p className="text-white/90 text-sm mb-4">
                  <span className="text-[#19b2bc] font-semibold">Outcome: </span>
                  {service.outcome}
                </p>
              </div>

              <button className="text-[#19b2bc] hover:text-white transition-colors inline-flex items-center gap-2 group-hover:gap-3 text-sm md:text-base">
                Learn More
                <ArrowRight size={16} className="transition-all" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
