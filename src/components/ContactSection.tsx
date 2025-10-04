import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { trackPhoneCall, trackMessenger, trackQuoteRequest, trackFormInteraction } from "@/utils/analytics";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const serviceOptions = [
    'Groundworks',
    'Monoblocking',
    'Artificial Grass',
    'Brickwork',
    'Fencing',
    'Decking',
    'General Landscaping',
    'Site Preparation'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xgvljren', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: 'Free Quote Request from Website'
        }),
      });

      if (response.ok) {
        trackQuoteRequest('contact_form', [formData.service]);
        trackFormInteraction('quote_form', 'submit_success');
        
        toast({
          title: "Quote request sent!",
          description: "Thank you for your request. We'll respond within 24 hours.",
        });
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      trackFormInteraction('quote_form', 'submit_error');
      toast({
        title: "Error sending request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

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
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
            Ready to transform your outdoor space? Get in touch for your FREE quote today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
                Get In Touch
              </h3>
              <p className="text-[hsl(var(--asphalt-grey))] mb-8">
                We're here to help with all your groundworks and landscaping needs. Contact us today for a free, no-obligation quote.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--primary-blue))] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[hsl(var(--asphalt-grey))]">Phone</p>
                  <a href="tel:+447305967999" className="text-[hsl(var(--primary-blue))] hover:underline">
                    07305 967999
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--primary-blue))] rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[hsl(var(--asphalt-grey))]">Email</p>
                  <a href="mailto:RPBuildandlandscapeslimited@gmail.com" className="text-[hsl(var(--primary-blue))] hover:underline">
                    RPBuildandlandscapeslimited@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--primary-blue))] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[hsl(var(--asphalt-grey))]">Service Areas</p>
                  <p className="text-[hsl(var(--asphalt-grey))]">Glasgow & Ayrshire</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[hsl(var(--primary-blue))] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[hsl(var(--asphalt-grey))]">Business Hours</p>
                  <p className="text-[hsl(var(--asphalt-grey))]">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-[hsl(var(--asphalt-grey))]">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleCallClick}
                  className="flex items-center gap-3 bg-[hsl(var(--primary-blue))] hover:bg-[hsl(var(--primary-blue))]/90 text-white font-semibold py-3 px-6 rounded-full"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
                <Button 
                  onClick={handleMessengerClick}
                  className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Request Your FREE Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-[hsl(var(--asphalt-grey))] font-semibold">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[hsl(var(--asphalt-grey))] font-semibold">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="mt-2 rounded-xl border-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-[hsl(var(--asphalt-grey))] font-semibold">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="mt-2 rounded-xl border-2"
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-[hsl(var(--asphalt-grey))] font-semibold">Service Required</Label>
                <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                  <SelectTrigger className="mt-2 rounded-xl border-2">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-[hsl(var(--asphalt-grey))] font-semibold">Project Details</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us about your groundworks and landscaping needs..."
                  className="mt-2 rounded-xl border-2 min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-full transition-colors duration-200 text-lg"
              >
                Send Quote Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;