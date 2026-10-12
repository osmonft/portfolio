export const SITE = {
  name: 'Osmon Djumagulov',
  url: 'https://portfolio-nine-sandy-dx3muidb34.vercel.app',
  tagline: 'Finance, data and AI',
  location: 'New York',
  description: 'Osmon Djumagulov. Finance, data and AI. Baruch College, New York.',
};

export const CONTACT = {
  email: 'osmonbek.djumagulov@gmail.com',
  linkedin: 'https://www.linkedin.com/in/osmon-d',
  github: 'https://github.com/osmonft',
  resume: '/Osmonbek_Djumagulov_Resume.pdf',
};

export type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  size: 'full' | 'half' | 'portrait';
};

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  did: string;
  facts: [string, string][];
  tags: string[];
  href: string;
  linkLabel: string;
  shots: Shot[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'edge-terminal',
    name: 'Edge Terminal',
    kind: 'Prediction-market analytics',
    summary:
      'An analytics platform for Kalshi and Polymarket traders. It scores the gap between market-implied probabilities and independent model estimates, pulling live prices and volume from both exchanges across politics, macro and sports. Kelly sizing, risk of ruin and a trade journal sit around it.',
    did:
      'Founded and built it. Validated the model live with a small allocation of personal capital across three flagged mispricings, returning 156% over two months, measured by a performance layer tracking win rate, realized P&L and edge captured against fair odds.',
    facts: [
      ['Year', '2026'],
      ['Role', 'Founder'],
      ['Markets', 'Kalshi, Polymarket'],
      ['Result', '+156% on a live test allocation over two months'],
      ['Status', 'Live'],
    ],
    tags: ['AI', 'Prediction Markets', 'SaaS', 'Risk'],
    href: 'https://edgeterminal.net',
    linkLabel: 'edgeterminal.net',
    shots: [
      { src: '/work/edge-terminal-1.jpg', alt: 'Edge Terminal home', width: 1600, height: 1000, size: 'full' },
      { src: '/work/edge-terminal-2.jpg', alt: 'A market analysis in Edge Terminal', width: 1600, height: 1000, size: 'half' },
      { src: '/work/edge-terminal-m.jpg', alt: 'Edge Terminal on a phone', width: 800, height: 1436, size: 'portrait' },
      { src: '/work/edge-terminal-3.jpg', alt: 'Edge Terminal tools', width: 1600, height: 1000, size: 'full' },
    ],
  },
  {
    slug: 'theo',
    name: 'THEO',
    kind: 'The market-making game',
    summary:
      'Free multiplayer trivia built on how a market maker thinks. Every player bids a range; the tightest range wins the market, sets the line, and everyone else picks a side. Confidence, not just knowledge, decides the round.',
    did:
      'Designed and built the game: guess numbers, make markets and put your confidence on the line, for 2 to 8 players with no sign-up.',
    facts: [
      ['Players', '2 to 8, no sign-up'],
      ['Rounds', '3, 5 or 7'],
      ['Status', 'Live'],
    ],
    tags: ['Multiplayer', 'Game', 'Market Making', 'Trading'],
    href: 'https://theo-market-game.osmonft.workers.dev/',
    linkLabel: 'Play THEO',
    shots: [
      { src: '/work/theo-1.jpg', alt: 'THEO home', width: 1600, height: 1000, size: 'full' },
      { src: '/work/theo-m.jpg', alt: 'THEO on a phone', width: 800, height: 1436, size: 'portrait' },
      { src: '/work/theo-2.jpg', alt: 'How a round of THEO works', width: 1600, height: 578, size: 'half' },
    ],
  },
  {
    slug: 'chainsight',
    name: 'ChainSight',
    kind: 'Chrome extension',
    summary:
      'A verified Chrome extension that spots Solana and Ethereum token addresses on X and pulls live liquidity, volume, market cap and contract age from decentralized exchanges, so due diligence happens in the feed instead of five tabs later.',
    did:
      'Co-founded it at the Colosseum Solana Hackathon. It shipped to the Chrome Web Store as a verified extension rated 4.5 stars.',
    facts: [
      ['Year', '2025'],
      ['Role', 'Co-founder'],
      ['Built at', 'Colosseum Solana Hackathon'],
      ['Status', 'Live, verified'],
    ],
    tags: ['Chrome Extension', 'JavaScript', 'Crypto', 'Analytics'],
    href: 'https://chromewebstore.google.com/detail/tweet-ca-helper-chainsigh/eadccpcdekfcoalobnmkgmblfomlimim',
    linkLabel: 'Chrome Web Store',
    shots: [
      { src: '/work/chainsight-2.jpg', alt: 'ChainSight on an X search', width: 1280, height: 800, size: 'full' },
      { src: '/work/chainsight-3.jpg', alt: 'ChainSight token history', width: 1280, height: 800, size: 'half' },
      { src: '/work/chainsight-5.jpg', alt: 'ChainSight address scraper', width: 1280, height: 800, size: 'half' },
      { src: '/work/chainsight-1.jpg', alt: 'ChainSight content filter', width: 1280, height: 800, size: 'full' },
    ],
  },
  {
    slug: 'coach-caton',
    name: 'Coach Caton',
    kind: 'AI assistant',
    summary:
      'An AI assistant for a hurdles coaching business. It answers clients and prospects from a knowledge base drawn from four social platforms, so the owner coaches instead of answering email.',
    did:
      'Built it as a developer at ODP AI Solutions. Engineered the knowledge base across four social platforms, cut the owner’s email volume from 70 to 15 a month and captured 100+ leads into a central database.',
    facts: [
      ['Role', 'Developer, ODP AI Solutions'],
      ['Result', 'Owner email down from 70 to 15 a month'],
      ['Leads', '100+ captured to one database'],
      ['Status', 'Live'],
    ],
    tags: ['AI', 'Web App', 'Coaching', 'Automation'],
    href: 'https://hurdlepro.lovable.app/ask-coach',
    linkLabel: 'Ask Coach',
    shots: [
      { src: '/work/coach-caton-1.jpg', alt: 'Coach Caton', width: 1600, height: 1000, size: 'full' },
      { src: '/work/coach-caton-m.jpg', alt: 'HurdlePro on a phone', width: 800, height: 1436, size: 'portrait' },
      { src: '/work/coach-caton-2.jpg', alt: 'HurdlePro home', width: 1600, height: 1000, size: 'half' },
    ],
  },
];

