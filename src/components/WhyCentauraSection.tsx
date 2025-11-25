import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function WhyCentauraSection() {
  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                alt="Professional consultant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <p className="text-[#00686f] tracking-[0.2em] mb-4 text-xs md:text-sm">WHY CENTAURA</p>
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] tracking-tight mb-6">
              A Smarter Path to <span className="text-[#00686f]">Exit Strategy</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00686f] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg md:text-xl mb-2">We Architect, Not Just Advise</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Most advisors list your business and hope for the best. We engineer exits that 
                    maximize value and create competitive tension among buyers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00686f] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg md:text-xl mb-2">Corporate Precision Meets Entrepreneurial Grit</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    We combine Fortune 500 transformation discipline with real-world deal-making 
                    experience to prepare your business for premium exits.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00686f] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg md:text-xl mb-2">Built by Founders, For Founders</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    We've lived the journey. We understand the weight of these decisions and ensure 
                    no founder faces them alone.
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-6 md:px-[35px] py-3 md:py-[15px] inline-flex items-center justify-center gap-3 transition-colors w-full sm:w-auto text-sm md:text-base">
              LEARN MORE ABOUT OUR APPROACH
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
