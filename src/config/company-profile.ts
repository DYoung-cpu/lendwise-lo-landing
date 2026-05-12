/**
 * LendWise Company Profile (join branch)
 * ======================================
 * Drives the "Why Join LendWise" recruiting page at teamlendwise.com.
 * Replaces lo-profile.ts on this branch — page.tsx reads from here, not from lo-profile.
 *
 * To update content: edit the fields below, drop new images into public/, redeploy.
 */

export const companyProfile = {
  // ── Hero ────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "FOR LOAN OFFICERS",
    headline: "Built by LOs.\nEngineered for closers.",
    subhead:
      "A direct lender with the products, operations, and team to keep your pipeline moving.",
    primaryCtaLabel: "Let's Talk",
    primaryCtaTarget: "#cta", // anchor or external URL
    logoPath: "/images/lendwise-hero-logo.png",
    licenseLine: "Licensed in CA, TX, FL, CO, PA, NC — and growing daily.",
  },

  // ── Trust Band ──────────────────────────────────────────────────────
  trustBand: {
    statesLicensed: ["CA", "CO", "FL", "TX"],
    nmls: "2702455",
    dre: "02282825",
    investorCount: 25, // approx — see scenario-desk-trust-architecture.md
    programCount: 12,
    yearFounded: 2025,
  },

  // ── What We've Built ────────────────────────────────────────────────
  // The lender-capability section. 4 cards in 2×2, icon-LEFT layout.
  // Focused on the operational reasons an LO chooses us — not marketing tools.
  built: [
    {
      icon: "/images/icons/person-check.png",
      title: "Direct Lender · In-House Everything",
      desc: "We're the lender — not the broker — and every program (FHA, VA, Conventional, Jumbo, Non-QM) is underwritten under our roof. Your decision, your turn-time, all in-house. Quick turn-around times on your loans. No wholesale runaround, no broker-channel handoffs.",
    },
    {
      icon: "/images/icons/globe.png",
      title: "Lock Desk That Picks Up the Phone",
      desc: "Every investor at your fingertips and a real team behind every lock. Need pricing now? Pick up the phone, get an answer. No tickets, no queue, no \"I'll get back to you.\"",
    },
    {
      icon: "/images/icons/chip.png",
      title: "Sales Support",
      desc: "We've automated the data so the answers are at your fingertips — but nothing beats a knowledgeable sales support team you can call to strategize. We've got the best in the business sitting behind every one of our loan officers.",
    },
    {
      icon: "/images/icons/chip-dark.png",
      title: "Artemis Market Watcher",
      desc: "Watches your pipeline and your funded book. When the market moves into action range, she tells you who to call. No more digging through endless spreadsheets.",
    },
  ],

  // ── Marketing ───────────────────────────────────────────────────────
  // The pipeline-tools section. Same icon-LEFT layout as What We've Built.
  marketing: {
    eyebrow: "MARKETING & PIPELINE",
    headline: "Marketing That Works While You're Closing",
    subhead:
      "We built the marketing engine you'd hire a team to build. You stay focused on borrowers — we keep your book warm.",
    cards: [
      {
        icon: "/images/icons/chip.png",
        title: "Click-to-Market",
        desc: "Social posts, email campaigns, flyers, co-branded assets — every channel at a click. No more begging marketing or paying a freelancer.",
      },
      {
        icon: "/images/icons/globe.png",
        title: "Personalized Landing Pages",
        desc: "Your niche. Your design. Our execution. A branded site that says exactly what you want it to say — built and deployed for you.",
      },
      {
        icon: "/images/icons/chip-dark.png",
        title: "Daily Market Updates",
        desc: "Daily rate moves and market intel, branded to you, ready to send. Stay top-of-mind with your book without writing a word.",
      },
      {
        icon: "/images/icons/person-check.png",
        title: "Data Parser",
        desc: "Got a stack of contacts buried in a file somewhere? We parse it, clean it, and hand you the tools to start working them. Buried gold, surfaced.",
      },
    ],
  },

  // ── Compensation ────────────────────────────────────────────────────
  // The recruiting hook. Clean gold-accented cards, no redundant stat blocks.
  compensation: {
    eyebrow: "COMPENSATION",
    headline: "Your Comp, Your Way",
    subhead:
      "Originators should control their own economics. No games, no hidden fees.",
    cards: [
      {
        title: "Up to 300 BPS",
        desc: "Choose anywhere from minimum to 300 basis points — and everything in between. Your production, your pricing power.",
      },
      {
        title: "Change Comp Plans Monthly — Not Yearly",
        desc: "No annual lock-ins, no penalty. Adjust your comp structure every 30 days to match your pipeline.",
      },
      {
        title: "Get Paid W-2 or 1099 to Your Corporation",
        desc: "Run it through your corp as a 1099 in most states, or go W-2 for benefits. Only exception is FHA in certain state-specific situations.",
      },
      {
        title: "Competitive Pricing",
        desc: "Our goal is simple: keep you in the fight. You will not lose deals because of pricing. Period.",
      },
    ],
  },

  // ── Programs (reused from lo-profile.ts shape) ──────────────────────
  programs: [
    { img: "/images/icons/programs/conventional.png", title: "Conventional", desc: "Agency conforming" },
    { img: "/images/icons/programs/jumbo.png",        title: "Jumbo",        desc: "Above conforming limits" },
    { img: "/images/icons/programs/fha.png",          title: "FHA",          desc: "Low down payment" },
    { img: "/images/icons/programs/va.png",           title: "VA",           desc: "Veterans & service members" },
    { img: "/images/icons/programs/dscr.png",         title: "DSCR",         desc: "Investment properties" },
    { img: "/images/icons/programs/bank-statement.png", title: "Bank Statement", desc: "Self-employed" },
    { img: "/images/icons/programs/fix-flip.png",     title: "Non-QM",       desc: "Alternative income" },
    { img: "/images/icons/programs/first-time-buyer.png", title: "First Time", desc: "Down payment assistance" },
    { img: "/images/icons/programs/heloc.png",        title: "HELOCs",       desc: "Home equity access" },
  ],

  // ── Investor Wall (marquee) ─────────────────────────────────────────
  // Logos in public/images/investors/ matching slug. Rendered by InvestorMarquee
  // on a light-slate card. Set darkInset: true for white-on-transparent logos
  // (DeepHaven, Plaza, Rocket Pro etc.) — they'll get a dark mini-card so they
  // remain visible against the light-slate wall.
  investors: [
    { name: "Acra",                                logo: "/images/investors/acra.png" },
    { name: "AD Mortgage",                         logo: "/images/investors/ad-mortgage.png" },
    { name: "AmWest Funding",                      logo: "/images/investors/amwest.png" },
    { name: "Angel Oak",                           logo: "/images/investors/angel-oak.png" },
    { name: "Arc Home",                            logo: "/images/investors/arc-home.png" },
    { name: "AXOS",                                logo: "/images/investors/axos.png" },
    { name: "Button Finance",                      logo: "/images/investors/button-finance.png" },
    { name: "Carrington Mortgage",                 logo: "/images/investors/carrington-v2.png" },
    { name: "Champions Funding",                   logo: "/images/investors/champions.png" },
    { name: "ClearEdge",                           logo: "/images/investors/clearedge.png" },
    { name: "DeepHaven Mortgage",                  logo: "/images/investors/deephaven.png" },
    { name: "Eresi",                               logo: "/images/investors/eresi-v2.png" },
    { name: "Figure Lending",                      logo: "/images/investors/figure.png" },
    { name: "Finance of America Reverse",          logo: "/images/investors/foa-reverse.png" },
    { name: "Forward Lending",                     logo: "/images/investors/forward-lending.png" },
    { name: "HomeBridge",                          logo: "/images/investors/homebridge.png" },
    { name: "HomeXpress",                          logo: "/images/investors/homexpress.png" },
    { name: "JMAC Lending",                        logo: "/images/investors/jmac.png" },
    { name: "LendSure",                            logo: "/images/investors/lendsure.png" },
    { name: "Liberty Reverse",                     logo: "/images/investors/liberty-reverse.png" },
    { name: "LoanStream Mortgage",                 logo: "/images/investors/loanstream.png" },
    { name: "Logan Finance",                       logo: "/images/investors/logan-finance.png" },
    { name: "Luxury Mortgage",                     logo: "/images/investors/luxury.png" },
    { name: "Mutual of Omaha",                     logo: "/images/investors/mutual-omaha.png" },
    { name: "Newrez",                              logo: "/images/investors/newrez.png" },
    { name: "NQM",                                 logo: "/images/investors/nqm.png" },
    { name: "Pennymac",                            logo: "/images/investors/pennymac.png" },
    { name: "Planet Home Lending",                 logo: "/images/investors/planet-home.png" },
    { name: "Plaza Home Mortgage",                 logo: "/images/investors/plaza.png" },
    { name: "UWM",                                 logo: "/images/investors/uwm.png" },
    { name: "Verus Mortgage Capital",              logo: "/images/investors/verus.png" },
    { name: "Vista Point Mortgage",                logo: "/images/investors/vista-point.png" },
  ],

  // ── In-House Team ───────────────────────────────────────────────────
  // 8 members rendered in a 4 × 2 grid: ownership/partners on top, ops VPs below.
  team: [
    {
      name: "Anthony Amini",
      title: "President & CEO",
      photo: "/images/team/anthony-amini-v2.png",
    },
    {
      name: "Gady Gabrielzadeh",
      title: "CFO / Partner",
      photo: "/images/team/gady-gabrielzadeh-v2.png",
    },
    {
      name: "Tony Nasim",
      title: "CSO / Partner",
      photo: "/images/team/tony-nasim-v2.png",
    },
    {
      name: "David Young",
      title: "CMO & Partner",
      photo: "/images/team/david-young-v2.png",
    },
    {
      name: "Jeremy Loveland",
      title: "VP of Underwriting",
      photo: "/images/team/jeremy-loveland-v2.png",
    },
    {
      name: "Alberto Martinez",
      title: "Secondary & Sales Manager",
      photo: "/images/team/alberto-martinez.webp",
    },
    {
      name: "Denise Paulson",
      title: "VP of Funding",
      photo: "/images/team/denise-paulson-v3.png",
    },
    {
      name: "Jennifer Steinberg",
      title: "VP of Processing",
      photo: "/images/team/jennifer-steinberg-v2.png",
    },
  ],

  // ── CTA Form ────────────────────────────────────────────────────────
  cta: {
    eyebrow: "READY TO TALK?",
    headline: "Let's Talk",
    subhead:
      "Tell us about your business. A manager will reach out within one business day to walk through comp, products, and onboarding.",
    formAction: "/api/recruit-inquiry",
  },

  // ── Company (reused boilerplate) ────────────────────────────────────
  company: {
    name: "LendWise Mortgage Corporation",
    shortName: "LendWise",
    address: "21800 Oxnard Street #220",
    city: "Woodland Hills",
    state: "CA",
    zip: "91367",
    phone: "(818) 477-1073",
    phoneRaw: "+18184771073",
    email: "support@lendwisemtg.com",
    nmls: "2702455",
    dre: "02282825",
    heroLogoPath: "/images/lendwise-hero-logo.png",
    footerLogoPath: "/images/lendwise-text-only.png",
    copyrightYear: 2026,
  },

  // ── Page Metadata ───────────────────────────────────────────────────
  meta: {
    title: "Join LendWise Mortgage | Built by LOs. Engineered for Closers.",
    description:
      "A direct lender for loan officers — full investor stack, in-house operations, AI-powered marketing and pipeline tools. Licensed in CA, TX, FL, CO, PA, NC and growing. NMLS 2702455.",
    keywords:
      "loan officer recruiting, mortgage broker, mortgage banker, join lendwise, LO opportunity, NMLS, non-QM, DSCR, jumbo, scenario desk",
    ogTitle: "Join LendWise — Built by LOs. Engineered for Closers.",
    ogDescription:
      "Investor breadth, in-house ops, AI tooling. Licensed in CA, TX, FL, CO, PA, NC.",
  },
};
