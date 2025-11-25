import { ArrowRight } from 'lucide-react';

export function FinalWordSection() {
  return (
    <div className="relative bg-[#00686f] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[60px]">
        <div className="max-w-[600px]">
          <p className="text-white/90 tracking-[0.15em] text-xs mb-4 md:mb-6 uppercase">Final Word</p>
          
          <h2 className="text-white text-[28px] sm:text-[32px] md:text-[40px] leading-[1.2] mb-6 md:mb-8">
            The Exit You Build vs. The Exit You Get
          </h2>
          
          <div className="text-white mb-8 md:mb-10 space-y-1 text-sm md:text-base">
            <p>Here's the truth most advisors won't tell you:</p>
            <p>Your exit isn't determined the day you decide to sell.</p>
            <p>It's determined by the decisions you make 12–36 months before.</p>
          </div>

          <div className="text-white mb-8 md:mb-10 space-y-3 text-sm md:text-base">
            <p>Will you prepare or procrastinate?</p>
            <p>Will you modernize or maintain the status quo?</p>
            <p>Will you partner with strategists or settle for brokers?</p>
          </div>

          <div className="text-white mb-8 md:mb-10 space-y-1 text-sm md:text-base">
            <p>The business you've built deserves a world-class exit.</p>
            <p>Not "market rate." Not "good enough." Premium. Protected. On your terms.</p>
            <p>That's what Centaura delivers.</p>
          </div>

          <button className="bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-6 py-3 md:py-4 inline-flex items-center justify-center gap-3 transition-colors uppercase tracking-wide text-xs md:text-sm w-full sm:w-auto">
            THIS IS YOUR MOMENT: BOOK YOUR CONFIDENTIAL DIAGNOSTIC
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
