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
  firstName: "Orly",
  lastName: "Hakimi",
  fullName: "Orly Hakimi",
  title: "Mortgage Banker",
  tagline: "Three Decades of Getting Deals Done.",
  photoPath: "/images/team/orly-hakimi.jpg",

  // ── Bio (hero section) ───────────────────────────────────
  heroExperience: "30+ years",
  heroAchievement: "every corner of the mortgage business",
  heroDescription:
    "from wholesale and retail to brokering and banking. Real estate agents and borrowers alike turn to me not just for a loan, but for strategic guidance on their financial goals.",

  // ── Bio (about section — plain text, apostrophes use \u2019) ──
  aboutBio:
    "With over 30 years in the mortgage industry, I have built my career across every corner of the business \u2014 wholesale, retail, brokering, and banking. That depth of experience means I don\u2019t just originate loans \u2014 I understand the entire transaction from start to finish.\n\nFrom pre-qualifying applicants and meeting with clients face-to-face to coordinating with processors, underwriters, and funding teams, I have personally navigated every phase of the lending process. Real estate agents and borrowers alike turn to me not just for a loan, but for strategic guidance on their short and long-term financial goals.\n\nMy reputation is built on a simple philosophy: treat every person with the respect they deserve and go the extra mile to ensure a smooth transaction. That commitment to excellence, integrity, and hard work has made me a trusted adviser to colleagues, partners, and organizations throughout my career.\n\nWhether you\u2019re purchasing your first home, refinancing, or exploring investment opportunities, I bring the kind of knowledge and personal attention that only comes from three decades of getting deals done.",

  // ── "Why Work With Me" Cards ───────────────────────────────
  aboutCards: [
    {
      img: "/images/icons/person-check.png",
      title: "Full-Spectrum Expertise",
      desc: "Wholesale, retail, brokering, and banking \u2014 I\u2019ve done it all, so I know what works for your situation.",
    },
    {
      img: "/images/icons/chip.png",
      title: "Hands-On, Start to Finish",
      desc: "From pre-qualification to funding, I personally oversee every phase of your transaction.",
    },
    {
      img: "/images/icons/globe.png",
      title: "Trusted Adviser",
      desc: "Agents and clients seek my guidance on both short and long-term financial goals \u2014 not just today\u2019s loan.",
    },
    {
      img: "/images/icons/chip-dark.png",
      title: "The Extra Mile",
      desc: "Excellence, integrity, and hard work aren\u2019t slogans \u2014 they\u2019re the foundation of every deal I close.",
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
  reviews: [] as { name: string; text: string; rating: number }[],

  // ── Contact ──────────────────────────────────────────────
  phone: "(310) 922-2599",
  phoneRaw: "+13109222599",
  email: "orly@lendwisemtg.com",
  smsRaw: "+13109222599",

  // ── Credentials ──────────────────────────────────────────
  nmls: "1017858",
  dre: "",

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
    "https://lendwisemtg.mymortgage-online.com/loan-app/?siteId=1956469515&lar=ohakimi&workFlowId=233348",

  // ── Page Metadata ────────────────────────────────────────
  meta: {
    title: "Orly Hakimi | Mortgage Banker at LendWise Mortgage",
    description:
      "Orly Hakimi - Mortgage Banker at LendWise Mortgage Corporation. 30+ years of experience across wholesale, retail, brokering, and banking. Apply for a home loan today.",
    keywords:
      "mortgage, home loan, Orly Hakimi, LendWise, mortgage banker, apply, refinance, purchase, experienced lender",
    ogTitle: "Orly Hakimi | LendWise Mortgage",
    ogDescription:
      "Three Decades of Getting Deals Done. 30+ years across every corner of the mortgage business. Work directly with a trusted adviser.",
  },
};
