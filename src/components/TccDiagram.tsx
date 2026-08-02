import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { professionalData, getWhatsAppUrl } from '../data/professional';
import { Brain, Heart, Activity, ArrowRightLeft, CheckCircle2, XCircle, MessageCircle, ChevronDown } from 'lucide-react';

export const TccDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'triade' | 'mitos'>('triade');
  const [activeNode, setActiveNode] = useState<'pensamento' | 'emocao' | 'comportamento'>('pensamento');

  const nodes = {
    pensamento: {
      id: 'pensamento',
      title: "Pensamento (Interpretação)",
      icon: Brain,
      color: "bg-[#1A333E] text-[#7C9B8B]",
      summary: "A forma como interpretamos os acontecimentos",
      details: "Diante de um evento, a mente produz interpretações automáticas. Pensamentos como 'não vou dar conta' ou 'tudo vai dar errado' influenciam diretamente como nos sentimos e como reagimos.",
      example: "Exemplo: Receber um novo projeto no trabalho e pensar imediatamente 'isso é complexo demais para mim'."
    },
    emocao: {
      id: 'emocao',
      title: "Emoção (Sintoma Sentido)",
      icon: Heart,
      color: "bg-[#2C4D5C] text-[#7C9B8B]",
      summary: "A resposta emocional e corporal associada",
      details: "Os pensamentos engrenam respostas emocionais (ansiedade, medo, frustração, tristeza) e reações físicas no corpo (tensão, palpitação, nó no estômago, respiração curta).",
      example: "Exemplo: O pensamento sobre o projeto ativa ansiedade intensa e aperto no peito."
    },
    comportamento: {
      id: 'comportamento',
      title: "Comportamento (Ação ou Esquiva)",
      icon: Activity,
      color: "bg-[#587265] text-white",
      summary: "A atitude tomada em resposta ao sentimento",
      details: "Para aliviar o desconforto emocional, adotamos comportamentos como procrastinar, adiar decisões, buscar confirmações constantes ou isolamento social — o que por sua vez reforça os pensamentos iniciais.",
      example: "Exemplo: Procrastinar o início do projeto para não sentir ansiedade, aumentando a pressão posterior."
    }
  };

  const current = nodes[activeNode];
  const CurrentIcon = current.icon;

  const mythsVsRealities = [
    {
      myth: "A TCC é apenas 'pensar positivo' e ignorar os problemas reais.",
      reality: "A TCC busca um pensamento realista e fundamentado nas evidências da situação, e não um otimismo ingênuo sem apoio prático."
    },
    {
      myth: "A TCC ignora o passado da pessoa e foca só no momento atual.",
      reality: "A história de vida e as experiências da infância são fundamentais para compreender como os esquemas e crenças foram formados."
    },
    {
      myth: "O terapeuta vai me dizer exatamente o que devo fazer da minha vida.",
      reality: "O trabalho é puramente colaborativo. Terapeuta e paciente investigam juntos e constroem estratégias para que você ganhe autonomia."
    },
    {
      myth: "Psicoterapia é um processo longo sem prazos ou objetivos definidos.",
      reality: "A TCC é uma abordagem estruturada e focada em metas claras pactuadas abertamente entre terapeuta e paciente."
    }
  ];

  return (
    <section id="tcc" className="py-20 sm:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFEA] text-[#1A333E] text-xs font-semibold uppercase tracking-wider">
            <span>Abordagem TCC</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A333E] font-normal leading-tight">
            Como funciona a Terapia Cognitivo-Comportamental?
          </h2>

          <p className="text-base text-[#4B5357] leading-relaxed">
            A TCC é uma abordagem científica focada na relação entre o que você pensa, o que você sente e a forma como você age no dia a dia.
          </p>

          {/* Toggle Tab */}
          <div className="inline-flex p-1 bg-white border border-[#E8E3DA] rounded-full shadow-2xs mt-4">
            <button
              onClick={() => setActiveTab('triade')}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-colors ${
                activeTab === 'triade'
                  ? 'bg-[#1A333E] text-white shadow-xs'
                  : 'text-[#4B5357] hover:text-[#1A333E]'
              }`}
            >
              A Tríade Cognitiva
            </button>
            <button
              onClick={() => setActiveTab('mitos')}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-colors ${
                activeTab === 'mitos'
                  ? 'bg-[#1A333E] text-white shadow-xs'
                  : 'text-[#4B5357] hover:text-[#1A333E]'
              }`}
            >
              Mitos vs. Verdades
            </button>
          </div>
        </div>

        {/* Tab 1: Triad Interactive View */}
        {activeTab === 'triade' && (
          <div className="mt-12 space-y-8 animate-fadeIn">
            
            {/* Mobile View: Accordion (Expands directly below each option) */}
            <div className="space-y-3 sm:hidden">
              {(Object.keys(nodes) as Array<keyof typeof nodes>).map((key) => {
                const item = nodes[key];
                const ItemIcon = item.icon;
                const isSelected = activeNode === key;

                return (
                  <div
                    key={key}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isSelected
                        ? 'bg-white border-[#1A333E] shadow-sm'
                        : 'bg-white border-[#E8E3DA]'
                    }`}
                  >
                    <button
                      onClick={() => setActiveNode(key)}
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
                            {item.summary}
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
                            <div>
                              <h4 className="font-semibold text-[#1A333E] text-xs uppercase tracking-wider mb-1.5">
                                O que acontece nesta etapa?
                              </h4>
                              <p className="text-xs text-[#4B5357] leading-relaxed">
                                {item.details}
                              </p>
                            </div>

                            <div className="bg-white p-3.5 rounded-xl border border-[#E8E3DA]">
                              <h4 className="font-semibold text-[#1A333E] text-[11px] uppercase tracking-wider mb-1">
                                Exemplo Prático:
                              </h4>
                              <p className="text-xs text-[#1C2124] italic leading-relaxed">
                                "{item.example}"
                              </p>
                            </div>

                            <div className="pt-2">
                              <a
                                href={getWhatsAppUrl(professionalData.messages.psicoterapia)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 px-4 bg-[#1A333E] text-white rounded-xl text-xs font-medium hover:bg-[#2C4D5C] transition-colors flex items-center justify-center gap-2"
                              >
                                <MessageCircle className="w-4 h-4 text-[#7C9B8B]" />
                                <span>Agendar Sessão de TCC</span>
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

            {/* Desktop View: Interactive Nodes Selection Row */}
            <div className="hidden sm:grid sm:grid-cols-3 gap-4">
              {(Object.keys(nodes) as Array<keyof typeof nodes>).map((key) => {
                const item = nodes[key];
                const ItemIcon = item.icon;
                const isSelected = activeNode === key;

                return (
                  <button
                    key={key}
                    onClick={() => setActiveNode(key)}
                    className={`p-6 rounded-2xl text-left transition-all border flex items-center gap-4 ${
                      isSelected
                        ? 'bg-[#1A333E] text-white border-[#1A333E] shadow-md scale-[1.02]'
                        : 'bg-white text-[#1C2124] border-[#E8E3DA] hover:border-[#1A333E]/30'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#2C4D5C] text-[#7C9B8B]' : 'bg-[#F3EFEA] text-[#1A333E]'
                    }`}>
                      <ItemIcon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className={`font-serif text-lg font-medium ${isSelected ? 'text-white' : 'text-[#1A333E]'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs mt-0.5 ${isSelected ? 'text-[#E8E3DA]' : 'text-[#737D82]'}`}>
                        {item.summary}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Desktop View: Selected Detail Banner */}
            <div className="hidden sm:block bg-white border border-[#E8E3DA] rounded-3xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#E8E3DA]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1A333E] text-[#7C9B8B] flex items-center justify-center shrink-0">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#587265] uppercase tracking-wider block">
                      Elemento Conectado
                    </span>
                    <h3 className="font-serif text-2xl text-[#1A333E] font-medium">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <div className="text-xs text-[#737D82] flex items-center gap-2">
                  <ArrowRightLeft className="w-4 h-4 text-[#587265]" />
                  <span>Todos os 3 elementos se influenciam continuamente</span>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-[#4B5357] leading-relaxed">
                <div>
                  <h4 className="font-semibold text-[#1A333E] text-xs uppercase tracking-wider mb-2">
                    O que acontece nesta etapa?
                  </h4>
                  <p>{current.details}</p>
                </div>

                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E3DA] space-y-1">
                  <h4 className="font-semibold text-[#1A333E] text-xs uppercase tracking-wider">
                    Exemplo Prático de Rotina:
                  </h4>
                  <p className="text-xs text-[#1C2124] italic">
                    "{current.example}"
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#E8E3DA] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#737D82]">
                  Na consulta, aprendemos a reestruturar essa espiral para que você recupere o controle sobre suas decisões.
                </p>

                <a
                  href={getWhatsAppUrl(professionalData.messages.psicoterapia)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#1A333E] text-white rounded-full text-xs font-medium hover:bg-[#2C4D5C] transition-colors flex items-center gap-2 shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#7C9B8B]" />
                  <span>Agendar Sessão de TCC</span>
                </a>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Myths vs Realities Grid */}
        {activeTab === 'mitos' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {mythsVsRealities.map((item, index) => (
              <div key={index} className="bg-white border border-[#E8E3DA] rounded-3xl p-7 space-y-4 shadow-xs">
                {/* Myth */}
                <div className="p-4 rounded-2xl bg-[#FFF5F5] border border-[#FAD2D2] flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#C84B4B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold text-[#C84B4B] uppercase tracking-wider block">
                      Mito
                    </span>
                    <p className="text-xs text-[#2D1B1B] font-medium leading-relaxed">
                      "{item.myth}"
                    </p>
                  </div>
                </div>

                {/* Reality */}
                <div className="p-4 rounded-2xl bg-[#F2F7F4] border border-[#D1E3D8] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#587265] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold text-[#587265] uppercase tracking-wider block">
                      Verdade Clínica
                    </span>
                    <p className="text-xs text-[#1C2E24] leading-relaxed">
                      {item.reality}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

