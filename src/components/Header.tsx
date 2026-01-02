import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#category', label: 'Category' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-xl shadow-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20 md:h-24 py-3">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 font-medium group transition-colors duration-300
                  ${
                    isScrolled
                      ? 'text-muted-foreground hover:text-accent'
                      : 'text-white hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
                  }
                `}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300
                    ${
                      isScrolled
                        ? 'bg-accent w-0 group-hover:w-3/4'
                        : 'bg-white w-0 group-hover:w-3/4'
                    }
                  `}
                />
              </a>
            ))}
          </nav>

          {/* Phone */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:7593955550"
              className={`flex items-center gap-2 font-semibold transition-transform hover:scale-105
                ${isScrolled ? 'text-accent' : 'text-white'}
              `}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center
                  ${isScrolled ? 'bg-accent/10' : 'bg-white/20'}
                `}
              >
                <Phone className="w-5 h-5" />
              </div>
              <span>7593955550, 7593955551</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors
              ${
                isScrolled
                  ? 'text-foreground hover:bg-accent/10'
                  : 'text-white hover:bg-white/10'
              }
            `}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-card border-t border-border transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="section-container py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 px-4 rounded-xl font-medium transition-all
                text-foreground hover:text-accent hover:bg-accent/10"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
