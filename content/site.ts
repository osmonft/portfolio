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
    title: "ChainSight",
    kind: "Chrome extension",
    year: "2025",
    href: "https://chromewebstore.google.com/detail/tweet-ca-helper-chainsigh/eadccpcdekfcoalobnmkgmblfomlimim",
    linkLabel: "Chrome Web Store",
    summary:
      "A verified Chrome extension that spots Solana and Ethereum token addresses on X and pulls live liquidity, volume, market cap and contract age from decentralised exchanges, so due diligence happens in the feed instead of five tabs later.",
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
    title: "Coach Caton",
    kind: "AI assistant",
    href: "https://hurdlepro.lovable.app/ask-coach",
    linkLabel: "Ask Coach",
    summary:
      "An AI assistant for a hurdles coaching business. It answers clients and prospects from a knowledge base drawn from four social platforms, so the owner coaches instead of answering email.",
    facts: [
      { label: "Role", value: "Developer, ODP AI Solutions" },
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

export const inDevelopment = { title: "ConnectED", kind: "Chrome extension · In development" };

// ── Résumé ──────────────────────────────────────────────────────────────

export type Entry = { when: string; title: string; role?: string; notes?: string[]; bullets?: string[] };

export const resume: { section: string; entries: Entry[] }[] = [
  {
    section: "Education",
    entries: [
      {
        when: "Dec 2026",
        title: "Baruch College, Zicklin School of Business",
        role: "BBA in Finance, Minor in Communications",
        notes: [
          "GPA 3.7 / 4.00 · Zicklin Honors Program · Dean’s List, all terms",
          "Corporate Finance, Financial Reporting Analysis, Advanced Investment Analysis, Statistical Analysis in Economics and Finance, Honors Case Studies in Business",
        ],
      },
    ],
  },
  {
    section: "Experience",
    entries: [
      {
        when: "Mar – Aug 2026",
        title: "Edge Terminal",
        role: "Founder · Prediction-market analytics platform",
        bullets: [
          "Built and launched an analytics platform for Kalshi and Polymarket traders that scores mispricing between market-implied probabilities and independent model estimates, pulling live pricing and volume from both exchange APIs across politics, macro and sports.",
          "Validated the model live with a small allocation of personal capital across three flagged mispricings, returning 156% over two months, measured by a performance layer tracking win rate, realised P&L and edge captured against fair odds.",
        ],
      },
      {
        when: "Jun – Aug 2025",
        title: "Murray Hill Group",
        role: "Investment Analyst · Private equity and venture capital",
        bullets: [
          "Performed independent due diligence on a private nuclear-generation company — projected cash flows, cost structure and contract-backed revenue visibility — informing a decision to defer a $10M investment until technology and contract milestones de-risked the entry.",
          "Sized a ~$18B annual DoD diesel spend addressable by microreactor generation, mapping the US power regulatory environment, Project Pele, the customer pipeline and offtake contract structures to set the revenue ceiling.",
          "Wrote investment memos on the target and its closest competitor, benchmarking cost efficiency, capital intensity and technology readiness to stress-test the recommendation.",
          "Mapped approval milestones to first generation in a single regulatory timeline, giving senior leadership one page to judge how far the company stood from revenue.",
        ],
      },
      {
        when: "Jun 2024 – Now",
        title: "ODP AI Solutions",
        role: "Developer",
        bullets: [
          "Launched an AI chatbot for a sports-coaching business, cutting the owner’s email volume from 70 to 15 a month and capturing 100+ leads into a central database.",
          "Engineered a knowledge base drawn from four social platforms so the chatbot answers client and prospect questions with no staff involvement.",
        ],
      },
    ],
  },
  {
    section: "Projects",
    entries: [
      {
        when: "Mar – May 2026",
        title: "Portfolio Management",
        role: "Head of Trading · Long/short multi-asset fund",
        bullets: [
          "Ran trading for a $100M simulated long/short multi-asset fund at 30% leverage, growing the book to $141.1M (+8.5%) through Fed policy shifts and Middle East uncertainty, monitoring risk through VaR, standard deviation and cross-holding correlation.",
          "Pitched long Exxon and Chevron on Strait of Hormuz supply risk during US–Iran escalation, sizing on asymmetry with limited downside to baseline valuation.",
        ],
      },
      {
        when: "Dec 2025",
        title: "Federal Student Loans and Homeownership",
        role: "Research paper · Econometrics",
        bullets: [
          "Analysed 300,000+ rows of federal loan disbursement data across 7,500+ institutions, standardising the dataset and building regressions that linked unsubsidised lending to lower homeownership rates and subsidised lending to higher.",
        ],
      },
      {
        when: "Oct 2025",
        title: "ChainSight",
        role: "Co-founder · Colosseum Solana Hackathon",
        bullets: [
          "Co-founded a verified Chrome extension that detects Solana and Ethereum token addresses on X and pulls live liquidity, volume, market cap and contract age from decentralised exchanges for instant due diligence.",
        ],
      },
      {
        when: "May 2025",
        title: "Equity Research: Intel (INTC)",
        role: "Valuation",
        bullets: [
          "Chose EV/EBITDA after negative earnings ruled out P/E and negative free cash flow made a DCF unreliable; forecast five years of revenue and EBITDA to a $22.24 target price.",
          "Assessed liquidity and capital intensity, identifying Intel Foundry as the swing factor while weighing geopolitical risk and US reliance on foreign chip manufacturing.",
        ],
      },
    ],
  },
  {
    section: "Certifications",
    entries: [
      { when: "Nov 2025", title: "M&A Simulation — Ranked 3rd", role: "UBS, via AmplifyMe" },
      { when: "Jun 2025", title: "Securities Industry Essentials", role: "FINRA" },
      { when: "Apr 2025", title: "Bloomberg Market Concepts", role: "Bloomberg" },
      { when: "Oct 2024", title: "Sales & Trading Simulation — Ranked 1st", role: "Morgan Stanley and UBS, via AmplifyMe" },
    ],
  },
  {
    section: "Skills",
    entries: [
      { when: "Finance", title: "Financial modelling, valuation, comparables, cash flow and capital structure analysis" },
      { when: "Platforms", title: "Bloomberg Terminal, Capital IQ, Excel, PowerPoint" },
      { when: "Data", title: "Python, SQL, Tableau, regression and statistical modelling" },
      { when: "AI", title: "Claude Code, Codex, API integration" },
      { when: "Languages", title: "Kyrgyz (native), Russian (fluent)" },
    ],
  },
];
