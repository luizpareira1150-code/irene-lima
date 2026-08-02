import React from 'react';
import { SkipLink } from './components/SkipLink';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { IdentificationSection } from './components/IdentificationSection';
import { ServicesSection } from './components/ServicesSection';
import { TccDiagram } from './components/TccDiagram';
import { AudienceSection } from './components/AudienceSection';
import { ContactBanner } from './components/ContactBanner';
import { FAQAccordion } from './components/FAQAccordion';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C2124] selection:bg-[#E8E3DA] selection:text-[#1A333E]">
      {/* Accessibility Skip Link */}
      <SkipLink />

      {/* Navigation Header */}
      <Header />

      {/* Main Content Flow */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Quem Sou Eu (Sobre Irene) - Placed near top */}
        <AboutSection />

        {/* 3. Mapeamento de Necessidades / Quando Buscar Ajuda */}
        <IdentificationSection />

        {/* 4. Serviços Principais */}
        <ServicesSection />

        {/* 5. Abordagem TCC (Tríade Cognitiva e Mitos) */}
        <TccDiagram />

        {/* 6. Público Atendido (Adolescentes e Adultos) */}
        <AudienceSection />

        {/* 8. Faixa de Agendamento */}
        <ContactBanner />

        {/* 10. Perguntas Frequentes (FAQ) */}
        <FAQAccordion />

        {/* 11. Chamada Final */}
        <FinalCTA />
      </main>

      {/* Footer & Modais de Privacidade/Termos */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
