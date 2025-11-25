export function BrutalMathSection() {
  return (
    <div className="bg-[#f8f8f8] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[60px]">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] tracking-tight mb-4 md:mb-6 px-4">
            The Brutal Math of <span className="text-[#00686f]">Missed Preparation</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg px-4">
            Most exit advisors won't show you these numbers. They should terrify you — and motivate you.
          </p>
        </div>

        <div className="bg-white border border-[#00686f]/20 rounded-lg p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="text-[56px] md:text-[72px] lg:text-[96px] text-[#00686f] leading-none mb-4" style={{ fontWeight: 100 }}>
                75%
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Of businesses that go to market fail to sell. Not because they're bad businesses, 
                but because buyers see dependency, gaps, and chaos.
              </p>
            </div>

            <div>
              <div className="text-[56px] md:text-[72px] lg:text-[96px] text-[#00686f] leading-none mb-4" style={{ fontWeight: 100 }}>
                30%
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Of valuation is lost due to rushed exits, weak documentation, and poor preparation. 
                That's millions left on the table.
              </p>
            </div>

            <div>
              <div className="text-[56px] md:text-[72px] lg:text-[96px] text-[#00686f] leading-none mb-4" style={{ fontWeight: 100 }}>
                60%
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                Of owners regret their exit within five years, not because they sold, but because 
                they sold unprepared and undervalued.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 bg-[#00686f]/10 border-l-4 border-[#00686f] p-6 md:p-8 rounded">
          <p className="text-base md:text-lg text-gray-800">
            <span className="font-semibold">That's why Centaura is different.</span> We don't just close deals. 
            We close the gap between what your business is today and what it's truly worth tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
}
