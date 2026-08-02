import React, { useEffect } from 'react';
import { professionalData } from '../data/professional';
import { X, FileText } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC = ({ isOpen, onClose }) => {
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
      aria-labelledby="terms-modal-title"
    >
      <div className="bg-white border border-[#D7DEDF] rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-xl">
        {/* Header */}
        <div className="p-5 border-b border-[#D7DEDF] flex items-center justify-between bg-[#FCFBF9] rounded-t-2xl">
          <div className="flex items-center gap-2 text-[#244A5A]">
            <FileText className="w-5 h-5 text-[#527C8C]" />
            <h2 id="terms-modal-title" className="font-serif text-xl font-medium">
              Termos de Uso do Site
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#4D5659] hover:bg-[#DCE9ED] rounded-full transition-colors"
            aria-label="Fechar Termos de Uso"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#353A3C] leading-relaxed">
          <p>
            Bem-vindo ao site profissional da psicóloga <strong>Irene Lima ({professionalData.crp})</strong>. Ao navegar por esta plataforma, você concorda com os termos apresentados abaixo.
          </p>

          <h3 className="font-serif text-base font-semibold text-[#244A5A] pt-2">
            1. Caráter Informativo
          </h3>
          <p>
            Todo o conteúdo publicado neste site possui finalidade meramente educativa e informativa sobre a Terapia Cognitivo-Comportamental, ansiedade, TDAH e avaliação neuropsicológica. <strong>As informações contidas aqui não substituem consultas, diagnósticos ou pareceres profissionais individualizados.</strong>
          </p>

          <h3 className="font-serif text-base font-semibold text-[#244A5A] pt-2">
            2. Ausência de Atendimento Emergencial
          </h3>
          <p>
            <strong>Este site e o canal de WhatsApp não realizam atendimento psicológico de urgência ou emergência.</strong> Em situações de crise grave ou risco imediato à vida, dirija-se ao pronto-socorro mais próximo, acione o SAMU pelo número 192 ou entre em contato com o Centro de Valorização da Vida (CVV) pelo número 188.
          </p>

          <h3 className="font-serif text-base font-semibold text-[#244A5A] pt-2">
            3. Direitos Autorais
          </h3>
          <p>
            A estrutura visual, os textos adaptados e a identidade gráfica são protegidos por direitos autorais. A reprodução não autorizada do conteúdo para fins comerciais é proibida.
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
