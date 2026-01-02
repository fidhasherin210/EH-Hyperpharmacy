import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

import slide1 from "@/assets/hyperpharmacy-01.jpg";
import slide2 from "@/assets/hyperpharmacy-02.jpg";
import slide3 from "@/assets/hyperpharmacy-03.jpg";

const heroSlides = [
  {
    title: "Your Trusted",
    highlight: "Neighborhood Pharmacy",
    description:
      "Quality medicines, expert pharmacist guidance, and personalized care for you and your family.",
    image: slide1,
  },
  {
    title: "Always Here",
    highlight: "When You Need Us",
    description:
      "Round-the-clock pharmacy services with emergency medicine delivery.",
    image: slide2,
  },
  {
    title: "Professional Care",
    highlight: "Made Personal",
    description:
      "Free health consultations and medication reviews tailored to your needs.",
    image: slide3,
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevSlide, setPrevSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Handle slide change with smooth transition
  const goToSlide = (index: number) => {
    if (index === current || isTransitioning) return;
    
    setIsTransitioning(true);
    setPrevSlide(current);
    setCurrent(index);
    
    // Reset transition state after animation completes
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  // Auto slide with pause on hover
  useEffect(() => {
    const startAutoSlide = () => {
      const timer = setInterval(() => {
        if (!isTransitioning) {
          goToSlide((current + 1) % heroSlides.length);
        }
      }, 5000);
      
      return () => clearInterval(timer);
    };

    return startAutoSlide();
  }, [current, isTransitioning]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const slide = heroSlides[current];

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden"
      ref={containerRef}
    >
      
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {heroSlides.map((s, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === current 
                ? "opacity-100" 
                : "opacity-0 pointer-events-none"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${s.image})`,
              transitionProperty: 'opacity, transform',
              transform: index === current ? 'scale(1)' : 'scale(1.05)',
            }}
          />
        ))}
      </div>

      {/* Animated gradient overlays */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none overflow-hidden">
        <div className={`absolute top-24 right-24 w-56 h-56 bg-orange-500/15 rounded-full blur-2xl transition-all duration-1000 ${
          isTransitioning ? 'opacity-50 scale-90' : 'opacity-100 scale-100'
        }`} />
        <div className={`absolute bottom-24 left-24 w-72 h-72 bg-slate-500/10 rounded-full blur-2xl transition-all duration-1000 delay-150 ${
          isTransitioning ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
        }`} />
      </div>

      {/* Content with staggered animations */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-xl space-y-6">
            
            {/* Title with fade-in and slide-up animation */}
            <div 
              className={`transition-all duration-700 ${
                isTransitioning 
                  ? 'opacity-0 translate-y-4' 
                  : 'opacity-100 translate-y-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {slide.title}
              </h1>
            </div>

            {/* Highlight with color pulse and slide-up */}
            <div 
              className={`transition-all duration-700 ${
                isTransitioning 
                  ? 'opacity-0 translate-y-4' 
                  : 'opacity-100 translate-y-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E84D3D]">
                {slide.highlight}
              </h2>
            </div>

            {/* Description with fade-in */}
            <div 
              className={`transition-all duration-700 ${
                isTransitioning 
                  ? 'opacity-0' 
                  : 'opacity-100'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <p className="text-slate-200 leading-relaxed">
                {slide.description}
              </p>
            </div>

            {/* Button with bounce-in effect */}
            <div 
              className={`transition-all duration-700 ${
                isTransitioning 
                  ? 'opacity-0 scale-95' 
                  : 'opacity-100 scale-100'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#E84D3D] text-white font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Indicators with glow effect */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`relative h-3 rounded-full transition-all duration-500 ${
              i === current 
                ? "w-10 bg-[#E84D3D] shadow-lg shadow-red-500/50" 
                : "w-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          >
            {/* Active indicator pulse effect */}
            {i === current && (
              <span className="absolute inset-0 rounded-full bg-[#E84D3D] animate-ping opacity-40" />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar for auto-slide */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div 
          className="h-full bg-[#E84D3D] transition-all duration-5000 ease-linear"
          style={{ 
            width: isTransitioning ? '100%' : '0%',
            transitionDuration: isTransitioning ? '600ms' : '4400ms'
          }}
          key={current}
        />
      </div> */}

      {/* Navigation arrows for manual control */}
      {/* <button
        onClick={() => goToSlide((current - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm transition-all duration-300 hidden md:block"
        aria-label="Previous slide"
      >
        <ArrowRight className="w-6 h-6 rotate-180" />
      </button>
      <button
        onClick={() => goToSlide((current + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm transition-all duration-300 hidden md:block"
        aria-label="Next slide"
      >
        <ArrowRight className="w-6 h-6" />
      </button> */}
    </section>
  );
};

export default HeroCarousel;