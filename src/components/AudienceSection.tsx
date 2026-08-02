import React from 'react';
import { professionalData, getWhatsAppUrl } from '../data/professional';
import { UserCheck, Users, ShieldCheck, Heart, MessageCircle } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const waUrl = getWhatsAppUrl(professionalData.messages.geral);

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] text-[#1A333E] text-xs font-semibold uppercase tracking-wider border border-[#E8E3DA]">
            <span>Público Atendido</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A333E] font-normal leading-tight">
            Atendimento direcionado para Adolescentes e Adultos
          </h2>

          <p className="text-base text-[#4B5357] leading-relaxed">
            Cada fase da vida apresenta demandas específicas. O trabalho terapêutico adapta a linguagem e as estratégias para cada contexto.
          </p>
        </div>

        {/* 2 Audience Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Adolescentes */}
          <div className="bg-[#FAF8F5] border border-[#E8E3DA] rounded-3xl p-8 space-y-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1A333E] text-[#7C9B8B] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>

              <span className="text-xs font-semibold text-[#587265] uppercase tracking-wider block">
                Fase de Desenvolvimento
              </span>

              <h3 className="font-serif text-2xl text-[#1A333E] font-medium">
                Atendimento a Adolescentes
              </h3>

              <p className="text-xs sm:text-sm text-[#4B5357] leading-relaxed">
                Navegar pela adolescência envolve lidar com pressões acadêmicas, vestibulares, busca por identidade, ansiedade social e desafios de atenção.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#E8E3DA] text-xs text-[#1C2124]">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#587265] shrink-0 mt-0.5" />
                  <span>Acolhimento de pressões escolares, ansiedade e foco</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#587265] shrink-0 mt-0.5" />
                  <span>Alinhamento ético com os pais ou responsáveis</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#587265] shrink-0 mt-0.5" />
                  <span>Espaço de fala seguro e livre de julgamentos</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E3DA]">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#1A333E] text-white rounded-xl text-xs font-medium hover:bg-[#2C4D5C] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#7C9B8B]" />
                <span>Atendimento para Adolescentes</span>
              </a>
            </div>
          </div>

          {/* Adultos */}
          <div className="bg-[#FAF8F5] border border-[#E8E3DA] rounded-3xl p-8 space-y-6 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2C4D5C] text-[#7C9B8B] flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>

              <span className="text-xs font-semibold text-[#587265] uppercase tracking-wider block">
                Vida Profissional &amp; Pessoal
              </span>

              <h3 className="font-serif text-2xl text-[#1A333E] font-medium">
                Atendimento a Adultos
              </h3>

              <p className="text-xs sm:text-sm text-[#4B5357] leading-relaxed">
                Suporte para lidar com a sobrecarga de trabalho, burnout, autocobrança, dificuldades de organização decorrentes do TDAH ou busca de diagnóstico tardio.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#E8E3DA] text-xs text-[#1C2124]">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#587265] shrink-0 mt-0.5" />
                  <span>Manejo de ansiedade profissional e síndrome do impostor</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#587265] shrink-0 mt-0.5" />
                  <span>Estratégias de rotina para TDAH em adultos</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#587265] shrink-0 mt-0.5" />
                  <span>Flexibilidade de horários presencial no RJ ou online</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E3DA]">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#1A333E] text-white rounded-xl text-xs font-medium hover:bg-[#2C4D5C] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#7C9B8B]" />
                <span>Atendimento para Adultos</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
