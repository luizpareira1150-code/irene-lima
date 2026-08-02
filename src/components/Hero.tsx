import React from 'react';
import { professionalData, getWhatsAppUrl } from '../data/professional';
import { ImageWithFallback } from './ImageWithFallback';
import { MessageCircle, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const generalWaUrl = getWhatsAppUrl(professionalData.messages.geral);

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Credential Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EFEA] border border-[#E8E3DA] text-[#1A333E] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#587265]" />
              <span>PSICOLOGIA CLÍNICA • {professionalData.crp}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A333E] font-normal leading-[1.15] tracking-tight">
              Cuidado psicológico pautado em <span className="italic font-serif text-[#2C4D5C]">ciência</span>, empatia e clareza.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#4B5357] leading-relaxed max-w-2xl">
              Atendimento em Terapia Cognitivo-Comportamental (TCC) para ansiedade, TDAH e avaliação neuropsicológica. Um espaço estruturado e seguro para adolescentes e adultos, presencialmente no Rio de Janeiro ou online.
            </p>



            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 bg-[#1A333E] text-white rounded-full text-sm font-medium hover:bg-[#2C4D5C] transition-all duration-200 shadow-md flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4 text-[#7C9B8B] group-hover:scale-110 transition-transform" />
                <span>Falar com a Psicóloga pelo WhatsApp</span>
              </a>

              <a
                href="#sobre"
                className="px-6 py-4 bg-white text-[#1A333E] border border-[#E8E3DA] rounded-full text-sm font-medium hover:bg-[#F3EFEA] transition-colors text-center"
              >
                Conhecer a Psicóloga
              </a>
            </div>



          </div>

          {/* Right Column: High-end Professional Portrait Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Background Frame Ornament */}
              <div className="absolute -inset-2 bg-[#F3EFEA] rounded-3xl -rotate-1 border border-[#E8E3DA]" />

              {/* Image Box */}
              <div className="relative bg-white p-2.5 rounded-3xl border border-[#E8E3DA] shadow-xl overflow-hidden">
                <ImageWithFallback
                  src="/images/irene-lima-hero.jpeg"
                  alt="Irene Lima - Psicóloga CRP 05/48544"
                  fallbackType="portrait"
                  className="w-full aspect-[4/5] object-cover object-[center_28%] rounded-2xl"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
