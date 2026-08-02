import React, { useState } from 'react';
import { professionalData, getWhatsAppUrl } from '../data/professional';
import { PrivacyModal } from './PrivacyModal';
import { TermsModal } from './TermsModal';
import { MessageCircle, Instagram, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A333E] text-white pt-16 pb-12 border-t border-[#2C4D5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-normal text-white">Irene Lima</span>
              <span className="text-xs bg-[#2C4D5C] text-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#7C9B8B]/30">
                {professionalData.crp}
              </span>
            </div>
            
            <p className="text-xs text-[#E8E3DA] leading-relaxed max-w-sm">
              Psicóloga clínica com atuação em Terapia Cognitivo-Comportamental (TCC) e aperfeiçoamento constante em Neuropsicologia. Atendimento a adolescentes e adultos.
            </p>

            <div className="text-xs text-[#7C9B8B] flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Atendimento presencial no Rio de Janeiro – RJ e online</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h3 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-2 text-[#E8E3DA]">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Quem Sou Eu (Sobre Irene)</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços Principais</a></li>
              <li><a href="#tcc" className="hover:text-white transition-colors">Abordagem TCC</a></li>
              <li><a href="#duvidas" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Official Contacts */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h3 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
              Canais Oficiais de Contato
            </h3>
            
            <ul className="space-y-3 text-[#E8E3DA]">
              <li>
                <a
                  href={getWhatsAppUrl(professionalData.messages.geral)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-[#7C9B8B] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#7C9B8B]" />
                  <span>WhatsApp: {professionalData.phoneDisplay}</span>
                </a>
              </li>

              <li>
                <a
                  href={professionalData.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#E8E3DA] hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C48B95]" />
                  <span>Instagram: {professionalData.instagram.handle}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${professionalData.email}`}
                  className="inline-flex items-center gap-2 text-[#E8E3DA] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#7C9B8B]" />
                  <span>E-mail: {professionalData.email}</span>
                </a>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-[#7C9B8B]">
              Atendimento presencial no Rio de Janeiro – RJ. O endereço é informado durante o agendamento.
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 border-t border-[#2C4D5C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7C9B8B]">
          <p>© {currentYear} Irene Lima • Psicóloga • CRP 05/48544. Todos os direitos reservados.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-white transition-colors focus:outline-none underline decoration-1 underline-offset-4"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button
              onClick={() => setTermsOpen(true)}
              className="hover:text-white transition-colors focus:outline-none underline decoration-1 underline-offset-4"
            >
              Termos de Uso
            </button>
          </div>
        </div>

      </div>

      {/* Modals */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </footer>
  );
};
