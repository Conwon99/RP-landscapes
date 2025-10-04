import { Button } from "@/components/ui/button";
import { ArrowRight, Hammer, Trees, Wrench, Home, Scissors, Settings, Shield } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { trackServiceClick } from "@/utils/analytics";

const ServicesGrid = () => {
  const services = [
    {
      title: "Groundworks",
      description: "Complete groundworks solutions for all your landscaping needs",
      features: ["Site preparation", "Drainage systems", "Foundation work", "Excavation services"],
      image: "/gallery/Groundwork.jpg",
      fallbackImage: "/gallery/Groundwork.jpg",
      icon: Hammer,
      color: "primary-blue"
    },
    {
      title: "Monoblocking", 
      description: "Professional monoblocking and paving services",
      features: ["Driveways", "Patios", "Pathways", "Quality materials"],
      image: "/gallery/Monoblocking..jpg",
      fallbackImage: "/gallery/Monoblocking..jpg",
      icon: Home,
      color: "sky-blue"
    },
    {
      title: "Artificial Grass",
      description: "High-quality artificial grass installation and maintenance",
      features: ["Low maintenance", "Year-round green", "Professional installation", "Realistic appearance"],
      image: "/gallery/Artificial grass..jpg",
      fallbackImage: "/gallery/Artificial grass..jpg",
      icon: Shield,
      color: "dark-blue"
    },
    {
      title: "Brickwork",
      description: "Expert brickwork and masonry services",
      features: ["Walls", "Retaining walls", "Repairs", "Custom designs"],
      image: "/gallery/Brickwork..jpg",
      fallbackImage: "/gallery/Brickwork..jpg",
      icon: Wrench,
      color: "primary-blue"
    },
    {
      title: "Fencing",
      description: "Professional fencing installation and repairs",
      features: ["Privacy fencing", "Security fencing", "Custom heights", "Quality materials"],
      image: "/fencing1.jpg",
      fallbackImage: "/fencing1.jpg",
      icon: Settings,
      color: "sky-blue"
    },
    {
      title: "Decking",
      description: "High-quality decking solutions for outdoor living",
      features: ["Composite decking", "Wooden decking", "Custom designs", "Professional installation"],
      image: "/gallery/Decking.jpg",
      fallbackImage: "/gallery/Decking.jpg",
      icon: Trees,
      color: "primary-blue"
    }
  ];

  const handleQuoteClick = (serviceTitle: string) => {
    trackServiceClick(serviceTitle, 'services_grid');
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-left mb-16">
          <div className="flex items-center mb-6">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mr-6">
              PROFESSIONAL GROUNDWORKS & LANDSCAPING SERVICES
            </h2>
            <div className="flex-1 h-px bg-[hsl(var(--asphalt-grey))]"></div>
          </div>
          <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl">
            Expert groundworks contractors and landscaping specialists serving Glasgow & Ayrshire. Professional monoblocking, artificial grass installation, brickwork, fencing, decking, and complete groundworks services. Trusted builders delivering premium outdoor solutions across Glasgow and Ayrshire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group overflow-hidden flex flex-col h-full">
              {/* Service Image */}
              <div className="relative -m-6 mb-0 h-48 overflow-hidden">
                <LazyImage
                  src={service.image}
                  alt={`Professional ${service.title.toLowerCase()} service - expert groundworks and landscaping solutions`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  fallbackSrc={service.fallbackImage}
                />
              </div>

              {/* Service Content */}
              <div className="flex flex-col flex-grow pt-6">
                <div className="flex-grow">
                  <h3 className="font-display text-2xl font-bold text-[hsl(var(--asphalt-grey))] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[hsl(var(--asphalt-grey))] opacity-80 mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-[hsl(var(--asphalt-grey))]">
                        <div className="w-1.5 h-1.5 bg-[hsl(var(--primary-blue))] rounded-full mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button - positioned at bottom */}
                <div className="mt-6">
                  <Button 
                    onClick={() => handleQuoteClick(service.title)}
                    className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold rounded-full group/button"
                  >
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;