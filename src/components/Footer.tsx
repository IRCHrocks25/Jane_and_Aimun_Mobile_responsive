import { Mail, Globe, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[60px] py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Logo Section */}
          <div>
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-[35px] h-[35px] md:w-[40px] md:h-[40px]">
                  <svg viewBox="0 0 83 80" fill="none" className="w-full h-full">
                    <g>
                      <circle cx="77.348" cy="39.779" fill="#FF7E2E" r="5.30387" />
                      <circle cx="37.1271" cy="39.779" fill="#FF7E2E" r="2.20994" />
                      <circle cx="47.9558" cy="39.779" fill="#FF7E2E" r="3.53591" />
                      <circle cx="60.9945" cy="39.779" fill="#FF7E2E" r="4.41989" />
                    </g>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl tracking-wide mb-1">Centaura</h3>
              <p className="text-xs tracking-widest text-gray-400">STRATEGIC CONSULTANCY</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 md:mb-6 text-base md:text-lg">Navigation</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <li><a href="#" className="hover:text-[#19b2bc] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#19b2bc] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#19b2bc] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#19b2bc] transition-colors">The Framework</a></li>
              <li><a href="#" className="hover:text-[#19b2bc] transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-[#19b2bc] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#19b2bc] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect with Centaura */}
          <div>
            <h4 className="mb-4 md:mb-6 text-base md:text-lg">Connect with Centaura</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@centauragroup.com" className="hover:text-[#19b2bc] transition-colors break-all">
                  info@centauragroup.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} />
                <a href="https://www.centauragroup.com" className="hover:text-[#19b2bc] transition-colors">
                  www.centauragroup.com
                </a>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a href="#" className="hover:text-[#19b2bc] transition-colors">
                  <Linkedin size={20} />
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="hover:text-[#19b2bc] transition-colors">
                  <Instagram size={20} />
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="hover:text-[#19b2bc] transition-colors">
                  <Facebook size={20} />
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="hover:text-[#19b2bc] transition-colors">
                  <Youtube size={20} />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 md:mb-6 text-base md:text-lg">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Insights on M&A, digital strategy, and exit planning
            </p>
            <button className="bg-[#ff7e2e] hover:bg-[#ff6a1a] text-white px-6 py-2 transition-colors w-full text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 md:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-6 md:mb-8">
            <div>
              <h3 className="text-xl md:text-2xl mb-2">
                Centaura. Elevate Your Business.
              </h3>
              <h3 className="text-xl md:text-2xl">
                Protect Your Legacy.
              </h3>
            </div>
            <div>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                We stand with mid-market owners and investors to maximize value, accelerate growth, 
                and secure lasting success through M&A excellence, digital transformation, and exit 
                strategy mastery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#05282a] py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-[60px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
            <p>&copy; 2025 Centaura Group. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#19b2bc] transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-[#19b2bc] transition-colors">Terms of Service</a>
            </div>
            <p>Designed by <span className="text-white">KATALYST CRM</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
