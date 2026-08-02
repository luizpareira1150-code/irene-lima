import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { professionalData, getWhatsAppUrl } from '../data/professional';
import { HeartPulse, Brain, Zap, Clock, ShieldCheck, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';

export const IdentificationSection: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(0);

  const scenarios = [
    {
      id: 0,
      icon: HeartPulse,
      title: "Ansiedade e Pensamentos Acelerados",
      subtitle: "Sensação constante de alerta e preocupação com o futuro",
      description: "Muitas pessoas chegam ao consultório relatando apreensão contínua, dificuldade para desligar a mente à noite, sintomas físicos como tensão muscular, palpitações e medo de falhar ou perder o controle.",
      points: [
        "Preocupações excessivas que prejudicam o sono e o foco",
        "Sensação física de inquietação ou nó na garganta/peito",
        "Tendência a antecipar cenários negativos",
        "Dificuldade de relaxar mesmo nos momentos de descanso"
      ],
      waMessage: professionalData.messages.ansiedade,
    },
    {
      id: 1,
      icon: Zap,
      title: "Desafios de Atenção, Foco e TDAH",
      subtitle: "Procrastinação, desorganização de rotina e fadiga mental",
      description: "Adolescentes e adultos com dificuldades de foco ou suspeita de TDAH enfrentam desafios na gestão do tempo, priorização de tarefas, esquecimentos frequentes e sensação permanente de estar sobrecarregado.",
      points: [
        "Procrastinação crônica mesmo em tarefas simples",
        "Dificuldade para iniciar ou concluir projetos longos",
        "Esquecimento de compromissos e objetos diários",
        "Sensação de 'nevoeiro mental' e fadiga com decisões"
      ],
      waMessage: professionalData.messages.tdah,
    },
    {
      id: 2,
      icon: Brain,
      title: "Necessidade de Avaliação Neuropsicológica",
      subtitle: "Mapeamento das funções cognitivas e auxílio diagnóstico",
      description: "A avaliação investiga o funcionamento de áreas como memória, atenção sustentada, velocidade de processamento e funções executivas, fornecendo um laudo fundamentado para condutas terapêuticas e médicas.",
      points: [
        "Necessidade de diagnóstico diferencial (TDAH, Transtornos de Aprendizagem, etc.)",
        "Mapeamento detalhado do perfil de pontos fortes e fragilidades",
        "Encaminhamento realizado por médicos neurologistas ou psiquiatras",
        "Acompanhamento e suporte no desenvolvimento do laudo"
      ],
      waMessage: professionalData.messages.avaliacaoneuro,
    },
    {
      id: 3,
      icon: Clock,
      title: "Transições de Vida & Sobrecarga Emocional",
      subtitle: "Desafios profissionais, acadêmicos e relacionais",
      description: "Grandes mudanças, exigências de carreira ou vestibular, fim de ciclos ou conflitos interpessoais podem gerar desgaste profundo. A psicoterapia oferece um porto seguro para reorganizar prioridades.",
      points: [
        "Sensação de estar no limite das energias emocionais",
        "Cobrança excessiva por perfeccionismo ou aprovação",
        "Dificuldade em impor limites e dizer não",
        "Desejo de se autoconhecer e construir maior estabilidade"
      ],
      waMessage: professionalData.messages.psicoterapia,
    }
  ];

  const currentIdx = selectedScenario ?? 0;
  const current = scenarios[currentIdx];
  const IconComponent = current.icon;

  return (
    <section id="mapeamento" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFEA] text-[#1A333E] text-xs font-semibold uppercase tracking-wider">
            <span>Mapeamento de Necessidades</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A333E] font-normal leading-tight">
            Você se identifica com algum destes cenários?
          </h2>

          <p className="text-base text-[#4B5357] leading-relaxed">
            Muitas vezes, dar o primeiro passo é reconhecer o que se está vivenciando. A psicoterapia oferece ferramentas para transformar esse desconforto em clareza.
          </p>
        </div>

        {/* Mobile View: Accordion (Expands directly below each option) */}
        <div className="mt-8 space-y-3 sm:hidden">
          {scenarios.map((item, index) => {
            const ItemIcon = item.icon;
            const isSelected = selectedScenario === index;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isSelected
                    ? 'bg-white border-[#1A333E] shadow-sm'
                    : 'bg-white border-[#E8E3DA]'
                }`}
              >
                <button
                  onClick={() => setSelectedScenario(isSelected ? null : index)}
                  className={`w-full p-4 text-left flex items-center justify-between gap-3 transition-colors ${
                    isSelected ? 'bg-[#1A333E] text-white' : 'bg-white text-[#1C2124]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-[#2C4D5C] text-[#7C9B8B]' : 'bg-[#F3EFEA] text-[#1A333E]'
                      }`}
                    >
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`font-serif text-base font-semibold leading-snug truncate ${isSelected ? 'text-white' : 'text-[#1A333E]'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs mt-0.5 truncate ${isSelected ? 'text-[#E8E3DA]' : 'text-[#737D82]'}`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isSelected ? 'rotate-180 text-[#7C9B8B]' : 'text-[#737D82]'}`} />
                </button>

                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 border-t border-[#E8E3DA] space-y-4 bg-[#FAF8F5]/60">
                        <p className="text-sm text-[#4B5357] leading-relaxed">
                          {item.description}
                        </p>

                        <div className="space-y-2 pt-1">
                          {item.points.map((pt, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#1C2124]">
                              <ShieldCheck className="w-4 h-4 text-[#587265] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-[#E8E3DA]">
                          <a
                            href={getWhatsAppUrl(item.waMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 px-4 bg-[#1A333E] text-white rounded-xl text-xs font-medium hover:bg-[#2C4D5C] transition-colors flex items-center justify-center gap-2"
                          >
                            <MessageCircle className="w-4 h-4 text-[#7C9B8B]" />
                            <span>Conversar sobre este tema no WhatsApp</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop View: 4-Column Tabs Grid */}
        <div className="mt-12 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {scenarios.map((item, index) => {
            const ItemIcon = item.icon;
            const isSelected = selectedScenario === index;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedScenario(index)}
                className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1A333E] text-white border-[#1A333E] shadow-md scale-[1.02]'
                    : 'bg-white text-[#1C2124] border-[#E8E3DA] hover:border-[#1A333E]/30 hover:bg-[#FAF8F5]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-[#2C4D5C] text-[#7C9B8B]' : 'bg-[#F3EFEA] text-[#1A333E]'
                    }`}
                  >
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#7C9B8B]" />}
                </div>

                <div>
                  <h3 className={`font-serif text-base font-semibold leading-snug ${isSelected ? 'text-white' : 'text-[#1A333E]'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs mt-1 line-clamp-2 ${isSelected ? 'text-[#E8E3DA]' : 'text-[#737D82]'}`}>
                    {item.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Desktop View: Selected Scenario Display Panel */}
        <div className="mt-8 hidden sm:block bg-white border border-[#E8E3DA] rounded-3xl p-6 sm:p-10 shadow-sm transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1A333E] text-[#7C9B8B] flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#587265] uppercase tracking-wider block">
                    {current.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1A333E] font-medium">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#4B5357] leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {current.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1C2124]">
                    <ShieldCheck className="w-4 h-4 text-[#587265] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Card inside Panel */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E8E3DA] rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#1A333E] uppercase tracking-wider block">
                  Como a psicoterapia pode ajudar
                </span>
                <p className="text-xs text-[#4B5357] leading-relaxed">
                  Na TCC, trabalhamos de forma estruturada para identificar os gatilhos, compreender os padrões de resposta e desenvolver ferramentas práticas sob medida para a sua rotina.
                </p>
              </div>

              <div className="pt-2 border-t border-[#E8E3DA]">
                <a
                  href={getWhatsAppUrl(current.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#1A333E] text-white rounded-xl text-xs font-medium hover:bg-[#2C4D5C] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#7C9B8B]" />
                  <span>Conversar sobre este tema no WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

