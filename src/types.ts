export interface ContactMessage {
  id: string;
  label: string;
  message: string;
  encodedUrl: string;
}

export interface ProfessionalData {
  name: string;
  title: string;
  crp: string;
  city: string;
  state: string;
  modalities: {
    presencial: string;
    online: string;
  };
  audience: string[];
  approach: string;
  phoneDisplay: string;
  phoneIntl: string;
  whatsappBaseUrl: string;
  messages: {
    geral: string;
    psicoterapia: string;
    ansiedade: string;
    tdah: string;
    avaliacaoneuro: string;
  };
  instagram: {
    handle: string;
    url: string;
  };
  email: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Geral' | 'Psicoterapia & TCC' | 'Ansiedade' | 'TDAH' | 'Avaliação Neuropsicológica' | 'Presencial & Valores';
}

export interface TimelineStep {
  number: number;
  title: string;
  description: string;
  details?: string[];
}

export interface ServiceCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaKey: 'psicoterapia' | 'tdah' | 'avaliacaoneuro';
  accentColor: 'blue' | 'sage' | 'pink';
}
