import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Category", href: "#category" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/elettilhospital/",
      label: "Facebook",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/eh.hyper?igsh=ZXg2NWRwbHNvanl5 ",
      label: "Instagram",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#6d7781] text-white relative overflow-hidden">
      
      {/* Decorative blur (CLICK SAFE) */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="EH Hospital Logo"
              className="h-14 w-auto brightness-0 invert mb-4"
            />
            <p className="text-white/70 leading-relaxed mb-6">
              Providing exceptional healthcare services with compassion,
              expertise and round-the-clock care for our community.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#E84D3D] transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-[#E84D3D] flex items-center gap-2 group transition-colors"
                  >
                    <span className="w-0 h-0.5 bg-[#E84D3D] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Contact Info</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-1" />
                <span>
                  Elettil Vattoli, Kizhakkoth
                  <br />
                  Koduvally – 673572
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" />
                <span>0495 2200101, 0495 2200219</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" />
                <span>elettilhospital@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar (CENTERED & CLICK SAFE) */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-6 flex justify-center items-center text-sm text-white/60 text-center">
          <p>
            © {currentYear} Designed & Developed by{" "}
            <a
              href="https://share.google/kG9i46KNtSIhMD8xr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E84D3D] hover:underline"
            >
              Aione Spark TechHive LLP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
