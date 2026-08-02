import React, { useState, useEffect } from 'react';
import { professionalData, getWhatsAppUrl } from '../data/professional';
import { MobileMenu } from './MobileMenu';
import { MessageCircle, Menu, ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'sobre', 'servicos', 'tcc', 'duvidas'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero', id: 'hero' },
    { label: 'Quem Sou Eu', href: '#sobre', id: 'sobre' },
    { label: 'Serviços', href: '#servicos', id: 'servicos' },
    { label: 'TCC', href: '#tcc', id: 'tcc' },
    { label: 'Dúvidas', href: '#duvidas', id: 'duvidas' },
  ];

  const waUrl = getWhatsAppUrl(professionalData.messages.geral);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8E3DA] py-3'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & CRP - Professional Editorial Lockup */}
        <a href="#hero" className="flex items-center gap-3.5 group focus:outline-none py-1">
          <span className="font-serif text-xl sm:text-2xl font-semibold text-[#1A333E] tracking-tight group-hover:text-[#2C4D5C] transition-colors leading-none">
            Irene Lima
          </span>
          <span className="h-6 w-px bg-[#D9D2C5]" />
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-bold tracking-widest text-[#1A333E] uppercase leading-none">
              Psicóloga
            </span>
            <span className="text-[10px] font-medium text-[#587265] mt-1 leading-none">
              {professionalData.crp}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-[#4B5357]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive ? 'text-[#1A333E] font-semibold' : 'hover:text-[#1A333E]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A333E] rounded-full animate-fadeIn" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A333E] text-white text-xs font-medium hover:bg-[#2C4D5C] transition-all shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#7C9B8B]" />
            <span>Agendar Consulta</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2.5 rounded-full text-[#1A333E] hover:bg-[#F3EFEA] transition-colors"
            aria-label={mobileMenuOpen ? "Fechar Menu de Navegação" : "Abrir Menu de Navegação"}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
