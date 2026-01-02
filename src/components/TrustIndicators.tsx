import { Shield, UserCheck, BadgeCheck, DollarSign } from "lucide-react";

const indicators = [
  {
    icon: Shield,
    title: "Licensed Pharmacy",
    description: "Fully registered & approved",
  },
  {
    icon: UserCheck,
    title: "Qualified Pharmacists",
    description: "Expert professional guidance",
  },
  {
    icon: BadgeCheck,
    title: "Genuine Medicines",
    description: "Authentic & quality assured",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive fair rates",
  },
];

const TrustIndicators = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary via-slate-dark to-primary py-8 md:py-10 overflow-hidden hidden md:block">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-accent rounded-full blur-2xl animate-float" />
        <div
          className="absolute bottom-0 right-1/4 w-40 h-40 bg-primary-foreground rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="section-container relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {indicators.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 text-primary-foreground animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary-foreground/20 group-hover:scale-110 transition-all duration-300 border border-primary-foreground/10">
                <item.icon className="w-7 h-7 group-hover:animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-base group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70 text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
