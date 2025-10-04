import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook } from "lucide-react";
import { trackPhoneCall, trackMessenger } from "@/utils/analytics";

const ContactSection = () => {

  const handleCallClick = () => {
    trackPhoneCall('contact_section');
    window.location.href = "tel:+447305967999";
  };

  const handleMessengerClick = () => {
    trackMessenger('contact_section');
    window.open("https://wa.me/447305967999", "_blank");
  };

  return (
    <section id="contact-form" className="py-20 px-4 bg-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
            Get Your Free Quote
          </h2>
        </div>

        <div className="flex justify-center">
          {/* Get Quote Button */}
          <Button 
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 text-lg"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;