import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const tips = [
  {
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    title: "Safe Medicine Usage",
    excerpt: "Always read labels carefully and follow prescribed dosages.",
    fullText:
      "Always read labels carefully and follow prescribed dosages. Never share medications with others. Store medicines safely away from children and regularly check expiry dates.",
    category: "Medicine Safety",
    gradient: "from-accent to-coral-dark",
  },
  {
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    title: "Seasonal Health Tips",
    excerpt: "Stay hydrated and boost immunity during seasonal changes.",
    fullText:
      "Stay hydrated, boost immunity with vitamins, eat seasonal fruits, get adequate sleep, and protect your skin during weather changes.",
    category: "Wellness",
    gradient: "from-[#5B6B7C] to-[#4A5A6B]",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    title: "Common Medicine FAQs",
    excerpt: "Learn about storage and expiration dates.",
    fullText:
      "Learn about proper storage, expiration dates, what to do if you miss a dose, and when to consult a pharmacist or doctor.",
    category: "FAQs",
    gradient: "from-accent to-coral-dark",
  },
];

const HealthTips = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Health Tips
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Stay Informed,
            <span className="text-gradient block">Stay Healthy</span>
          </h2>
          <p
            className="text-muted-foreground text-lg animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Helpful health tips and information to keep you and your family safe.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl border border-border/50 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:border-accent/30 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header with Image */}
              <div className="h-48 relative overflow-hidden">
                {/* Image */}
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tip.gradient} opacity-60 mix-blend-multiply`} />
                
                {/* Animated Circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-800 shadow-lg">
                    {tip.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-colors">
                  {tip.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {openIndex === index ? tip.fullText : tip.excerpt}
                </p>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="
                    px-0
                    text-accent
                    hover:text-accent
                    active:text-accent
                    focus:text-accent
                    focus-visible:text-accent
                    bg-transparent
                    hover:bg-transparent
                    active:bg-transparent
                    focus:bg-transparent
                    focus-visible:bg-transparent
                    focus-visible:ring-0
                    focus-visible:ring-offset-0
                    shadow-none
                    outline-none
                    group/btn
                  "
                >
                  <span className="flex items-center gap-1">
                    {openIndex === index ? "Read Less" : "Read More"}
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openIndex === index
                          ? "rotate-90"
                          : "group-hover/btn:translate-x-2"
                      }`}
                    />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthTips;