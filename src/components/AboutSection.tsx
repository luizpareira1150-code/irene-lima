import React from 'react';
import { professionalData, getWhatsAppUrl } from '../data/professional';
import { ImageWithFallback } from './ImageWithFallback';
import { GraduationCap, Brain, UserCheck, MessageCircle, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const waUrl = getWhatsAppUrl(professionalData.messages.geral);

  const PortraitCard = (
    <div className="w-full max-w-md mx-auto relative">
      {/* Image Frame */}
      <div className="bg-[#F3EFEA] p-3 rounded-3xl border border-[#E8E3DA] shadow-sm">
        <ImageWithFallback
          src="/images/irene-lima-sobre-espelhada.jpeg"
          alt="Irene Lima - Psicóloga CRP 05/48544"
          fallbackType="portrait"
          className="w-full aspect-[4/5] object-cover object-[center_12%] rounded-2xl"
        />
      </div>
    </div>
  );

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-white border-y border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Desktop Left Column: Portrait & Credentials */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center">
            {PortraitCard}
          </div>

          {/* Right Column (Mobile & Desktop Flow) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFEA] text-[#1A333E] text-xs font-semibold uppercase tracking-wider">
              <span>Quem Sou Eu • Sobre Irene Lima</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A333E] font-normal leading-tight">
              Uma prática clínica fundamentada no respeito à sua individualidade e no rigor científico.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4B5357] leading-relaxed">
              <p>
                Sou <strong className="text-[#1A333E]">Irene Lima ({professionalData.crp})</strong>, psicóloga clínica com atuação focada em Terapia Cognitivo-Comportamental (TCC) e aperfeiçoamento constante em Neuropsicologia.
              </p>
              <p>
                Meu trabalho é dedicado ao atendimento de <strong className="text-[#1A333E]">adolescentes e adultos</strong> que buscam compreender e manejar os desafios da ansiedade, inquietação, TDAH ou que necessitam de um processo detalhado de avaliação neuropsicológica.
              </p>
              <p>
                Acredito na psicologia como um espaço de escuta ativa, clareza e construção conjunta de soluções. Cada processo terapêutico é conduzido com absoluto sigilo ético, empatia e estratégias estruturadas para transformar a forma como você lida com os pensamentos, emoções e decisões da rotina.
              </p>
            </div>

            {/* Mobile-Only Portrait Placement (Below text, above qualifications) */}
            <div className="block lg:hidden pt-2 pb-2">
              {PortraitCard}
            </div>

            {/* Key Qualifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#587265] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <h3 className="font-medium text-[#1A333E]">Formação Acadêmica</h3>
                  <p className="text-[#737D82] mt-0.5">Graduada em Psicologia com atualização clínica contínua.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] flex items-start gap-3">
                <Brain className="w-5 h-5 text-[#2C4D5C] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <h3 className="font-medium text-[#1A333E]">Foco em TCC &amp; Neuropsicologia</h3>
                  <p className="text-[#737D82] mt-0.5">Prática baseada em evidências científicas e testagem cognitiva.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] flex items-start gap-3">
                <UserCheck className="w-5 h-5 text-[#587265] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <h3 className="font-medium text-[#1A333E]">Adolescentes e Adultos</h3>
                  <p className="text-[#737D82] mt-0.5">Atendimento personalizado respeitando a fase de desenvolvimento.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2C4D5C] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <h3 className="font-medium text-[#1A333E]">Rio de Janeiro &amp; Online</h3>
                  <p className="text-[#737D82] mt-0.5">Consultório presencial acolhedor e sessões online estruturadas.</p>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1A333E] text-white rounded-full text-xs font-medium hover:bg-[#2C4D5C] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#7C9B8B]" />
                <span>Iniciar conversa com Irene pelo WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
