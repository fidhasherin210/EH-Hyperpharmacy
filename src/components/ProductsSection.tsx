import { Pill, Leaf, Sparkles, Stethoscope, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    icon: Pill,
    title: 'Medicines',
    description: 'Prescription & OTC medications for all your health needs',
    items: ['Pain Relief', 'Antibiotics', 'Vitamins', 'First Aid'],
    gradient: 'from-primary/20 to-primary/5',
    iconBg: 'bg-[#FF5B47]',
    hoverGlow: 'hover:shadow-[0_0_30px_hsl(207_18%_45%/0.3)]',
  },
  {
    icon: Leaf,
    title: 'Health Supplements',
    description: 'Vitamins, minerals, and nutritional supplements',
    items: ['Multivitamins', 'Omega-3', 'Probiotics', 'Protein'],
    gradient: 'from-primary/20 to-primary/5',
    iconBg: 'bg-[#5B6B7C]',
    hoverGlow: 'hover:shadow-[0_0_30px_hsl(207_18%_45%/0.3)]',
  },
  {
    icon: Sparkles,
    title: 'Personal Care',
    description: 'Skincare, hygiene, and wellness products',
    items: ['Skincare', 'Hair Care', 'Oral Care', 'Baby Care'],
    gradient: 'from-primary/20 to-primary/5',
    iconBg: 'bg-[#FF5B47]',
    hoverGlow: 'hover:shadow-[0_0_30px_hsl(207_18%_45%/0.3)]',
  },
  {
    icon: Stethoscope,
    title: 'Medical Devices',
    description: 'Home healthcare equipment and monitoring devices',
    items: ['BP Monitors', 'Glucometers', 'Thermometers', 'Nebulizers'],
    gradient: 'from-primary/20 to-primary/5',
    iconBg: 'bg-[#5B6B7C]',
    hoverGlow: 'hover:shadow-[0_0_30px_hsl(207_18%_45%/0.3)] ',
  },
];

const ProductsSection = () => {
  return (
    <section id="category" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Our Category
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Quality Healthcare
            <span className="text-gradient block">Products</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Browse our wide range of genuine medicines and healthcare products, all verified and sourced from trusted manufacturers.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-3xl border border-border/50 p-6 transition-all duration-500 hover:-translate-y-3 ${category.hoverGlow} animate-fade-in-up cursor-pointer overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative">
                <div className={`w-16 h-16 ${category.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className={`w-2 h-2 rounded-full ${category.iconBg}`} />
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;