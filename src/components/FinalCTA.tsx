import React from 'react';
import { professionalData, getWhatsAppUrl } from '../data/professional';
import { MessageCircle, ShieldCheck, MapPin, Heart } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const waUrl = getWhatsAppUrl(professionalData.messages.geral);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8E3DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="w-12 h-12 rounded-2xl bg-[#1A333E] text-[#7C9B8B] flex items-center justify-center mx-auto shadow-xs">
          <Heart className="w-6 h-6" />
        </div>

        <div className="space-y-4">
          <span className="text-xs font-semibold text-[#587265] uppercase tracking-wider block">
            Acolhimento &amp; Ciência
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A333E] font-normal leading-tight">
            Invista no seu bem-estar emocional e clareza mental.
          </h2>

          <p className="text-base text-[#4B5357] leading-relaxed max-w-2xl mx-auto">
            Dar o primeiro passo pode parecer desafiador, mas você não precisa passar por isso sozinho. Vamos conversar?
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#1A333E] text-white rounded-full text-sm font-medium hover:bg-[#2C4D5C] transition-all shadow-md flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#7C9B8B]" />
            <span>Falar com Irene Lima no WhatsApp</span>
          </a>
        </div>

        <div className="pt-6 border-t border-[#E8E3DA] flex flex-wrap items-center justify-center gap-6 text-xs text-[#737D82]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#587265]" />
            {professionalData.crp}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#587265]" />
            Rio de Janeiro – RJ &amp; Online
          </span>
        </div>

      </div>
    </section>
  );
};
