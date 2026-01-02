import { FileCheck, MessageCircle, HeartPulse, Search, ArrowRight,Sparkles } from 'lucide-react';

const services = [
  {
    icon: FileCheck,
    title: 'Prescription Verification',
    description: 'Our pharmacists carefully verify each prescription to ensure safe and accurate dispensing.',
    color: 'from-primary to-slate-dark',
    delay: '0s',
  },
  {
    icon: MessageCircle,
    title: 'Pharmacist Consultation',
    description: 'Get expert advice on medication usage, interactions, and health concerns from qualified professionals.',
    color: 'from-accent to-coral-dark',
    delay: '0.1s',
  },
  {
    icon: HeartPulse,
    title: 'Health Guidance',
    description: 'Receive personalized health tips and guidance for managing chronic conditions and wellness.',
    color: 'from-accent to-coral-dark',
    delay: '0.2s',
  },
  {
    icon: Search,
    title: 'Medicine Availability',
    description: 'Quick check on medicine availability with alternatives suggested if needed.',
    color: 'from-primary to-slate-dark',
    delay: '0.3s',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold mb-4 animate-fade-in">
           <Sparkles className="w-4 h-4" />
            Our Services
             <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Professional Pharmacy
            <span className="text-gradient block">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Beyond dispensing medicines, we offer comprehensive healthcare services to support your wellness journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex gap-5 p-6 rounded-3xl bg-card border border-border/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-accent/30 animate-fade-in-up cursor-pointer overflow-hidden"
              style={{ animationDelay: service.delay }}
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <div className="relative flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center justify-between">
                  {service.title}
                  
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;