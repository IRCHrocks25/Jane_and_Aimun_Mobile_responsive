import imgRectangle9 from "figma:asset/4cb9d1befb6ac84e63b1b26de9d2d3d6a1e96b8e.png";
import imgEllipse1 from "figma:asset/8e469a9244e61470ddb5a8bb6b97cd1876447c0a.png";
import imgEllipse2 from "figma:asset/5f3ed505e90b92544a56eed55deb7ffbb1d2e2db.png";
import { ArrowUpRight, Info } from 'lucide-react';
import { Navigation } from './Navigation';
import { ScrollingBanner } from './ScrollingBanner';

function FounderImages() {
  return (
    <div className="flex items-start -space-x-3">
      <div className="relative shrink-0 w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden border-2 border-white">
        <img alt="" className="w-full h-full object-cover" src={imgEllipse1} />
      </div>
      <div className="relative shrink-0 w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden border-2 border-white">
        <img alt="" className="w-full h-full object-cover" src={imgEllipse2} />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          alt="" 
          className="w-full h-full object-cover object-center md:object-center" 
          src={imgRectangle9} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#05282a]/95 md:from-black/60 md:via-black/40 md:to-[#05282a]/90" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="relative flex-1 flex items-center px-5 sm:px-8 md:px-[60px] pt-[120px] sm:pt-[100px] md:pt-[120px] pb-[180px] sm:pb-[150px] md:pb-[200px]">
        <div className="max-w-[1800px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-8 md:gap-12 lg:gap-[100px] items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-[40px]">
              {/* Main Heading */}
              <h1 className="text-white text-[36px] leading-[1.15] sm:text-[42px] md:text-[56px] lg:text-[72px] md:leading-[1.1] tracking-tight">
                THE EXIT YOU DESERVE.<br />
                THE VALUE WE PROTECT.
              </h1>

              {/* Description */}
              <p className="text-white/95 text-[15px] sm:text-base md:text-lg lg:text-[20px] leading-[1.7] md:leading-[1.6] max-w-[500px]">
                <span className="font-['Poppins:Bold',sans-serif]">Centaura </span>
                architects exits that maximize enterprise value and ensure decades of work aren't left on the table.
              </p>

              {/* CTA Button */}
              <button className="bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-7 sm:px-6 md:px-[35px] py-4 sm:py-3 md:py-[15px] inline-flex items-center justify-center gap-2 md:gap-3 transition-all hover:shadow-lg self-start w-full sm:w-auto text-[13px] sm:text-sm md:text-base shadow-md">
                <span className="tracking-wide font-medium">FREE CONFIDENTIAL DIAGNOSTIC</span>
                <ArrowUpRight className="flex-shrink-0" size={18} />
              </button>
            </div>

            {/* Right Column - Quote Box */}
            <div className="flex flex-col gap-5 sm:gap-6 md:gap-[25px] lg:pt-[80px]">
              {/* Quote Card */}
              <div className="bg-gradient-to-br from-[#00686f]/95 to-[#004d52]/95 md:from-[#00686f]/90 md:to-[#004d52]/90 backdrop-blur-sm p-7 sm:p-6 md:p-[30px] border border-[#19b2bc]/40 relative rounded-sm shadow-xl">
                {/* Info Icon */}
                <div className="absolute -top-3 left-5 md:left-8 bg-[#1e90ff] p-2.5 md:p-2 rounded shadow-lg">
                  <Info size={18} className="text-white" />
                </div>

                <p className="text-white text-[14px] sm:text-sm md:text-base leading-[1.8] md:leading-[1.7] italic mt-3 md:mt-4">
                  "We've lived the operator-to-exit journey: the sleepless nights, the heavy decisions, the fear of leaving value behind. Centaura was built to make sure no founder faces those moments alone."
                </p>
              </div>

              {/* Founders Info */}
              <div className="flex items-center gap-3 md:gap-4 px-1">
                <FounderImages />
                <div className="text-white">
                  <div className="tracking-wide text-[13px] sm:text-sm md:text-base font-medium">JANE & AIMUN JAWAD</div>
                  <div className="text-[11px] sm:text-xs md:text-sm opacity-90">FOUNDERS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Banner */}
      <ScrollingBanner />
    </div>
  );
}
