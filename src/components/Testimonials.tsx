import { useState, useEffect } from 'react';
import { Star, Sparkles } from 'lucide-react';

const testimonials = [
{
  name: 'Ayesha K.',
  role: 'Regular Customer',
  text: 'EH Hyperpharmacy has been our family’s trusted pharmacy for years. The staff is always friendly and explains the medicines clearly.',
  rating: 5,
},
{
  name: 'Mohammed Shafi',
  role: 'Local Resident',
  text: 'I always get genuine medicines at fair prices from EH Hyperpharmacy.',
  rating: 5,
},
{
  name: 'Fatima Beevi',
  role: 'Senior Citizen',
  text: 'The staff here is very attentive and helpful. They make sure I take the right medicines and remind me about refills.',
  rating: 5,
},
{
  name: 'Akhil P.',
  role: 'Neighbour',
  text: 'EH Hyperpharmacy always provides reliable and friendly service. Everything I need is easy to find and the staff is very kind.',
  rating: 5,
},

];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="section-padding bg-muted/20">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Testimonials
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            What Our{" "}
            <span className="text-gradient">
              Patients Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real patients
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="flex flex-col items-center">
          <div 
            className={`w-full max-w-2xl mb-8 transition-all duration-500 ${
              isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="p-8 md:p-10 bg-card rounded-3xl border border-border/50 shadow-xl">
              {/* Avatar */}
              {/* <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent/20 shadow-lg">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                  {/* Verified Badge */}
                  {/* <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-accent to-coral-dark flex items-center justify-center border-2 border-card shadow-lg">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                </div>
              </div> */}

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400 mx-1"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground text-lg md:text-xl text-center mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Name and Role */}
              <div className="text-center">
                <p className="font-bold text-xl text-foreground mb-1">
                  {testimonials[currentIndex].name}
                </p>
                {/* <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}
               </ p> */}
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gradient-to-r from-accent to-coral-dark w-10 shadow-glow"
                    : "bg-border hover:bg-muted-foreground w-3 hover:w-6"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;