import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { trackExternalLink } from "@/utils/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Clyde Decking Solutions Ltd
              </h3>
              <p className="text-white leading-relaxed">
                Trusted provider of composite and wooden decking and fencing solutions across Scotland. 
                Our skilled joiners are experts in all aspects of joinery work, ensuring every project is completed to the highest standards with a focus on functionality and aesthetics.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white">+44 7495 295903</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white">clydedeckingsolutionsltd@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white">Scotland and surrounding areas</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">
                  • Composite Decking
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">
                  • Wooden Decking
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">
                  • Fencing Installation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">
                  • Fence Repairs
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">
                  • Custom Outdoor Structures
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors">
                  • Custom Decking Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3 text-white">
              <li>
                <a href="/glasgow" className="hover:text-gray-300 transition-colors">
                  • Decking & Fencing in Glasgow
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">
                  • Decking in Scotland
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">
                  • Fencing in Scotland
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">
                  • Custom Structures Scotland
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">
                  • Composite Decking Scotland
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">
                  • Wooden Decking Scotland
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors">
                  • Outdoor Structures Scotland
                </a>
              </li>
            </ul>
          </div>

          {/* About Chris */}
          <div>
            <h4 className="font-display text-xl font-bold text-white mb-6">
              About Us
            </h4>
            <p className="text-white leading-relaxed mb-6">
              We are a trusted provider of composite and wooden decking and fencing solutions. Our skilled joiners 
              are experts in all aspects of joinery work, ensuring every project is completed to the highest standards. 
              We believe in combining functionality with aesthetics to create beautiful, durable outdoor spaces.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/people/Clyde-Decking/100095203176792/?_rdr" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackExternalLink('https://www.facebook.com/people/Clyde-Decking/100095203176792/?_rdr', 'Facebook')}
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-sm">
              © {currentYear} Clyde Decking Solutions Ltd. All rights reserved.
            </div>
            <div className="text-white/70 text-sm text-center">
              Professional decking and fencing services across Scotland.
              <br />
              Website made by <a href="https://connorsdesignsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors underline">Connors Design Solutions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;