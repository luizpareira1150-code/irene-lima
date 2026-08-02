import React, { useState } from 'react';
import { professionalData } from '../data/professional';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackType?: 'portrait' | 'office' | 'abstract' | 'tcc';
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackType = 'abstract',
  className = '',
  ...props
}) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    if (fallbackType === 'portrait') {
      return (
        <div className={`bg-gradient-to-br from-[#FAF8F5] via-[#F3EFEA] to-[#E8E3DA]/50 border border-[#E8E3DA] rounded-2xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden shadow-xs ${className}`}>
          {/* 1. Blur decorative element */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#1A333E]/5 rounded-full blur-xl pointer-events-none" />
          
          {/* 2. Top header badge */}
          <div className="flex items-center justify-between gap-2 z-10">
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#1A333E] uppercase bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#E8E3DA]">
              Irene Lima • {professionalData.crp}
            </span>
            <div className="w-7 h-7 rounded-full bg-[#1A333E] text-white flex items-center justify-center font-serif text-xs font-medium shrink-0">
              IL
            </div>
          </div>
          
          {/* 3. Center avatar & title */}
          <div className="my-auto py-2 flex flex-col items-center text-center z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-[#587265] flex items-center justify-center shadow-2xs mb-2 sm:mb-3 text-[#1A333E]">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#1A333E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="font-serif text-lg sm:text-xl text-[#1A333E] font-medium leading-tight">Irene Lima</h3>
            <p className="text-[11px] sm:text-xs text-[#4B5357] mt-0.5">Psicóloga Clínica • TCC &amp; Neuropsicologia</p>
          </div>

          {/* 4. Bottom location strip */}
          <div className="z-10 bg-white/90 backdrop-blur-xs p-2.5 rounded-xl border border-[#E8E3DA] text-[11px] text-[#1A333E] flex items-center justify-between gap-2">
            <span className="truncate">Presencial &amp; Online</span>
            <span className="font-semibold text-[#587265] shrink-0">Rio de Janeiro</span>
          </div>
        </div>
      );
    }

    if (fallbackType === 'office') {
      return (
        <div className={`bg-gradient-to-tr from-[#E2E9E4] via-[#F5F7F6] to-[#DCE9ED] border border-[#D7DEDF] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden ${className}`}>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#82958A]/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center gap-2 text-xs font-medium text-[#244A5A]">
            <span className="w-2 h-2 rounded-full bg-[#82958A]" />
            Consultório no Rio de Janeiro
          </div>
          <div className="my-8 flex flex-col items-center justify-center text-center text-[#4D5659]">
            <svg className="w-12 h-12 text-[#527C8C] mb-2 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0H9m4 0h2" />
            </svg>
            <p className="text-sm font-medium text-[#244A5A]">Espaço Acolhedor e Reservado</p>
            <p className="text-xs text-[#4D5659] mt-1 max-w-xs">Ambiente preparado para escuta e construção de estratégias terapêuticas.</p>
          </div>
          <p className="text-xs text-[#4D5659] italic text-center">Atendimento presencial com endereço informado no contato</p>
        </div>
      );
    }

    if (fallbackType === 'tcc') {
      return (
        <div className={`bg-[#FCFBF9] border border-[#D7DEDF] rounded-2xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden ${className}`}>
          <div className="w-16 h-16 rounded-full bg-[#DCE9ED] flex items-center justify-center text-[#244A5A] mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h4 className="font-serif text-lg text-[#244A5A] font-medium">Pensamentos &amp; Comportamento</h4>
          <p className="text-xs text-[#4D5659] mt-1 max-w-xs">Compreendendo conexões para construir novas possibilidades práticas.</p>
        </div>
      );
    }

    // Default abstract fallback
    return (
      <div className={`bg-gradient-to-br from-[#DCE9ED]/60 to-[#F1DFE3]/50 border border-[#D7DEDF] rounded-2xl p-6 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="w-10 h-10 mx-auto rounded-full bg-white/80 border border-[#D7DEDF] flex items-center justify-center text-[#244A5A] mb-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <p className="text-xs text-[#4D5659] font-medium">Irene Lima • Psicologia</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={className}
      {...props}
    />
  );
};
