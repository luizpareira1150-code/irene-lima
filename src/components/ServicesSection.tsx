import React from 'react';
import { mainServices, getWhatsAppUrl, professionalData } from '../data/professional';
import { MessageCircle, CheckCircle2, ArrowUpRight, Brain, HeartPulse, Sparkles } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'psicoterapia':
        return HeartPulse;
      case 'tdah':
        return Sparkles;
      case 'avaliacao':
        return Brain;
      default:
        return HeartPulse;
    }
  };

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-white border-y border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFEA] text-[#1A333E] text-xs font-semibold uppercase tracking-wider">
            <span>Atuação Clínica</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A333E] font-normal leading-tight">
            Serviços voltados para acolhimento e clareza diagnóstica.
          </h2>

          <p className="text-base text-[#4B5357] leading-relaxed">
            Atendimento presencial no Rio de Janeiro e online para adolescentes e adultos. Cada modalidade é planejada com rigor técnico e estratégias personalizadas.
          </p>
        </div>

        {/* 3 Main Service Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainServices.map((service) => {
            const ServiceIcon = getIcon(service.id);
            const waMsg = professionalData.messages[service.ctaKey as keyof typeof professionalData.messages] || professionalData.messages.geral;
            const waUrl = getWhatsAppUrl(waMsg);

            return (
              <div
                key={service.id}
                className="bg-[#FAF8F5] border border-[#E8E3DA] rounded-3xl p-7 flex flex-col justify-between hover:shadow-lg hover:border-[#1A333E]/40 transition-all duration-300 group"
              >
                <div className="space-y-5">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#1A333E] text-[#7C9B8B] flex items-center justify-center shadow-xs">
                      <ServiceIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#587265] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-[#E8E3DA]">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-[#1A333E] font-medium group-hover:text-[#2C4D5C] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4B5357] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights List */}
                  <div className="pt-3 border-t border-[#E8E3DA] space-y-2">
                    <span className="text-[11px] font-semibold text-[#1A333E] uppercase tracking-wider block">
                      O que está incluído:
                    </span>
                    <ul className="space-y-2">
                      {service.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#1C2124]">
                          <CheckCircle2 className="w-4 h-4 text-[#587265] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer CTA Button */}
                <div className="pt-6 mt-6 border-t border-[#E8E3DA]">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#1A333E] text-white rounded-xl text-xs font-medium hover:bg-[#2C4D5C] transition-colors flex items-center justify-center gap-2 group-hover:bg-[#1A333E]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#7C9B8B]" />
                    <span>{service.ctaLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
