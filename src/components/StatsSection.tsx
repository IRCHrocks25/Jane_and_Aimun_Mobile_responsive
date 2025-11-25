export function StatsSection() {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[60px]">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#00686f] tracking-[0.2em] mb-4 text-xs md:text-sm">TRANSFORMING EXITS</p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] tracking-tight mb-6 px-4">
            Designed to be <span className="text-[#00686f]">as competitive as possible</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          <div className="text-center">
            <div className="text-[48px] md:text-[72px] text-[#00686f] mb-2" style={{ fontWeight: 100 }}>75%</div>
            <p className="text-gray-600 text-sm md:text-base px-4">of businesses that go to market fail to sell</p>
          </div>
          
          <div className="text-center">
            <div className="text-[48px] md:text-[72px] text-[#00686f] mb-2" style={{ fontWeight: 100 }}>30%</div>
            <p className="text-gray-600 text-sm md:text-base px-4">of valuation lost due to rushed exits</p>
          </div>
          
          <div className="text-center">
            <div className="text-[48px] md:text-[72px] text-[#00686f] mb-2" style={{ fontWeight: 100 }}>2X</div>
            <p className="text-gray-600 text-sm md:text-base px-4">average valuation increase with proper preparation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
