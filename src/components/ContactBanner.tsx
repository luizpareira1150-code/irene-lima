import React from 'react';
import { professionalData, getWhatsAppUrl } from '../data/professional';
import { MessageCircle, MapPin, Calendar, Clock } from 'lucide-react';

export const ContactBanner: React.FC = () => {
  const waUrl = getWhatsAppUrl(professionalData.messages.geral);

  return (
    <section className="py-16 bg-[#1A333E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs font-semibold text-[#7C9B8B] uppercase tracking-wider block">
              Agendamento &amp; Informações
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Pronto para iniciar seu acompanhamento psicológico?
            </h2>
            <p className="text-xs sm:text-sm text-[#E8E3DA] max-w-xl">
              Entre em contato direto pelo WhatsApp para consultar horários disponíveis, valores e tirarmos todas as dúvidas do seu agendamento.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 bg-[#587265] text-white rounded-full text-xs font-medium hover:bg-[#7C9B8B] hover:text-[#1A333E] transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar pelo WhatsApp: {professionalData.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
