import React, { useState, useEffect } from 'react';
import { professionalData, getWhatsAppUrl } from '../data/professional';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const waUrl = getWhatsAppUrl(professionalData.messages.geral);

  return (
    <aside
      aria-label="Botão Flutuante de Atendimento WhatsApp"
      className="fixed bottom-6 right-6 z-40 transition-all duration-300 animate-fadeIn"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Iniciar conversa com a psicóloga Irene Lima pelo WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#1A333E] text-white hover:bg-[#2C4D5C] rounded-full shadow-lg border border-white/20 transition-all transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#1A333E]"
      >
        <div className="w-7 h-7 rounded-full bg-[#587265] flex items-center justify-center text-white group-hover:bg-[#7C9B8B] transition-colors">
          <MessageCircle className="w-4 h-4 fill-current" />
        </div>
        <span className="hidden sm:inline-block font-medium text-xs tracking-wide">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
};
