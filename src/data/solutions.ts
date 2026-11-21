export type Status = 'live' | 'beta' | 'template';

export interface Solution {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  /** App's own brand color: `light` for light mode, `dark` for dark mode. */
  accent?: { light: string; dark: string };
  /**
   * App logo, shown instead of `icon`. `file` is an SVG in src/assets/logos/ (inlined, so it can
   * use the card's --accent) or a PNG there. A `tile` logo has its own background
   * and fills the box; a `glyph` sits padded on the card's accent-tinted tile.
   */
  logo?: { file: string; kind: 'tile' | 'glyph' };
  tags: string[];
  status: Status;
  demoUrl: string;
  githubUrl: string;
}

export const solutions: Solution[] = [
  {
    name: 'Playmind AI',
    tagline: 'Browser tests from plain English',
    description:
      'Describe a test in plain English and Claude turns it into Playwright steps. Broken selectors heal themselves from cached alternatives, and logs stream live to a web UI. Every run exports a reusable pytest script, and an MCP server lets Claude create and run tests directly.',
    logo: { file: 'playmind-ai.svg', kind: 'tile' },
    icon: '🎭',
    accent: { light: '#b45309', dark: '#fbbf24' },
    tags: ['Playwright', 'Claude AI', 'MCP', 'FastAPI', 'pytest'],
    status: 'live',
    demoUrl: 'http://localhost:8000/',
    githubUrl: '',
  },
  {
    name: 'Deep Ruminate',
    tagline: 'Conversational data analytics',
    description:
      'Upload any dataset (CSV, Excel, JSON) and ask questions in plain English. Claude generates and executes Python analysis code, returning interactive Plotly charts, key metrics, and AI summaries — with PDF export.',
    logo: { file: 'deep-ruminate.svg', kind: 'tile' },
    icon: '🔍',
    accent: { light: '#2f6a73', dark: '#4ecdc4' },
    tags: ['FastAPI', 'Claude AI', 'Plotly', 'Docker', 'Pandas'],
    status: 'live',
    demoUrl: 'https://deepruminate.com/',
    githubUrl: 'https://github.com/mallik025/ai-data-analytics-engine',
  },
  {
    name: 'Mark Analyzer',
    tagline: 'AI-assisted stock market dashboard',
    description:
      'Personal stock market dashboard with technical analysis (RSI, MACD, Bollinger Bands), demand/supply zone detection, a plain-English query bar, portfolio P&L tracking, and price alerts — powered by Yahoo Finance and Claude AI.',
    logo: { file: 'mark-analyzer.svg', kind: 'glyph' },
    icon: '📈',
    accent: { light: '#0969da', dark: '#4493f8' },
    tags: ['FastAPI', 'yFinance', 'Claude AI', 'RSI/MACD', 'SQLite'],
    status: 'live',
    demoUrl: 'https://markanalyzer.duckdns.org',
    githubUrl: 'https://github.com/mallik025/mark-analyzer',
  },
  {
    name: 'Spell Mind AI',
    tagline: 'Vocabulary enrichment at scale',
    description:
      'Advanced dictionary enrichment tool powered by Merriam-Webster API. Fetches meanings, pronunciations, etymologies, usage examples, and language of origin — with a web UI, batch file upload, and CSV export.',
    logo: { file: 'spell-mind-ai.png', kind: 'glyph' },
    icon: '📖',
    accent: { light: '#1d6fb8', dark: '#38bdf8' },
    tags: ['Flask', 'Merriam-Webster API', 'Python', 'CSV Export'],
    status: 'live',
    demoUrl: 'https://spellmindai.duckdns.org',
    githubUrl: 'https://github.com/mallik025/spellmind_ai',
  },
  {
    name: 'Medodha',
    tagline: 'Medical coding, lookup to exam prep',
    description:
      'Search all 98,403 FY2027 ICD-10-CM codes (typos OK) and browse the hierarchy. Study with an AI tutor, practice and timed exams, and weak-area drills. Ask Claude coding questions and get suggested codes, each checked against the code table. Installable as an app (PWA).',
    logo: { file: 'medodha.svg', kind: 'tile' },
    icon: '🩺',
    accent: { light: '#1d4ed8', dark: '#60a5fa' },
    tags: ['Spring Boot', 'Java 21', 'React', 'PostgreSQL', 'Claude AI'],
    status: 'beta',
    demoUrl: 'http://localhost:5173/',
    githubUrl: 'https://github.com/mallik025/medodha',
  },
  {
    name: 'Tiny GPT',
    tagline: 'Train your own SLM from scratch',
    description:
      'A reusable SLM (Small Language Model) training template. Plug in your own data, pick a model size (500K–200M params), and train a domain-specific language model from scratch with Transformer + RoPE architecture.',
    icon: '🧠',
    accent: { light: '#1d4ed8', dark: '#60a5fa' },
    tags: ['PyTorch', 'Transformer', 'RoPE', 'TensorBoard', 'Python'],
    status: 'template',
    demoUrl: '#',
    githubUrl: 'https://github.com/mallik025/tiny-gpt',
  },
  {
    name: 'Virtual Cradle AI',
    tagline: 'AI-assisted development environments',
    description:
      'AI-assisted virtual environment for early-stage development workflows. Details coming soon.',
    icon: '🍼',
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
