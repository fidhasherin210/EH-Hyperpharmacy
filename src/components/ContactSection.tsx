import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Sparkles, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "43/A, Elettil Vattoli, Kizhakkoth, Koduvally 673572",
    color: "from-accent to-coral-dark",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "0495 2200101, 0495 2200219, 20, 21",
    link: "tel:04952200101",
    color: "from-[#5B6B7C] to-[#4A5A6B]",
  },
  {
    icon: Mail,
    title: "Email",
    content: "elettilhospital@gmail.com",
    link: "mailto:elettilhospital@gmail.com",
    color: "from-accent to-coral-dark",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: " 24/7",
    color: "from-[#5B6B7C] to-[#4A5A6B]",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = "917593955550";

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
New Enquiry 🏥

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const quickWhatsAppMessage = encodeURIComponent("Hi! I have a question about medicines.");

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Get In Touch
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Have questions or need assistance? We're here to help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Side - Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="group flex gap-4 p-5 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/30 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground text-sm leading-relaxed"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-3xl p-6 md:p-8 shadow-2xl border border-border/50 space-y-6 h-full">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Send us a Message
                </h3>
        
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 rounded-xl"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 rounded-xl"
                />
              </div>

              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="h-12 rounded-xl"
              />

              <Textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="resize-none rounded-xl"
              />

              <Button
                onClick={handleSubmit}
                className="w-full h-12 bg-gradient-to-r from-accent to-coral-dark hover:opacity-90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>

             

            
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default ContactSection;