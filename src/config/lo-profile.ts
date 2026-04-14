/**
 * LO Profile Configuration
 * ========================
 * Single source of truth for all Loan Officer personal data.
 */

export const loProfile = {
  // ── Personal ──────────────────────────────────────────────
  firstName: "Morci",
  lastName: "Dakhli",
  fullName: "Morci Dakhli",
  title: "Branch Manager",
  tagline: "Thousands of Loans. One Standard of Excellence.",
  photoPath: "/images/team/morci-dakhli.jpg",

  // ── Bio (hero section) ───────────────────────────────────
  heroExperience: "decades",
  heroAchievement: "thousands of closed loans across every product type",
  heroDescription:
    "From A-paper conforming to complex commercial financing, I\u2019ve done it all \u2014 thousands of times. My depth of experience means your loan gets the attention, creativity, and precision it deserves.",

  // ── Bio (about section) ──────────────────────────────────
  aboutBio:
    "With thousands of closed loans under my belt, I bring a level of experience that\u2019s hard to match. I\u2019ve structured everything from straightforward conventional purchases to intricate commercial property deals \u2014 and every scenario in between. My clients and referral partners trust me because I\u2019ve been in the trenches long enough to know exactly how to get a deal done, no matter how complex. Whether you\u2019re a first-time buyer, a seasoned investor, or a borrower with a unique situation, I have the tools, the knowledge, and the track record to deliver. I don\u2019t just close loans \u2014 I build long-term relationships built on results.",

  // ── "Why Work With Me" Cards ───────────────────────────────
  aboutCards: [
    {
      img: "/images/icons/person-check.png",
      title: "Thousands of Loans Closed",
      desc: "A track record that speaks for itself \u2014 from A-paper to commercial, I\u2019ve seen and closed every type of deal.",
    },
    {
      img: "/images/icons/chip.png",
      title: "Full Spectrum Expertise",
      desc: "Conventional, government, Non-QM, commercial \u2014 I don\u2019t specialize in one thing, I specialize in everything.",
    },
    {
      img: "/images/icons/globe.png",
      title: "Unmatched Experience",
      desc: "Decades in the business means I\u2019ve navigated every market condition, every guideline change, and every curveball.",
    },
    {
      img: "/images/icons/chip-dark.png",
      title: "Results You Can Count On",
      desc: "I don\u2019t make promises I can\u2019t keep. When I say your loan will close, it closes.",
    },
  ],

  // ── Loan Programs ─────────────────────────────────────────
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
    { img: "/images/icons/programs/conventional.png", title: "Commercial", desc: "Business properties" },
  ],

  // ── Reviews / Testimonials ─────────────────────────────────
  reviews: [] as { name: string; text: string; rating: number }[],

  // ── Contact ──────────────────────────────────────────────
  phone: "(310) 954-6805",
  phoneRaw: "+13109546805",
  email: "morci@lendwisemtg.com",
  smsRaw: "+13109546805",

  // ── Credentials ──────────────────────────────────────────
  nmls: "1613184",
  dre: "02032185",

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
    "https://lendwisemtg.mymortgage-online.com/loan-app/?siteId=1956469515&lar=mdahkli&workFlowId=233348",

  // ── Calendar Link ────────────────────────────────────────
  calendarUrl: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Qm_3jMj__O6_AYR2krRVB16t5PTa85tna1pjWtf5mQUjl8sx4yDjpjRimcDe-bS9WSk_xEXLw",

  // ── Page Metadata ────────────────────────────────────────
  meta: {
    title: "Morci Dakhli | Branch Manager at LendWise Mortgage",
    description:
      "Morci Dakhli - Branch Manager at LendWise Mortgage Corporation. Thousands of loans closed across every product type from A-paper to commercial financing.",
    keywords:
      "mortgage, home loan, Morci Dakhli, LendWise, branch manager, apply, refinance, purchase, commercial, California",
    ogTitle: "Morci Dakhli | LendWise Mortgage",
    ogDescription:
      "Thousands of loans. One standard of excellence. Work with a branch manager who has seen and closed it all.",
  },
};
