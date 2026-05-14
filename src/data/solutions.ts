export type Status = 'live' | 'beta' | 'template';

export interface Solution {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  iconBg: string;
  tags: string[];
  status: Status;
  demoUrl: string;
  githubUrl: string;
}

export const solutions: Solution[] = [
  {
    name: 'Deep Ruminate',
    tagline: 'Conversational data analytics',
    description:
      'Upload any dataset (CSV, Excel, JSON) and ask questions in plain English. Claude generates and executes Python analysis code, returning interactive Plotly charts, key metrics, and AI summaries — with PDF export.',
    icon: '🔍',
    iconBg: 'bg-brand-50 dark:bg-brand-900/30',
    tags: ['FastAPI', 'Claude AI', 'Plotly', 'Docker', 'Pandas'],
    status: 'live',
    demoUrl: '#',
    githubUrl: 'https://github.com/mallik025/ai-data-analytics-engine',
  },
  {
    name: 'Spell Mind AI',
    tagline: 'Vocabulary enrichment at scale',
    description:
      'Advanced dictionary enrichment tool powered by Merriam-Webster API. Fetches meanings, pronunciations, etymologies, usage examples, and language of origin — with a web UI, batch file upload, and CSV export.',
    icon: '📖',
    iconBg: 'bg-purple-50 dark:bg-purple-900/20',
    tags: ['Flask', 'Merriam-Webster API', 'Python', 'CSV Export'],
    status: 'live',
    demoUrl: '#',
    githubUrl: 'https://github.com/mallik025/spellmind_ai',
  },
  {
    name: 'Tiny GPT',
    tagline: 'Train your own SLM from scratch',
    description:
      'A reusable SLM (Small Language Model) training template. Plug in your own data, pick a model size (500K–200M params), and train a domain-specific language model from scratch with Transformer + RoPE architecture.',
    icon: '🧠',
    iconBg: 'bg-orange-50 dark:bg-orange-900/20',
    tags: ['PyTorch', 'Transformer', 'RoPE', 'TensorBoard', 'Python'],
    status: 'template',
    demoUrl: '#',
    githubUrl: 'https://github.com/mallik025/tiny-gpt',
  },
  {
    name: 'Playmind AI',
    tagline: 'AI-powered interactive experiences',
    description:
      'AI-powered interactive experience platform. Details coming soon.',
    icon: '🎮',
    iconBg: 'bg-pink-50 dark:bg-pink-900/20',
    tags: ['AI', 'Python'],
    status: 'beta',
    demoUrl: '',
    githubUrl: '',
  },
  {
    name: 'Virtual Cradle AI',
    tagline: 'AI-assisted development environments',
    description:
      'AI-assisted virtual environment for early-stage development workflows. Details coming soon.',
    icon: '🍼',
    iconBg: 'bg-teal-50 dark:bg-teal-900/20',
    tags: ['AI', 'Python'],
    status: 'beta',
    demoUrl: '',
    githubUrl: '',
  },
  {
    name: 'Digital Cradle Twin',
    tagline: 'Digital twin lifecycle simulation',
    description:
      'Digital twin simulation platform for development lifecycle modeling. Details coming soon.',
    icon: '🔁',
    iconBg: 'bg-sky-50 dark:bg-sky-900/20',
    tags: ['Digital Twin', 'AI', 'Python'],
    status: 'beta',
    demoUrl: '',
    githubUrl: '',
  },
];

export const statusConfig: Record<Status, { label: string; classes: string }> = {
  live:     { label: '● Live',     classes: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  beta:     { label: '◐ Beta',     classes: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
  template: { label: '◆ Template', classes: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400' },
};
