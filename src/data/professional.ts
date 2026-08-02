import { ProfessionalData, FAQItem, TimelineStep, ServiceCardData } from '../types';

// Encodes WhatsApp URL parameters safely
export const getWhatsAppUrl = (text: string): string => {
  return `https://wa.me/5521982475050?text=${encodeURIComponent(text)}`;
};

export const professionalData: ProfessionalData = {
  name: "Irene Lima",
  title: "Psicóloga",
  crp: "CRP 05/48544",
  city: "Rio de Janeiro",
  state: "RJ",
  modalities: {
    presencial: "Atendimento presencial no Rio de Janeiro – RJ. O endereço e as orientações são informados durante o contato.",
    online: "Atendimento online via videochamada segura e privativa."
  },
  audience: ["Adolescentes", "Adultos"],
  approach: "Terapia Cognitivo-Comportamental (TCC)",
  phoneDisplay: "(21) 98247-5050",
  phoneIntl: "5521982475050",
  whatsappBaseUrl: "https://wa.me/5521982475050",
  messages: {
    geral: "Olá, Irene! Encontrei seu site e gostaria de receber informações sobre o atendimento.",
    psicoterapia: "Olá, Irene! Encontrei seu site e gostaria de saber como funciona a psicoterapia.",
    ansiedade: "Olá, Irene! Encontrei seu site e gostaria de receber informações sobre o acompanhamento psicológico para ansiedade.",
    tdah: "Olá, Irene! Encontrei seu site e gostaria de saber como funciona o atendimento relacionado ao TDAH.",
    avaliacaoneuro: "Olá, Irene! Encontrei seu site e gostaria de saber como funciona a avaliação neuropsicológica."
  },
  instagram: {
    handle: "@psicologairenelima",
    url: "https://instagram.com/psicologairenelima"
  },
  email: "irenelima.miss@gmail.com"
};

export const mainServices: ServiceCardData[] = [
  {
    id: "psicoterapia",
    title: "Psicoterapia Individual",
    subtitle: "Acompanhamento baseado em TCC",
    description: "Um espaço estruturado e acolhedor para compreender relações entre pensamentos, emoções e comportamentos, identificando padrões e construindo estratégias práticas para o cotidiano.",
    highlights: [
      "Compreensão de padrões de pensamento e comportamento",
      "Fortalecimento da regulação emocional e autoconhecimento",
      "Estratégias colaborativas aplicáveis à rotina real",
      "Atendimento a adolescentes e adultos"
    ],
    ctaLabel: "Saber sobre psicoterapia",
    ctaKey: "psicoterapia",
    accentColor: "blue"
  },
  {
    id: "tdah",
    title: "Acompanhamento para TDAH",
    subtitle: "Atenção, organização e rotina",
    description: "Atendimento voltado para adolescentes e adultos que vivenciam desafios de atenção, procrastinação, planejamento e regulação emocional associados ou investigados para TDAH.",
    highlights: [
      "Organização de rotina e gerenciamento do tempo",
      "Manejo de dificuldades de atenção e execução",
      "Compreensão dos impactos emocionais do funcionamento cognitivo",
      "Abordagem sem rotulações ou soluções simplistas"
    ],
    ctaLabel: "Conversar sobre TDAH",
    ctaKey: "tdah",
    accentColor: "sage"
  },
  {
    id: "avaliacao",
    title: "Avaliação Neuropsicológica",
    subtitle: "Investigação cognitiva e comportamental",
    description: "Processo estruturado de investigação das funções cognitivas (atenção, memória, raciocínio, funções executivas) e aspectos emocionais, integrando história, contexto e instrumentos específicos.",
    highlights: [
      "Investigação individualizada conforme a demanda",
      "Análise integrada de perfil cognitivo e socioemocional",
      "Sessão de devolutiva detalhada com orientações práticas",
      "Raciocínio clínico contínuo e fundamentado"
    ],
    ctaLabel: "Entender a avaliação",
    ctaKey: "avaliacaoneuro",
    accentColor: "pink"
  }
];

export const assessmentTimeline: TimelineStep[] = [
  {
    number: 1,
    title: "Etapa 1 — Contato inicial",
    description: "Conversa acolhedora para esclarecer dúvidas gerais sobre o funcionamento, valores, modalidades e compreender brevemente a demanda principal solicitada."
  },
  {
    number: 2,
    title: "Etapa 2 — Entrevista de Anamnese",
    description: "Sessão inicial de levantamento detalhado da história de vida, rotina, desenvolvimento, histórico acadêmico ou profissional e contexto emocional do paciente."
  },
  {
    number: 3,
    title: "Etapa 3 — Processo Avaliativo",
    description: "Encontros dedicados à observação clínica e aplicação cuidadosa de instrumentos e testes psicológicos padronizados, definidos especificamente para a demanda investigada."
  },
  {
    number: 4,
    title: "Etapa 4 — Integração de Dados",
    description: "Análise quantitativa e qualitativa minuciosa de todas as informações coletadas, histórico e resultados dos testes sob perspectiva clínica abrangente."
  },
  {
    number: 5,
    title: "Etapa 5 — Devolutiva e Orientações",
    description: "Sessão dedicada à entrega e explicação detalhada do laudo/relatório neuropsicológico, esclarecimento de dúvidas e recomendações para possíveis próximos passos."
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como sei se devo procurar psicoterapia?",
    answer: "A psicoterapia pode ser procurada quando sentimentos, preocupações ou comportamentos começam a causar sofrimento, sobrecarga ou interferir na sua rotina, relacionamentos ou trabalho. Também é indicada para quem deseja se compreender melhor e desenvolver estratégias diante de desafios específicos.",
    category: "Geral"
  },
  {
    id: "faq-2",
    question: "Preciso saber explicar exatamente o que estou sentindo antes de agendar?",
    answer: "Não. É perfeitamente normal chegar à consulta sem conseguir nomear ou organizar todas as sensações. Parte do processo terapêutico é justamente construir esse espaço seguro para organizar pensamentos e compreender o que está acontecendo.",
    category: "Geral"
  },
  {
    id: "faq-3",
    question: "Como funciona a Terapia Cognitivo-Comportamental (TCC)?",
    answer: "A TCC é uma abordagem focada em compreender como nossos pensamentos e interpretações influenciam como nos sentimos e como agimos. De forma colaborativa, terapeuta e paciente trabalham juntos para identificar padrões que geram sofrimento e testar alternativas mais realistas e adaptativas para o cotidiano.",
    category: "Psicoterapia & TCC"
  },
  {
    id: "faq-15",
    question: "A psicoterapia substitui acompanhamento médico ou psiquiátrico?",
    answer: "Não. A psicoterapia e a medicina/psiquiatria são áreas complementares. Quando necessário e indicado, o trabalho pode ser conduzido de forma multiprofissional para o melhor cuidado do paciente.",
    category: "Geral"
  }
];
