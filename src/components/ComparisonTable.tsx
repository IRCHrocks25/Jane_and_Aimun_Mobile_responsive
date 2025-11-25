import { Check, X } from 'lucide-react';

export function ComparisonTable() {
  const features = [
    { name: 'Exit Strategy & Planning', typical: true, centaura: true },
    { name: 'Buyer Identification', typical: true, centaura: true },
    { name: 'Business Valuation', typical: true, centaura: true },
    { name: 'Technology Due Diligence', typical: false, centaura: true },
    { name: 'AI & Automation Implementation', typical: false, centaura: true },
    { name: 'Operational Transformation', typical: false, centaura: true },
    { name: 'Digital Maturity Assessment', typical: false, centaura: true },
    { name: 'Value Engineering (EBITDA Growth)', typical: false, centaura: true },
    { name: 'Owner Dependency Reduction', typical: false, centaura: true },
    { name: 'Post-Exit Integration Support', typical: false, centaura: true },
  ];

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-[60px]">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] tracking-tight mb-4 md:mb-6 px-4">
            What Makes Us <span className="text-[#00686f]">Different?</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg px-4">
            Most advisors list your business. We engineer exits that maximize value.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-4 md:p-6"></div>
            <div className="p-4 md:p-6 text-center border-x border-gray-200">
              <h3 className="text-sm md:text-lg text-gray-600">Typical Exit Advisor</h3>
            </div>
            <div className="p-4 md:p-6 text-center bg-[#00686f] text-white">
              <h3 className="text-sm md:text-lg">Centaura Group</h3>
            </div>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 border-b border-gray-200 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="p-4 md:p-6">
                <p className="font-medium text-gray-900 text-sm md:text-base">{feature.name}</p>
              </div>
              
              <div className="p-4 md:p-6 flex justify-center items-center border-x border-gray-200">
                {feature.typical ? (
                  <Check className="text-green-500" size={20} />
                ) : (
                  <X className="text-gray-300" size={20} />
                )}
              </div>
              
              <div className="p-4 md:p-6 flex justify-center items-center">
                {feature.centaura ? (
                  <Check className="text-[#00686f]" size={20} />
                ) : (
                  <X className="text-gray-300" size={20} />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow">
              <p className="font-medium text-gray-900 mb-3 text-sm">{feature.name}</p>
              <div className="flex justify-between items-center">
                <div className="text-center flex-1">
                  <p className="text-xs text-gray-600 mb-2">Typical</p>
                  {feature.typical ? (
                    <Check className="text-green-500 mx-auto" size={20} />
                  ) : (
                    <X className="text-gray-300 mx-auto" size={20} />
                  )}
                </div>
                <div className="text-center flex-1">
                  <p className="text-xs text-[#00686f] mb-2">Centaura</p>
                  {feature.centaura ? (
                    <Check className="text-[#00686f] mx-auto" size={20} />
                  ) : (
                    <X className="text-gray-300 mx-auto" size={20} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <button className="bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-6 md:px-[35px] py-3 md:py-[15px] transition-colors w-full sm:w-auto text-sm md:text-base">
            SCHEDULE YOUR FREE DIAGNOSTIC
          </button>
        </div>
      </div>
    </div>
  );
}
