import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { professionalData, getWhatsAppUrl } from '../data/professional';
import { X, MessageCircle, MapPin } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const waUrl = getWhatsAppUrl(professionalData.messages.geral);

  const navItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Quem Sou Eu', href: '#sobre' },
    { label: 'Serviços Principais', href: '#servicos' },
    { label: 'Abordagem TCC', href: '#tcc' },
    { label: 'Perguntas Frequentes', href: '#duvidas' },
  ];

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Slide Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="relative w-[85vw] max-w-xs bg-[#FAF8F5] h-full min-h-screen shadow-2xl flex flex-col justify-between p-6 overflow-y-auto border-l border-[#E8E3DA] z-[10000]"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E3DA]">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-xl font-semibold text-[#1A333E] tracking-tight leading-none">
                    Irene Lima
                  </span>
                  <span className="h-5 w-px bg-[#D9D2C5]" />
                  <div className="flex flex-col justify-center">
                    <span className="text-[9px] font-bold tracking-widest text-[#1A333E] uppercase leading-none">
                      Psicóloga
                    </span>
                    <span className="text-[9px] font-medium text-[#587265] mt-1 leading-none">
                      {professionalData.crp}
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-[#4B5357] hover:bg-[#F3EFEA] rounded-full transition-colors"
                  aria-label="Fechar Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="block px-3 py-2.5 text-base font-medium text-[#1C2124] hover:bg-[#F3EFEA] hover:text-[#1A333E] rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Footer Actions */}
            <div className="pt-6 border-t border-[#E8E3DA] space-y-4">
              <div className="text-xs text-[#4B5357] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#587265] shrink-0" />
                <span>Atendimento presencial no RJ e online</span>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#1A333E] text-white rounded-xl text-xs font-medium hover:bg-[#2C4D5C] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#7C9B8B]" />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

