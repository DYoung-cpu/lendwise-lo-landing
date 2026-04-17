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
  title: "Senior Mortgage Banker | Direct Lender",
  tagline: "Precision lending for every stage of homeownership.",
  photoPath: "/images/team/jeff-schlesinger.jpg",

  // ── Bio (hero section) ───────────────────────────────────
  heroExperience: "20 years",
  heroAchievement: "trusted by clients at every stage of homeownership",
  heroDescription:
    "from first-time buyers to high-net-worth borrowers with complex financing needs. What matters most hasn\u2019t changed \u2014 precision, discretion, and results. Borrowers, real estate professionals, and financial advisors rely on me for transactions that need to close smoothly, strategically, and without surprises.",

  // ── Bio (about section — plain text, apostrophes use \u2019, paragraphs split on \n\n) ──
  aboutBio:
    "For more than 20 years, I have helped clients navigate mortgage decisions where experience, strategy, and execution matter. My business is built on trust, long-term relationships, and delivering results when there is little room for error.\n\nI work with a wide range of clients, from first-time homebuyers to self-employed borrowers, investors, and high-net-worth individuals. I provide clear guidance and tailored financing solutions across conventional, jumbo, FHA, VA, and Non-QM lending for owner-occupied and investment properties \u2014 whether purchase or refinance, full documentation or alternative income qualification.\n\nWhat sets me apart is personal service. When you call, you work directly with me. No call centers, no handoffs, and no guesswork. I stay involved from initial consultation through closing, keeping clients informed and transactions moving smoothly.\n\nReferral partners often describe me as the lender they call when a deal needs to close creatively, efficiently, and without surprises. My reputation has been built on solving problems early, communicating clearly, and being a trusted resource clients return to year after year.",

  // ── "Why Work With Me" Cards ───────────────────────────────
  aboutCards: [
    {
      img: "/images/icons/person-check.png",
      title: "Direct Access",
      desc: "Call, and you reach me. No call centers, no handoffs, no guesswork \u2014 I stay involved through closing.",
    },
    {
      img: "/images/icons/chip.png",
      title: "Every Kind of Borrower",
      desc: "First-time buyers, self-employed borrowers, investors, and high-net-worth clients \u2014 tailored to your situation.",
    },
    {
      img: "/images/icons/globe.png",
      title: "Full Program Lineup",
      desc: "Conventional, jumbo, FHA, VA, and Non-QM \u2014 full-doc or alternative income, purchase or refinance.",
    },
    {
      img: "/images/icons/chip-dark.png",
      title: "The Lender You Call",
      desc: "Referral partners bring me the deals that need to close creatively, efficiently, and without surprises.",
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
    title: "Jeff Schlesinger | Senior Mortgage Banker | Direct Lender",
    description:
      "Jeff Schlesinger \u2014 Senior Mortgage Banker and Direct Lender at LendWise Mortgage. 20 years guiding first-time buyers, investors, and high-net-worth borrowers on conventional, jumbo, FHA, VA, and Non-QM lending.",
    keywords:
      "mortgage, home loan, Jeff Schlesinger, LendWise, jumbo, Non-QM, senior mortgage banker, direct lender, apply, refinance, purchase",
    ogTitle: "Jeff Schlesinger | LendWise Mortgage",
    ogDescription:
      "Precision lending for every stage of homeownership. 20 years advising borrowers, realtors, and financial advisors.",
  },
};
