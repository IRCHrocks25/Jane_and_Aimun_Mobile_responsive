import imgEllipse1 from "figma:asset/8e469a9244e61470ddb5a8bb6b97cd1876447c0a.png";
import imgEllipse2 from "figma:asset/5f3ed505e90b92544a56eed55deb7ffbb1d2e2db.png";
import imgVector3 from "figma:asset/1c97b3750e449f4ea10a4fb95c04f98dd6d3b897.png";
import imgVector4 from "figma:asset/e2fe93898bac6de46a3b4706a72fe118b8567992.png";
import { ArrowRight } from 'lucide-react';

export function PeopleBehindStrategy() {
  return (
    <div className="bg-[#070707] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[60px]">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[32px] sm:text-[48px] md:text-[72px] leading-[1.1] tracking-tight text-white mb-6 md:mb-8 px-4">
            THE PEOPLE BEHIND THE STRATEGY
          </h2>
          <p className="text-white text-sm md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed px-4">
            <span className="font-semibold">We're Jane and Aimun — partners in life and in business.</span> We built 
            Centaura Group on a simple belief: business owners deserve more than a "market rate" exit. You've 
            poured your life into building something remarkable. We believe you deserve the strategy, structure, 
            and lasting impact that honours that work.
          </p>
        </div>

        {/* Jane */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-20 items-start">
          <div className="text-white order-2 lg:order-1">
            <h3 className="text-[32px] sm:text-[42px] md:text-[56px] leading-none mb-4 md:mb-6">
              <span className="font-semibold">Jane</span> Jawad
            </h3>
            <div className="w-full h-px bg-white/20 mb-6 md:mb-8"></div>
            
            <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
              For more than two decades, I've guided global corporations through complexity and transformation. 
              My career began at Accenture and later as Vice President in a global professional services firm, 
              where I learned what disciplined change can do for organizations.
            </p>
            
            <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed">
              Today, I bring that same discipline into the entrepreneurial space, helping mid-market leaders 
              cut through operational chaos, embrace AI-driven efficiency, and scale with clarity and confidence. 
              Transformation isn't just about technology; it's about giving owners the freedom and structure to 
              focus on what matters most.
            </p>
          </div>

          <div className="relative order-1 lg:order-2">
            <img src={imgVector3} alt="Jane Jawad" className="w-full rounded-lg" />
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 bg-[#00686f]/90 backdrop-blur-sm p-4 md:p-6 rounded">
              <p className="text-white text-sm md:text-base lg:text-lg">
                Corporate Transformation & Technology Strategist
              </p>
            </div>
          </div>
        </div>

        {/* Aimun */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <div className="relative order-1">
            <img src={imgVector4} alt="Aimun Jawad" className="w-full rounded-lg" />
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 bg-[#00686f]/90 backdrop-blur-sm p-4 md:p-6 rounded">
              <p className="text-white text-sm md:text-base lg:text-lg">
                Entrepreneurial Dealmaker & M&A Specialist
              </p>
            </div>
          </div>

          <div className="text-white order-2">
            <h3 className="text-[32px] sm:text-[42px] md:text-[56px] leading-none mb-4 md:mb-6">
              <span className="font-semibold">Aimun</span> Jawad
            </h3>
            <div className="w-full h-px bg-white/20 mb-6 md:mb-8"></div>
            
            <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
              Where Jane simplifies complexity, I thrive on uncovering hidden value. My journey has been less 
              traditional — starting in aeronautical engineering and international oil & gas, then moving into 
              entrepreneurship, joint ventures, and real estate models.
            </p>
            
            <p className="text-white/80 text-sm md:text-base lg:text-lg leading-relaxed">
              Since 2020, I've focused on valuations, roll-ups, and exit strategies. One of my favorite projects? 
              Scaling a small Dubai bicycle shop from $600k to $2.5M by reimagining its e-commerce and operations. 
              For me, the thrill is in spotting overlooked potential and structuring deals that unlock it.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <button className="bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-6 md:px-[35px] py-3 md:py-[15px] inline-flex items-center justify-center gap-3 transition-colors w-full sm:w-auto text-sm md:text-base">
            SCHEDULE AN INTRO CALL
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
