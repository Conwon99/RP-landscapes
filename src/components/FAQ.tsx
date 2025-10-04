import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { trackPhoneCall } from "@/utils/analytics";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How much does decking installation cost?",
      answer: "Decking installation costs vary depending on the size, material choice, and complexity of the project. Composite decking typically starts from £80-120 per square meter, while wooden decking ranges from £60-100 per square meter. We provide free, no-obligation quotes for all decking work. Contact us for a detailed quote."
    },
    {
      question: "Do you install both composite and wooden decking?",
      answer: "Yes, we specialize in both composite and wooden decking installation. Composite decking offers low maintenance and weather resistance, while wooden decking provides natural beauty and traditional appeal. Our skilled joiners can help you choose the best option for your needs."
    },
    {
      question: "What areas do you cover?",
      answer: "We provide groundworks and landscaping services across Glasgow and Ayrshire, including surrounding areas. Contact us to confirm coverage for your specific location and discuss your project requirements."
    },
    {
      question: "Do you offer fencing installation and repairs?",
      answer: "Yes, we provide comprehensive fencing services including new installations, repairs, and maintenance. We work with various fencing materials and can handle everything from privacy fences to decorative fencing. All work is completed to the highest standards by our expert contractors."
    },
    {
      question: "What types of custom outdoor structures do you build?",
      answer: "We offer a wide range of custom outdoor structures including pergolas, outdoor storage, gates, and bespoke decking solutions. Our skilled contractors can create custom solutions tailored to your specific needs and outdoor design."
    },
    {
      question: "How long does a typical decking project take?",
      answer: "Project duration depends on size and complexity. Simple decking installations typically take 1-3 days, while larger or more complex projects may take up to a week. We provide realistic timelines during the quote process and keep you updated throughout the project."
    },
    {
      question: "Do you offer free quotes?",
      answer: "Yes, we provide completely free, no-obligation quotes for all our services. You can request a quote by calling 07495 295903, emailing us, or using our contact form. We'll assess your needs and provide a detailed, transparent quote with no hidden costs."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-background to-[hsl(var(--muted))]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[hsl(var(--asphalt-grey))] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[hsl(var(--asphalt-grey))] max-w-3xl mx-auto">
              Common questions about our decking, fencing, and custom outdoor structure services across Scotland
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg text-[hsl(var(--asphalt-grey))] pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-[hsl(var(--primary-blue))] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[hsl(var(--primary-blue))] flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-[hsl(var(--asphalt-grey))] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-[hsl(var(--asphalt-grey))] mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447495295903"
                onClick={() => trackPhoneCall('faq_section')}
                className="inline-flex items-center justify-center px-6 py-3 bg-[hsl(var(--primary-blue))] text-white rounded-full font-semibold hover:bg-[hsl(var(--primary-blue))]/90 transition-colors"
              >
                Call 07495 295903
              </a>
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[hsl(var(--primary-blue))] text-[hsl(var(--primary-blue))] rounded-full font-semibold hover:bg-[hsl(var(--primary-blue))] hover:text-white transition-colors"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
