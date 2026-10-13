// Every word on the site lives here. Edit copy in this file, not in the pages.

export const profile = {
  name: "Osmon Djumagulov",
  practice: "Finance, data and AI",
  location: "New York",
  email: "osmonbek.djumagulov@gmail.com",
  linkedin: "https://www.linkedin.com/in/osmon-d",
  github: "https://github.com/osmonft",
  resumePdf: "/Osmonbek_Djumagulov_Resume.pdf",
};

// The three routes from the landing page, in order. Contact is always last.
export const routes = [
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Résumé" },
  { href: "/contact", label: "Contact" },
];

export type Plate = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** "full" spans the column; two "half" plates sit side by side in tall mounts. */
  size: "full" | "half";
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  /** Only where it is known. */
  year?: string;
  href: string;
  linkLabel: string;
  summary: string;
  facts: { label: string; value: string }[];
  plates: Plate[];
  /** Optional image for the /work index, shown whole on a mount of its own edge colour. Defaults to the first plate. */
  cover?: { src: string; width: number; height: number; alt: string; background: string };
};

const shot = (src: string, alt: string, size: Plate["size"] = "full", width = 1600, height = 1000): Plate => ({ src, alt, size, width, height });
const phone = (src: string, alt: string): Plate => shot(src, alt, "half", 800, 1436);

export const projects: Project[] = [
  {
    slug: "edge-terminal",
    title: "Edge Terminal",
    kind: "Prediction-market analytics",
    year: "2026",
    href: "https://edgeterminal.net",
    linkLabel: "edgeterminal.net",
    summary:
      "An analytics platform for Kalshi and Polymarket traders. It scores the gap between market-implied probabilities and independent model estimates, pulling live prices and volume from both exchanges across politics, macro and sports. Kelly sizing, risk of ruin and a trade journal sit around it.",
    facts: [
      { label: "Role", value: "Founder" },
      { label: "Markets", value: "Kalshi, Polymarket" },
      { label: "Result", value: "+156% on a live test allocation over two months" },
      { label: "Status", value: "Live" },
    ],
    plates: [
      shot("/work/edge-terminal-1.jpg", "Edge Terminal home"),
      shot("/work/edge-terminal-2.jpg", "A market analysis in Edge Terminal", "half"),
      phone("/work/edge-terminal-m.jpg", "Edge Terminal on a phone"),
      shot("/work/edge-terminal-3.jpg", "Edge Terminal tools"),
    ],
  },
  {
    slug: "theo",
    title: "THEO",
    kind: "The market-making game",
    href: "https://theo-market-game.osmonft.workers.dev/",
    linkLabel: "Play THEO",
    summary:
      "Free multiplayer trivia built on how a market maker thinks. Every player bids a range; the tightest range wins the market, sets the line, and everyone else picks a side. Confidence, not just knowledge, decides the round.",
    facts: [
      { label: "Players", value: "2 to 8, no sign-up" },
      { label: "Rounds", value: "3, 5 or 7" },
      { label: "Status", value: "Live" },
    ],
    plates: [
      shot("/work/theo-1.jpg", "THEO home"),
      phone("/work/theo-m.jpg", "THEO on a phone"),
      shot("/work/theo-2.jpg", "How a round of THEO works", "half", 1600, 578),
    ],
  },
  {
    slug: "chainsight",
    cover: { src: "/work/chainsight-cover.jpg", width: 1200, height: 1200, alt: "ChainSight logo", background: "#000005" },
    title: "ChainSight",
    kind: "On-chain due diligence",
    year: "2025",
    href: "https://chromewebstore.google.com/detail/tweet-ca-helper-chainsigh/eadccpcdekfcoalobnmkgmblfomlimim",
    linkLabel: "Get ChainSight",
    summary:
      "A verified tool that spots Solana and Ethereum token addresses on X and pulls live liquidity, volume, market cap and contract age from decentralised exchanges, so due diligence happens in the feed instead of five tabs later.",
    facts: [
      { label: "Role", value: "Co-founder" },
      { label: "Built at", value: "Colosseum Solana Hackathon" },
      { label: "Status", value: "Live, verified" },
    ],
    plates: [
      shot("/work/chainsight-2.jpg", "ChainSight on an X search", "full", 1280, 800),
      shot("/work/chainsight-3.jpg", "ChainSight token history", "half", 1280, 800),
      shot("/work/chainsight-5.jpg", "ChainSight address scraper", "half", 1280, 800),
      shot("/work/chainsight-1.jpg", "ChainSight content filter", "full", 1280, 800),
    ],
  },
  {
    slug: "coach-caton",
    cover: { src: "/work/coach-caton-cover.jpg", width: 900, height: 900, alt: "ACE Method Coaching logo", background: "#31a7c5" },
    title: "Coach Caton",
    kind: "AI assistant",
    href: "https://hurdlepro.lovable.app/ask-coach",
    linkLabel: "Ask Coach",
    summary:
      "An AI assistant for a hurdles coaching business. It answers clients and prospects from a knowledge base drawn from four social platforms, so the owner coaches instead of answering email.",
    facts: [
      { label: "Role", value: "Founder, ODP AI Solutions" },
      { label: "Result", value: "Owner email down from 70 to 15 a month" },
      { label: "Leads", value: "100+ captured to one database" },
      { label: "Status", value: "Live" },
    ],
    plates: [
      shot("/work/coach-caton-1.jpg", "Coach Caton"),
      phone("/work/coach-caton-m.jpg", "HurdlePro on a phone"),
      shot("/work/coach-caton-2.jpg", "HurdlePro home", "half"),
    ],
  },
];

