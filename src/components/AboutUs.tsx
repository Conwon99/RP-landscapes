import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Home, Facebook, Truck } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { trackMessenger } from "@/utils/analytics";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 bg-[hsl(var(--asphalt-grey))]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight">
                ABOUT US
              </h2>
              <div className="w-16 h-1 bg-primary"></div>
              
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                We are trusted groundworks contractors and landscaping specialists serving Glasgow & Ayrshire. Our professional team specializes in monoblocking, artificial grass installation, brickwork, fencing, decking, and all aspects of groundworks. Expert installation services across Glasgow and Ayrshire, delivering premium outdoor solutions that enhance your property's beauty and value.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/people/Clyde-Decking/100095203176792/?_rdr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://wa.me/447305967999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackMessenger('about_section')}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" color="black" />
                </a>
              </div>
            </div>
          </div>

          {/* Company Logo/Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="text-center">
              <div className="mb-6 mx-auto">
                <LazyImage
                  src="/RP - Edited.png"
                  alt="RP Build and Landscapes logo"
                  className="w-80 h-80 object-contain brightness-0 invert"
                />
              </div>
              <h3 className="font-display font-bold text-3xl text-white mb-2">
                RP BUILD
              </h3>
              <p className="text-white/80 text-lg">
                AND LANDSCAPES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;