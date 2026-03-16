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
  firstName: "David",
  lastName: "Young",
  fullName: "David Young",
  title: "Private Mortgage Banker / CMO / Partner",
  tagline: "Your Mortgage. My Mission.",
  photoPath: "/images/team/david-young.jpg",

  // ── Bio (hero section) ───────────────────────────────────
  heroExperience: "25 years",
  heroAchievement: "hundreds of millions funded",
  heroDescription:
    "but what drives me hasn\u2019t changed. Your home is your most trusted asset, and you deserve someone who treats it that way. No receptionist, no runaround \u2014 I\u2019m here when you need me.",

  // ── Bio (about section — plain text, apostrophes use \u2019) ──
  aboutBio:
    "I\u2019ve spent over 25 years in the mortgage industry, and I still take pride in what real customer service means \u2014 staying ahead of every new program, rate, and advantage that can benefit my clients. I\u2019ve owned several successful mortgage businesses serving different markets, but with LendWise, I\u2019ve built something I\u2019ve always wanted: every program under one roof, powered by the best pricing and technology in the business. Having funded hundreds of millions in loans, I understand the weight of the decisions homeowners face. Your home is your most trusted asset, and that gravity is never lost on me. When you work with me, you\u2019re working directly with an owner \u2014 no receptionist, no middleman. I\u2019m always a phone call, text, or email away.",

  // ── "Why Work With Me" Cards ───────────────────────────────
  aboutCards: [
    {
      img: "/images/icons/person-check.png",
      title: "Direct Access",
      desc: "Work directly with a partner, not a call center. I\u2019m personally invested in getting your loan closed right.",
    },
    {
      img: "/images/icons/chip.png",
      title: "Technology Forward",
      desc: "I leverage AI to ensure flawless execution \u2014 faster approvals, smarter processing, and nothing falling through the cracks.",
    },
    {
      img: "/images/icons/globe.png",
      title: "Nationwide Reach",
      desc: "Licensed and lending across multiple states. Bringing modern mortgage solutions wherever you are.",
    },
    {
      img: "/images/icons/chip-dark.png",
      title: "Personal Touch",
      desc: "I know my clients by name, not number. Your biggest investment deserves care and precision.",
    },
  ],

  // ── Loan Programs (toggle per LO) ─────────────────────────
  programs: [
    { img: "/images/icons/programs/conventional.png", title: "Conventional", desc: "Traditional financing" },
    { img: "/images/icons/programs/jumbo.png", title: "Jumbo", desc: "Beyond conforming limits" },
    { img: "/images/icons/programs/fha.png", title: "FHA", desc: "Low down payment" },
    { img: "/images/icons/programs/va.png", title: "VA", desc: "Veterans & service members" },
    { img: "/images/icons/programs/dscr.png", title: "DSCR", desc: "Investment properties" },
    { img: "/images/icons/programs/bank-statement.png", title: "Bank Statement", desc: "Self-employed" },
    { img: "/images/icons/programs/fix-flip.png", title: "Fix & Flip", desc: "Short-term investor" },
    { img: "/images/icons/programs/first-time-buyer.png", title: "First Time Buyer", desc: "New homeowners" },
    { img: "/images/icons/programs/heloc.png", title: "HELOCs", desc: "Home equity access" },
  ],

  // ── Reviews / Testimonials ─────────────────────────────────
  reviews: [
    {
      name: "Sarah M.",
      text: "David made our first home purchase feel effortless. He was available at every step and got us an incredible rate.",
      rating: 5,
    },
    {
      name: "James & Lisa R.",
      text: "We refinanced with David and saved over $400/month. His tech-forward approach made the paperwork painless.",
      rating: 5,
    },
    {
      name: "Michael T.",
      text: "As a self-employed borrower, I thought getting a mortgage would be impossible. David found the perfect program for me.",
      rating: 5,
    },
    {
      name: "Jennifer K.",
      text: "David walked us through every option and never made us feel rushed. We closed two weeks ahead of schedule.",
      rating: 5,
    },
    {
      name: "Robert & Maria S.",
      text: "We were first-time buyers with a million questions. David answered every single one, even on weekends. Couldn\u2019t ask for better service.",
      rating: 5,
    },
    {
      name: "Angela D.",
      text: "After being turned down by two other lenders, David found a program that worked for my situation. I\u2019m now a homeowner because of him.",
      rating: 5,
    },
    {
      name: "Chris P.",
      text: "The AI rate tracker David uses is incredible. He called me the day rates dropped and we locked in immediately. Saved us thousands.",
      rating: 5,
    },
    {
      name: "Natalie & Brian W.",
      text: "David helped us purchase our investment property with a DSCR loan. He explained every detail and made the process seamless.",
      rating: 5,
    },
    {
      name: "Daniel F.",
      text: "I\u2019ve done three loans with David over the years. Every time, he finds a way to save me money. That\u2019s loyalty you can\u2019t fake.",
      rating: 5,
    },
    {
      name: "Karen & Tom L.",
      text: "David\u2019s team closed our jumbo loan in 21 days. Other lenders quoted us 45. The technology he uses is on another level.",
      rating: 5,
    },
  ],

  // ── Contact ──────────────────────────────────────────────
  phone: "(310) 954-7772",
  phoneRaw: "+13109547772",
  email: "david@lendwisemtg.com",
  smsRaw: "+13109547772",

  // ── Credentials ──────────────────────────────────────────
  nmls: "62043",
  dre: "01371572",

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
    "https://lendwisemtg.mymortgage-online.com/borrower-app/registration/?workFlowId=223023&action=login&dest=/loan-app/&siteId=1956469515",

  // ── Page Metadata ────────────────────────────────────────
  meta: {
    title: "David Young | Private Mortgage Banker at LendWise Mortgage",
    description:
      "David Young - Private Mortgage Banker, CMO & Partner at LendWise Mortgage Corporation. Your Mortgage. My Mission. Apply for a home loan with personalized service and cutting-edge technology.",
    keywords:
      "mortgage, home loan, David Young, LendWise, private mortgage banker, apply, refinance, purchase",
    ogTitle: "David Young | LendWise Mortgage",
    ogDescription:
      "Your Mortgage. My Mission. Work directly with a partner for a transparent, fast, and personal lending experience.",
  },
};