export const IN_DEVELOPMENT = {
  name: 'ConnectED',
  kind: 'Chrome extension',
  desc: 'A Chrome extension that drafts personalized LinkedIn connection requests, using AI to write a tailored note from a prospect’s profile.',
  tags: ['Chrome Extension', 'JavaScript', 'AI', 'LinkedIn'],
};

export const EDUCATION = {
  school: 'Baruch College, Zicklin School of Business',
  degree: 'BBA in Finance, Minor in Communications',
  dates: 'Dec 2026',
  place: 'New York, NY',
  honors: ['GPA 3.7 / 4.00', 'Zicklin Honors Program', 'Dean’s List, all terms'],
  coursework:
    'Corporate Finance, Financial Reporting Analysis, Advanced Investment Analysis, Statistical Analysis in Economics and Finance, Honors Case Studies in Business',
};

export type Entry = { org: string; role: string; dates: string; place?: string; bullets: string[] };

export const EXPERIENCE: Entry[] = [
  {
    org: 'Edge Terminal', role: 'Start Up Founder / Prediction market analytics platform', dates: 'Mar 2026 to Aug 2026', place: 'New York, NY',
    bullets: [
      'Built and launched an analytics platform for Kalshi and Polymarket traders that scores mispricing between market-implied probabilities and independent model estimates, pulling live pricing and volume from both exchange APIs across politics, macro and sports.',
      'Validated the model live by deploying a small test allocation of personal capital across three flagged mispricings, returning 156% over two months, measured through a performance layer tracking win rate, realized P&L and edge captured versus fair odds.',
    ],
  },
  {
    org: 'Murray Hill Group', role: 'Investment Analyst / Private equity and venture capital', dates: 'Jun 2025 to Aug 2025', place: 'New York, NY',
    bullets: [
      'Performed independent due diligence on a private nuclear generation company, analyzing projected cash flows, cost structure and contract-backed revenue visibility, informing a decision to defer the $10M investment until technology and contract milestones de-risked the entry.',
      'Sized a ~$18B annual DoD diesel spend addressable by microreactor generation, mapping the US power regulatory environment, Project Pele, customer pipeline and offtake contract structures to set the revenue ceiling.',
      'Authored investment memos on the target and its closest competitor, benchmarking cost efficiency, capital intensity and technology readiness to stress-test the recommendation.',
      'Created a regulatory timeline diagram mapping approval milestones to first generation, giving senior leadership one page to judge how far the company stood from revenue.',
    ],
  },
  {
    org: 'ODP AI Solutions', role: 'Developer', dates: 'Jun 2024 to Present', place: 'New York, NY',
    bullets: [
      'Launched a proprietary AI chatbot for a sports coaching business, cutting owner email volume from 70 to 15 per month and capturing 100+ leads into a centralized database.',
      'Engineered a custom knowledge base aggregating business information across four social platforms, enabling the chatbot to answer client and prospect questions with zero staff involvement.',
    ],
  },
];

