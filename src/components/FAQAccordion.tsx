import React, { useState } from 'react';
import { faqData, getWhatsAppUrl, professionalData } from '../data/professional';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const half = Math.ceil(faqData.length / 2);
  const col1 = faqData.slice(0, half);
  const col2 = faqData.slice(half);

  const renderFaqCard = (faq: typeof faqData[0]) => {
    const isOpen = openId === faq.id;
    return (
      <div
        key={faq.id}
        className="bg-[#FAF8F5] border border-[#E8E3DA] rounded-2xl overflow-hidden shadow-2xs transition-all"
      >
        <button
          onClick={() => toggleItem(faq.id)}
          className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-medium text-[#1A333E] hover:text-[#2C4D5C] transition-colors focus:outline-none"
          aria-expanded={isOpen}
        >
          <span>{faq.question}</span>
          <ChevronDown
            className={`w-5 h-5 text-[#587265] shrink-0 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-[#4B5357] leading-relaxed border-t border-[#E8E3DA]/50 animate-fadeIn">
            <p className="pt-3">{faq.answer}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="duvidas" className="py-20 sm:py-28 bg-white border-b border-[#E8E3DA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E3DA] text-[#1A333E] text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#587265]" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A333E] font-normal leading-tight">
            Dúvidas Frequentes sobre o Atendimento
          </h2>

          <p className="text-base text-[#4B5357] leading-relaxed">
            Respostas claras sobre como funcionam as sessões, a abordagem TCC e a avaliação neuropsicológica.
          </p>
        </div>

        {/* Accordion List - 2 Columns */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          <div className="space-y-4">
            {col1.map(renderFaqCard)}
          </div>
          <div className="space-y-4">
            {col2.map(renderFaqCard)}
          </div>
        </div>

        {/* Help Note Bottom */}
        <div className="mt-10 p-6 bg-[#FAF8F5] rounded-3xl border border-[#E8E3DA] text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs text-[#737D82]">
            Não encontrou a resposta para a sua dúvida específica?
          </p>
          <a
            href={getWhatsAppUrl(professionalData.messages.geral)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A333E] text-white rounded-full text-xs font-medium hover:bg-[#2C4D5C] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#7C9B8B]" />
            <span>Enviar sua pergunta no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
