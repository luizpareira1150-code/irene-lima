import React, { useEffect } from 'react';
import { professionalData } from '../data/professional';
import { X, Shield } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="bg-white border border-[#D7DEDF] rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-xl">
        {/* Header */}
        <div className="p-5 border-b border-[#D7DEDF] flex items-center justify-between bg-[#FCFBF9] rounded-t-2xl">
          <div className="flex items-center gap-2 text-[#244A5A]">
            <Shield className="w-5 h-5 text-[#527C8C]" />
            <h2 id="privacy-modal-title" className="font-serif text-xl font-medium">
              Política de Privacidade
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#4D5659] hover:bg-[#DCE9ED] rounded-full transition-colors"
            aria-label="Fechar Política de Privacidade"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#353A3C] leading-relaxed">
          <p>
            Esta Política de Privacidade descreve como as informações são tratadas no site profissional de <strong>Irene Lima ({professionalData.crp})</strong>, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <h3 className="font-serif text-base font-semibold text-[#244A5A] pt-2">
            1. Coleta de Dados Pessoais e Clínicos
          </h3>
          <p>
            Este site tem caráter estritamente institucional e informativo. <strong>Não solicitamos nem armazenamos informações clínicas sensíveis, históricos de saúde, diagnósticos ou documentos através de formulários neste site.</strong>
          </p>

          <h3 className="font-serif text-base font-semibold text-[#244A5A] pt-2">
            2. Comunicação via WhatsApp e E-mail
          </h3>
          <p>
            Ao clicar nos botões de contato via WhatsApp ou e-mail, você será direcionado para aplicativos externos de terceiros. As mensagens trocadas nesses canais seguem os termos e políticas de privacidade das respectivas plataformas. O sigilo das sessões terapêuticas é garantido rigorosamente conforme o Código de Ética Profissional do Psicólogo.
          </p>

          <h3 className="font-serif text-base font-semibold text-[#244A5A] pt-2">
            3. Cookies e Rastreamento
          </h3>
          <p>
            Utilizamos apenas cookies essenciais para o funcionamento básico e segurança da navegação. Não utilizamos pixels de rastreamento publicitário agressivos nem ferramentas de gravação de tela.
          </p>

          <h3 className="font-serif text-base font-semibold text-[#244A5A] pt-2">
            4. Seus Direitos
          </h3>
          <p>
            Você tem o direito de solicitar esclarecimentos sobre o tratamento dos seus dados de contato a qualquer momento pelo e-mail: <strong>{professionalData.email}</strong>.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#D7DEDF] bg-[#FCFBF9] rounded-b-2xl flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#244A5A] text-white text-xs font-medium rounded-xl hover:bg-[#1f3e4c] transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