export const RESUME_PROJECTS: Entry[] = [
  {
    org: 'Portfolio Management', role: 'Long/short multi-asset fund', dates: 'Mar 2026 to May 2026',
    bullets: [
      'Head of Trading for a $100M simulated long/short multi-asset fund with 30% leverage, growing the book to $141.1M (+8.5%) through Fed policy shifts and Middle East geopolitical uncertainty, monitoring risk through VaR, standard deviation and cross-holding correlation.',
      'Pitched a long Exxon and Chevron position on Strait of Hormuz supply risk during US-Iran escalation, sizing on asymmetry with limited downside to baseline valuation.',
    ],
  },
  {
    org: 'Equity Research: Intel (INTC)', role: 'Valuation', dates: 'May 2025',
    bullets: [
      'Selected EV/EBITDA as the appropriate methodology after negative earnings ruled out P/E and negative free cash flow made a DCF unreliable, forecasting five years of revenue and EBITDA to arrive at a $22.24/share target price.',
      'Assessed Intel’s liquidity position and capital intensity, identifying Intel Foundry as the swing factor while weighing geopolitical risk and US reliance on foreign chip manufacturing.',
    ],
  },
  {
    org: 'Research Paper: Federal Student Loans and Homeownership', role: 'Econometrics', dates: 'Dec 2025',
    bullets: [
      'Analyzed 300,000+ rows of federal loan disbursement data across 7,500+ institutions, standardizing the raw dataset for analysis and building regressions that linked unsubsidized lending to lower homeownership rates and subsidized lending to higher.',
    ],
  },
  {
    org: 'Colosseum Solana Hackathon: ChainSight', role: 'Co-founder', dates: 'Oct 2025',
    bullets: [
      'Co-founded ChainSight, a verified Chrome extension rated 4.5 stars that detects Solana and Ethereum token addresses on Twitter and pulls live liquidity, volume, market cap and contract age from decentralized exchanges for instant due diligence.',
    ],
  },
];

export const CERTS = [
  { name: 'M&A Simulation, Ranked #3', by: 'UBS via AmplifyMe', date: 'Nov 2025' },
  { name: 'Securities Industry Essentials (SIE)', by: 'FINRA', date: 'Jun 2025' },
  { name: 'Bloomberg Market Concepts', by: 'Bloomberg', date: 'Apr 2025' },
  { name: 'Sales & Trading Simulation, Ranked #1', by: 'Morgan Stanley, UBS via AmplifyMe', date: 'Oct 2024' },
];

export const SKILLS = [
  { label: 'Technical', items: ['Financial Modeling', 'Valuation', 'Comparable Company Analysis', 'Cash Flow Modeling', 'Capital Structure Analysis'] },
  { label: 'Platforms', items: ['Bloomberg Terminal', 'Capital IQ', 'Excel (Pivot Tables)', 'PowerPoint'] },
  { label: 'Data', items: ['Python', 'SQL', 'Tableau', 'Regression Analysis', 'Statistical Modeling'] },
  { label: 'AI', items: ['Claude Code', 'Codex', 'API Integration'] },
  { label: 'Languages', items: ['Kyrgyz (native)', 'Russian (fluent)'] },
  { label: 'Interests', items: ['Chess', 'European football', 'Crypto markets', 'Film', 'Video editing'] },
];