// ── Résumé ──────────────────────────────────────────────────────────────

export type Entry = { when: string; title: string; role?: string; notes?: string[]; bullets?: string[] };

export const resume: { section: string; entries: Entry[] }[] = [
  {
    section: "Education",
    entries: [
      {
        when: "Dec 2026",
        title: "Baruch College, Zicklin School of Business",
        role: "BBA in Finance, Minors in Business Analysis and Communications",
        notes: [
          "GPA 3.7 / 4.00 · Zicklin Honors Program · Dean’s List, all terms",
          "Advanced Investment Analysis, Equity Markets Trading & Strategy, Technical Analysis, Corporate Finance, Real Estate Finance & Investment, Financial Reporting Analysis, Statistical Analysis in Economics & Finance, Foundations of Predictive Analytics, Honors Strategic Management",
        ],
      },
    ],
  },
  {
    section: "Experience",
    entries: [
      {
        when: "Mar to Jul 2026",
        title: "Edge Terminal",
        role: "Founder · Prediction-market analytics platform",
        bullets: [
          "Built a prediction-market analytics platform with Claude Code that reprices Kalshi and Polymarket contracts against live news across politics, macro, crypto and sports.",
          "Applied Kelly Criterion position sizing and risk-of-ruin modelling to capital allocation, with a performance layer tracking win rate, realised P&L and edge captured against fair odds.",
          "Validated the model live with a small allocation of personal capital across three flagged mispricings, returning 156% over two months.",
        ],
      },
      {
        when: "Jun to Aug 2025",
        title: "Murray Hill Group",
        role: "Investment Analyst · Private equity and venture capital",
        bullets: [
          "Performed independent due diligence on a private nuclear-generation company, analysing projected cash flows, cost structure and contract-backed revenue visibility, informing a decision to defer a $10M investment until technology and contract milestones de-risked the entry.",
          "Built profitability models across 200+ potential deployment sites, testing site-level economics to identify where projects cleared on cost.",
          "Sized a ~$18B annual DoD diesel spend addressable by microreactors, mapping the US regulatory environment, Project Pele, the customer pipeline and contract structures to set the revenue ceiling.",
          "Wrote investment memos on the target and its closest competitor, benchmarking cost efficiency and technology readiness, and presented findings to senior leadership to stress-test the recommendation.",
          "Mapped approval milestones to microreactor production in a single regulatory timeline, giving senior leadership a fast view of time-to-market and execution risk.",
        ],
      },
      {
        when: "Jun 2024 to Now",
        title: "ODP AI Solutions",
        role: "Founder",
        bullets: [
          "Launched an AI chatbot for a sports-coaching business, cutting the owner’s email volume from 70 to 15 a month and capturing 100+ leads into a central database.",
          "Engineered a knowledge base drawn from the business’s social platforms so the chatbot answers client and prospect questions with no staff involvement.",
        ],
      },
    ],
  },
  {
    section: "Projects",
    entries: [
      {
        when: "Oct 2026",
        title: "THEO",
        role: "Creator · Multiplayer market-making simulation",
        bullets: [
          "Created and deployed a multiplayer game modelling market makers’ bid-ask quotes and market takers’ decisions around a hidden fair value.",
          "Designed zero-sum scoring to illustrate spread capture, pricing risk and the losses when informed takers exploit mispriced quotes.",
          "Built with AI-assisted development on React, TypeScript, WebSockets and Cloudflare Durable Objects for up to eight players, backed by 41 unit tests and multiplayer integration tests.",
        ],
      },
      {
        when: "Mar to May 2026",
        title: "Portfolio Management",
        role: "Head of Trading · Long/short multi-asset fund",
        bullets: [
          "Ran trading for a $100M simulated long/short multi-asset fund at 30% leverage, growing the book to $141.1M (+8.5%) through Fed policy shifts and Middle East uncertainty, monitoring risk through VaR, standard deviation and cross-holding correlation.",
          "Pitched long Exxon and Chevron on Strait of Hormuz supply risk during US-Iran escalation, sizing on asymmetry with limited downside to baseline valuation.",
          "Automated the transaction log, holdings tracker and daily NAV and returns journal across the full trading period.",
        ],
      },
      {
        when: "Dec 2025",
        title: "Federal Student Loans and Homeownership",
        role: "Research paper · Econometrics",
        bullets: [
          "Analysed 300,000+ rows of federal loan disbursement data across 7,500+ institutions, standardising the dataset to study lending concentration, seasonality and macroeconomic sensitivity.",
          "Built a regression linking loan type to homeownership, finding subsidised lending associated with higher homeownership and unsubsidised lending with lower.",
        ],
      },
      {
        when: "Oct 2025",
        title: "ChainSight",
        role: "Co-founder · Colosseum Solana Hackathon",
        bullets: [
          "Co-founded a verified due-diligence tool that detects Solana and Ethereum token addresses on X for instant pre-trade due diligence.",
          "Integrated live liquidity, volume, market cap and contract age from decentralised exchanges, surfacing rug-pull risk signals before capital is committed.",
        ],
      },
      {
        when: "May 2025",
        title: "Equity Research: Intel (INTC)",
        role: "Valuation",
        bullets: [
          "Chose EV/EBITDA after negative earnings ruled out P/E and negative free cash flow made a DCF unreliable; forecast five years of revenue and EBITDA to a $22.24 target price.",
          "Identified Intel Foundry as the swing factor, weighing its Google and Nvidia partnerships against geopolitical risk and US reliance on foreign chip manufacturing.",
        ],
      },
    ],
  },
  {
    section: "Certifications",
    entries: [
      { when: "Jan 2026", title: "Sales & Trading Job Simulation", role: "Bank of America, via Forage" },
      { when: "Nov 2025", title: "M&A Simulation: Ranked 3rd", role: "UBS, via AmplifyMe" },
      { when: "Jun 2025", title: "Securities Industry Essentials", role: "FINRA" },
      { when: "Apr 2025", title: "Bloomberg Market Concepts", role: "Bloomberg" },
      { when: "Oct 2024", title: "Sales & Trading Simulation: Ranked 1st", role: "Morgan Stanley and UBS, via AmplifyMe" },
    ],
  },
  {
    section: "Skills",
    entries: [
      { when: "Finance", title: "Financial modelling, valuation, cash flow and sensitivity analysis, comparables, capital structure analysis" },
      { when: "Quantitative", title: "Kelly Criterion, risk of ruin, VaR, probability, regression and statistical modelling" },
      { when: "Platforms", title: "Bloomberg Terminal, Capital IQ, FactSet, Refinitiv, Excel (pivot tables, VBA), PowerPoint" },
      { when: "Data", title: "Python, SQL, Tableau" },
      { when: "AI", title: "Claude Code, Codex, API integration, Zapier, n8n, Make" },
      { when: "Languages", title: "Kyrgyz (native), Russian (fluent), English (fluent)" },
      { when: "Interests", title: "Chess, European football, crypto, video editing, Counter-Strike" },
    ],
  },
];
