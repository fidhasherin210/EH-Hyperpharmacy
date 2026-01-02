import { Clock, Users, Award, Heart, Sparkles } from 'lucide-react';
import eyeImage from "@/assets/hyperpharmacy-02.jpg"; 

const stats = [
 
  { icon: Award, value: '100%', label: 'Quality Assured', color:  "from-[#5B6B7C] to-[#4A5A6B]" },
  { icon: Heart, value: '24/7', label: 'Care Support', color:  "from-[#FF5B47] to-[#FF7A6B]"},
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
        <div className="relative animate-slide-in-left">
  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-slate-light flex items-center justify-center relative">
      
      {/* Image */}
      <img
        src={eyeImage}
        alt="Eye Hospital"
        className="w-full h-full object-cover relative z-10"
      />

      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div
          className="w-48 h-48 rounded-full border border-accent/20 animate-ping"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute w-64 h-64 rounded-full border border-primary/20 animate-ping"
          style={{ animationDuration: "4s", animationDelay: "0.5s" }}
        />
      </div>

    </div>
  </div>
</div>


          {/* Content Side */}
          <div className="animate-slide-in-right">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              About Us
              <Sparkles className="w-4 h-4" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Health is Our
              <span className="text-gradient block mt-2">Top Priority</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              For over 4 years, CarePharm has been serving our community with dedication and care. Our team of qualified pharmacists is committed to providing genuine medicines and expert health guidance to every customer who walks through our doors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe in building lasting relationships based on trust, quality, and personalized attention. Visit us today and experience the difference of a pharmacy that truly cares.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-accent/30 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-foreground group-hover:text-gradient transition-colors">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;