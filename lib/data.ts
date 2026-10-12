export const CONTACT = {
  email: 'osmonbek.djumagulov@gmail.com',
  linkedin: 'https://www.linkedin.com/in/osmon-d',
  github: 'https://github.com/osmonft',
};

export type Project = {
  num: string;
  name: string;
  status: 'LIVE' | 'COMING SOON';
  desc: string;
  tags: string[];
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    num: '01',
    name: 'Edge Terminal',
    status: 'LIVE',
    desc: 'Prediction market intelligence for Kalshi and Polymarket traders. AI probability estimates, Kelly and risk of ruin calculators, a trade journal and an AI review of your edge.',
    tags: ['AI', 'Prediction Markets', 'SaaS', 'Risk'],
    href: 'https://edgeterminal.net',
  },
  {
    num: '02',
    name: 'THEO',
    status: 'LIVE',
    desc: 'The Market Making Game. A free multiplayer trivia game for 2 to 8 players: guess numbers, make markets and put your confidence on the line.',
    tags: ['Multiplayer', 'Game', 'Market Making', 'Trading'],
    href: 'https://theo-market-game.osmonft.workers.dev/',
  },
  {
    num: '03',
    name: 'ChainSight',
    status: 'LIVE',
    desc: 'A verified Chrome extension rated 4.5 stars. Detects Solana and Ethereum token addresses on Twitter and pulls live liquidity, volume, market cap and contract age for instant due diligence. Built at the Colosseum Solana Hackathon.',
    tags: ['Chrome Extension', 'JavaScript', 'Crypto', 'Analytics'],
    href: 'https://chromewebstore.google.com/detail/tweet-ca-helper-chainsigh/eadccpcdekfcoalobnmkgmblfomlimim',
  },
  {
    num: '04',
    name: 'Coach Caton',
    status: 'LIVE',
    desc: 'An AI chatbot for a sports coaching business that cut the owner’s email volume from 70 to 15 a month and captured 100+ leads into a central database.',
    tags: ['AI', 'Web App', 'Coaching', 'Automation'],
    href: 'https://hurdlepro.lovable.app/ask-coach',
  },
  {
    num: '05',
    name: 'ConnectED',
    status: 'COMING SOON',
    desc: 'A Chrome extension that drafts personalized LinkedIn connection requests, using AI to write a tailored note from a prospect’s profile.',
    tags: ['Chrome Extension', 'JavaScript', 'AI', 'LinkedIn'],
  },
];

export const TICKER = [
  ['PREDICTION MARKETS', '▲'],
  ['MARKET MAKING', '▼'],
  ['AI SYSTEMS', '▲'],
  ['CHROME EXTENSIONS', '▲'],
  ['ON-CHAIN ANALYTICS', '▼'],
  ['AUTOMATION', '▲'],
  ['QUANT RESEARCH', '▲'],
] as const;

export const NEWS = [
  { tag: 'MARKETS', time: '09:30', text: 'Opening bell: stocks push higher out of the gate', top: '14%', left: '62%', delay: '0s', hideSm: false },
  { tag: 'SHIPPED', time: '10:12', text: 'ChainSight goes live on the Chrome Web Store', top: '58%', left: '3%', delay: '2.3s', hideSm: false },
  { tag: 'EDGE', time: '11:04', text: 'Edge Terminal flags mispriced Kalshi markets', top: '38%', left: '74%', delay: '4.6s', hideSm: true },
  { tag: 'LAUNCH', time: '12:40', text: 'Coach Caton launches AI ask-a-coach portal', top: '76%', left: '58%', delay: '7s', hideSm: false },
  { tag: 'THEO', time: '13:55', text: 'THEO opens rooms: make a market, back your guess', top: '24%', left: '4%', delay: '9.3s', hideSm: true },
  { tag: 'IN BUILD', time: '15:20', text: 'ConnectED enters build: AI outreach in progress', top: '66%', left: '70%', delay: '11.6s', hideSm: true },
];

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
  { label: 'TECHNICAL', items: ['Financial Modeling', 'Valuation', 'Comparable Company Analysis', 'Cash Flow Modeling', 'Capital Structure Analysis'] },
  { label: 'PLATFORMS', items: ['Bloomberg Terminal', 'Capital IQ', 'Excel (Pivot Tables)', 'PowerPoint'] },
  { label: 'DATA & ANALYTICS', items: ['Python', 'SQL', 'Tableau', 'Regression Analysis', 'Statistical Modeling'] },
  { label: 'AI', items: ['Claude Code', 'Codex', 'API Integration'] },
];
