export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Free Diagnostic',
      description: 'We assess your current position, identify gaps, and provide a clear picture of your exit readiness.',
    },
    {
      number: '02',
      title: 'Strategic Blueprint',
      description: 'A customized roadmap balancing technology, operations, and M&A to maximize your enterprise value.',
    },
    {
      number: '03',
      title: 'Value Engineering',
      description: 'We implement improvements that buyers pay premiums for: EBITDA growth, reduced dependency, and digital maturity.',
    },
    {
      number: '04',
      title: 'Exit Execution',
      description: 'From buyer outreach to deal closing, we orchestrate every step to ensure you exit on your terms.',
    },
  ];

  return (
    <div className="bg-[#05282a] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[60px]">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#19b2bc] tracking-[0.2em] mb-4 text-xs md:text-sm">OUR PROCESS</p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] tracking-tight text-white mb-6 px-4">
            Four Steps to Your <span className="text-[#19b2bc]">Premium Exit</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-[#00686f] text-[56px] md:text-[80px] leading-none mb-4 md:mb-6" style={{ fontWeight: 100 }}>
                {step.number}
              </div>
              
              <h3 className="text-white text-xl md:text-2xl mb-3 md:mb-4">
                {step.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-[#00686f]"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <button className="bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-6 md:px-[35px] py-3 md:py-[15px] transition-colors w-full sm:w-auto text-sm md:text-base">
            START YOUR EXIT JOURNEY
          </button>
        </div>
      </div>
    </div>
  );
}
