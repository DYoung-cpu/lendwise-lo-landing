/**
 * LO Profile Configuration
 * ========================
 * Single source of truth for all Loan Officer personal data.
 *
 * To customize for a new LO:
 *  1. Update the fields below with the LO's info
 *  2. Drop their headshot into public/images/team/ and update photoPath
 *  3. Update the applicationUrl with their workFlowId & siteId
 *  4. Replace the reviews with the LO's own testimonials
 *  5. Adjust the programs array to match what the LO offers
 *  6. Restart the dev server
 *
 * Everything else — layout, design, animations — stays untouched.
 */

export const loProfile = {
  // ── Personal ──────────────────────────────────────────────
  firstName: "Jeff",
  lastName: "Schlesinger",
  fullName: "Jeff Schlesinger",
  title: "President, Full House Capital \u2022 Senior Mortgage Banker, LendWise Mortgage",
  tagline: "Precision lending for complex transactions.",
  photoPath: "/images/team/jeff-schlesinger.jpg",

  // ── Bio (hero section) ───────────────────────────────────
  heroExperience: "20+ years",
  heroAchievement: "trusted advisor to high-net-worth borrowers and referral partners",
  heroDescription:
    "but what matters most hasn\u2019t changed \u2014 precision, discretion, and results. Borrowers, realtors, and advisors bring me the transactions that must close smoothly, creatively, and without surprises.",

  // ── Bio (about section — plain text, apostrophes use \u2019, paragraphs split on \n\n) ──
  aboutBio:
    "For more than 20 years, I have advised clients on complex mortgage strategies where precision matters and execution is non-negotiable. As President of Full House Capital, Inc. and Senior Mortgage Banker with LendWise Mortgage, my practice is built on trust, long-term relationships, and consistent results. While I operate primarily in California, I am frequently consulted on lending scenarios nationwide by borrowers, real estate professionals, and financial advisors who value experienced guidance in high-stakes transactions.\n\nI work across the full spectrum of residential financing, specializing in jumbo loans, agency products, FHA and VA financing, Non-QM and alternative income solutions, and investment properties. My clients range from first-time buyers to high-net-worth individuals, entrepreneurs, and sophisticated investors \u2014 many with financial profiles that require thoughtful structuring rather than formulaic lending.\n\nReferral partners often describe me as the lender they bring in when a transaction must close smoothly, creatively, and without surprises. I pride myself on being highly accessible, solutions-oriented, and proactive, ensuring my clients feel informed and confident from initial strategy through closing.\n\nBefore mortgage banking, I built a career in television and film production finance \u2014 an experience that sharpened my financial acumen, attention to detail, and ability to perform under pressure. Today, those skills allow me to anticipate challenges early, structure loans strategically, and deliver certainty in competitive markets. My reputation has been built not just on transactions, but on becoming a trusted advisor to the clients and professionals who rely on me year after year.",

  // ── "Why Work With Me" Cards ───────────────────────────────
  aboutCards: [
    {
      img: "/images/icons/person-check.png",
      title: "Trusted Advisor",
      desc: "20+ years advising borrowers, realtors, and financial advisors on high-stakes transactions.",
    },
    {
      img: "/images/icons/chip.png",
      title: "Complex Scenarios",
      desc: "Jumbo, Non-QM, alternative income, and investment properties for sophisticated borrowers.",
    },
    {
      img: "/images/icons/globe.png",
      title: "California & Beyond",
      desc: "Based in California, consulted nationwide on complex lending scenarios.",
    },
    {
      img: "/images/icons/chip-dark.png",
      title: "Executed With Precision",
      desc: "Structured strategically, closed smoothly \u2014 the lender brought in when the deal must happen.",
    },
  ],

  // ── Loan Programs (toggle per LO) ─────────────────────────
  programs: [
    { img: "/images/icons/programs/conventional.png", title: "Conventional", desc: "Agency conforming" },
    { img: "/images/icons/programs/jumbo.png", title: "Jumbo", desc: "Above conforming limits" },
    { img: "/images/icons/programs/fha.png", title: "FHA", desc: "Low down payment" },
    { img: "/images/icons/programs/va.png", title: "VA", desc: "Veterans & service members" },
    { img: "/images/icons/programs/dscr.png", title: "DSCR", desc: "Investment properties" },
    { img: "/images/icons/programs/bank-statement.png", title: "Bank Statement", desc: "Self-employed" },
    { img: "/images/icons/programs/fix-flip.png", title: "Non-QM", desc: "Alternative income" },
    { img: "/images/icons/programs/first-time-buyer.png", title: "First Time Buyer", desc: "New homeowners" },
    { img: "/images/icons/programs/heloc.png", title: "HELOCs", desc: "Home equity access" },
  ],

  // ── Reviews / Testimonials ─────────────────────────────────
  reviews: [
    {
      name: "Sarah M.",
      text: "Jeff made our jumbo purchase feel effortless. He was available at every step and structured the deal beautifully.",
      rating: 5,
    },
    {
      name: "James & Lisa R.",
      text: "We refinanced with Jeff and saved over $400/month. His precision on the numbers gave us real confidence.",
      rating: 5,
    },
    {
      name: "Michael T.",
      text: "As a self-employed borrower with complex income, I thought getting a mortgage would be impossible. Jeff structured the perfect program.",
      rating: 5,
    },
    {
      name: "Jennifer K.",
      text: "Jeff walked us through every option and never made us feel rushed. We closed two weeks ahead of schedule.",
      rating: 5,
    },
    {
      name: "Robert & Maria S.",
      text: "We were first-time buyers with a million questions. Jeff answered every single one, even on weekends. Couldn\u2019t ask for better service.",
      rating: 5,
    },
    {
      name: "Angela D.",
      text: "After being turned down by two other lenders, Jeff found a program that worked for my situation. I\u2019m now a homeowner because of him.",
      rating: 5,
    },
    {
      name: "Chris P.",
      text: "Jeff called me the day rates dropped and we locked in immediately. Saved us thousands \u2014 that\u2019s the kind of attention you want.",
      rating: 5,
    },
    {
      name: "Natalie & Brian W.",
      text: "Jeff helped us purchase our investment property with a DSCR loan. He explained every detail and made the process seamless.",
      rating: 5,
    },
    {
      name: "Daniel F.",
      text: "I\u2019ve done three loans with Jeff over the years. Every time, he finds a way to save me money. That\u2019s loyalty you can\u2019t fake.",
      rating: 5,
    },
    {
      name: "Karen & Tom L.",
      text: "Jeff\u2019s team closed our jumbo loan in 21 days. Other lenders quoted us 45. The execution is on another level.",
      rating: 5,
    },
  ],

  // ── Contact ──────────────────────────────────────────────
  phone: "(818) 522-4757",
  phoneRaw: "+18185224757",
  email: "Jeff@JeffSchlesinger.com",
  smsRaw: "+18185224757",

  // ── Credentials ──────────────────────────────────────────
  nmls: "316097",
  dre: "01738366",

  // ── Company ──────────────────────────────────────────────
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

  // ── Application Link ─────────────────────────────────────
  applicationUrl:
    "https://lendwisemtg.mymortgage-online.com/loan-app/?siteId=1956469515&lar=jschlesinger&workFlowId=233348",

  // ── Page Metadata ────────────────────────────────────────
  meta: {
    title: "Jeff Schlesinger | Senior Mortgage Banker at LendWise Mortgage",
    description:
      "Jeff Schlesinger - President of Full House Capital and Senior Mortgage Banker at LendWise Mortgage. 20+ years advising borrowers on jumbo, agency, FHA/VA, Non-QM, and investment lending.",
    keywords:
      "mortgage, home loan, Jeff Schlesinger, LendWise, jumbo, Non-QM, senior mortgage banker, apply, refinance, purchase",
    ogTitle: "Jeff Schlesinger | LendWise Mortgage",
    ogDescription:
      "Precision lending for complex transactions. 20+ years advising borrowers, realtors, and financial advisors.",
  },
};
