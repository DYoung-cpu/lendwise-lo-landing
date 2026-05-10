/**
 * LendWise Company Profile (join branch)
 * ======================================
 * Drives the "Why Join LendWise" recruiting page at join.teamlendwise.com.
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
      "LendWise gives independent loan officers the investor breadth, in-house operations, and AI tooling to close more loans without the brokerage tax.",
    primaryCtaLabel: "Talk to a Manager",
    primaryCtaTarget: "#cta", // anchor or external URL
    logoPath: "/images/lendwise-hero-logo.png",
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
  built: [
    {
      icon: "/images/icons/chip.png",
      title: "Scenario Desk",
      desc: "AI-powered investor and program lookup. Type a niche scenario, get verbatim guideline matches in seconds — not 90 minutes on the phone.",
    },
    {
      icon: "/images/icons/chip-dark.png",
      title: "AI Marketing Studio",
      desc: "Generate face-accurate market-update banners, flyers, and social posts on demand. Astria-trained portraits, Gemini-rendered creative.",
    },
    {
      icon: "/images/icons/globe.png",
      title: "Personal Landing Page",
      desc: "Branded subdomain on teamlendwise.com with rate tracker, contact intake, and OG previews — all yours, deployed in a day.",
    },
    {
      icon: "/images/icons/person-check.png",
      title: "Lock Desk",
      desc: "Real secondary-market support. Live pricing across the full investor stack. No more guessing which lender will hit your scenario.",
    },
    {
      icon: "/images/icons/chip.png",
      title: "Pre-Qual Engine",
      desc: "8-step underwriting pipeline (intake → income → ratios → evaluation) catches deal-killers before you waste hours on a borrower who can't qualify.",
    },
    {
      icon: "/images/icons/chip-dark.png",
      title: "Surefire CRM Seat",
      desc: "ICE Mortgage Tech's automated drip platform. Birthday, anniversary, market updates — all on autopilot for your existing book.",
    },
    {
      icon: "/images/icons/globe.png",
      title: "GHL Sub-Account",
      desc: "Your own GoHighLevel CRM with email validation, bulk send, workflow automation, and full pipeline tracking. Keep your contacts forever.",
    },
    {
      icon: "/images/icons/person-check.png",
      title: "Auto Touchpoints",
      desc: "Birthday emails with AI-generated personal images. Closing anniversaries. Market alerts on rate moves. Your book never goes cold.",
    },
  ],

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

  // ── Investor Wall ───────────────────────────────────────────────────
  // Drop logos into public/images/investors/ matching the slug.
  // greyscale-on-hover-color treatment is applied by the InvestorWall component.
  investors: [
    { name: "Planet Home Lending",       logo: "/images/investors/planet-home.png" },
    { name: "DeepHaven Mortgage",        logo: "/images/investors/deephaven.png" },
    { name: "Verus Mortgage Capital",    logo: "/images/investors/verus.png" },
    { name: "Plaza Home Mortgage",       logo: "/images/investors/plaza.png" },
    { name: "Eresi",                     logo: "/images/investors/eresi.png" },
    { name: "Vista Point Mortgage",      logo: "/images/investors/vista-point.png" },
    { name: "Arc Home",                  logo: "/images/investors/arc-home.png" },
    { name: "Champions Funding",         logo: "/images/investors/champions.png" },
    { name: "Carrington Mortgage",       logo: "/images/investors/carrington.png" },
    { name: "Luxury Mortgage",           logo: "/images/investors/luxury.png" },
    { name: "Rocket Pro TPO",            logo: "/images/investors/rocket-pro.png" },
  ],

  // ── In-House Team ───────────────────────────────────────────────────
  // Drop headshots into public/images/team/ matching the slug.
  team: [
    {
      name: "David Young",
      title: "Founder & President",
      photo: "/images/team/david-young.jpg",
    },
    // David: add ops, processing, marketing, IT roster here
    // {
    //   name: "Wahdat Amini",
    //   title: "Operations",
    //   photo: "/images/team/wahdat-amini.jpg",
    // },
  ],

  // ── CTA Form ────────────────────────────────────────────────────────
  cta: {
    eyebrow: "READY TO TALK?",
    headline: "Talk to a Manager",
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
      "LendWise gives independent loan officers the investor breadth, in-house operations, and AI tooling to close more loans. Licensed in CA, CO, FL, TX. NMLS 2702455.",
    keywords:
      "loan officer recruiting, mortgage broker, mortgage banker, join lendwise, LO opportunity, NMLS, non-QM, DSCR, jumbo, scenario desk",
    ogTitle: "Join LendWise — Built by LOs. Engineered for Closers.",
    ogDescription:
      "Investor breadth, in-house ops, AI tooling. Licensed in CA, CO, FL, TX.",
  },
};
