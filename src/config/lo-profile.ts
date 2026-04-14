/**
 * LO Profile Configuration
 * ========================
 * Single source of truth for all Loan Officer personal data.
 */

export const loProfile = {
  // ── Personal ──────────────────────────────────────────────
  firstName: "DeeDee",
  lastName: "Haury",
  fullName: "DeeDee Haury",
  title: "Private Mortgage Banker",
  tagline: "25 Years of Solving the Hard Stuff.",
  photoPath: "/images/team/deedee-haury.jpg",

  // ── Bio (hero section) ───────────────────────────────────
  heroExperience: "over 25 years",
  heroAchievement: "a reputation for solving the toughest mortgage challenges",
  heroDescription:
    "I specialize in the deals others walk away from. With over two decades in the business, I\u2019ve built my career on finding answers when everyone else says no \u2014 and delivering results my clients can count on.",

  // ── Bio (about section) ──────────────────────────────────
  aboutBio:
    "After more than 25 years in mortgage lending, I\u2019ve seen it all \u2014 and closed it all. I\u2019m the person you call when the deal gets complicated, when the file needs creative structuring, and when you need a lender who actually picks up the phone. My clients come back because I treat every transaction like it\u2019s my own. I don\u2019t just push paper \u2014 I build relationships, solve problems, and make sure you understand every step of the process. Whether you\u2019re buying your first home, investing in property, or refinancing into a better position, I\u2019ll put 25 years of experience to work for you.",

  // ── "Why Work With Me" Cards ───────────────────────────────
  aboutCards: [
    {
      img: "/images/icons/person-check.png",
      title: "25+ Years of Experience",
      desc: "Over two decades closing every type of loan \u2014 from simple purchases to the most complex scenarios in the industry.",
    },
    {
      img: "/images/icons/chip.png",
      title: "The Problem Solver",
      desc: "I specialize in the hard stuff. When other lenders say no, I find the path to yes.",
    },
    {
      img: "/images/icons/globe.png",
      title: "Relationship First",
      desc: "My clients come back again and again because I treat every deal like it\u2019s my own \u2014 and I\u2019m always just a call away.",
    },
    {
      img: "/images/icons/chip-dark.png",
      title: "Expert Deal Structuring",
      desc: "Years of experience means I know how to put a deal together that works \u2014 for the borrower, the agent, and the transaction.",
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
  ],

  // ── Reviews / Testimonials ─────────────────────────────────
  reviews: [] as { name: string; text: string; rating: number }[],

  // ── Contact ──────────────────────────────────────────────
  phone: "(820) 232-0799",
  phoneRaw: "+18202320799",
  email: "DeeDee@lendwisemtg.com",
  smsRaw: "+18202320799",

  // ── Credentials ──────────────────────────────────────────
  nmls: "1702277",
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
    "https://portal.lendwisemtg.com/p/deedee-haury",

  // ── Calendar Link ────────────────────────────────────────
  calendarUrl: "https://calendar.app.google/9AGNbCfSMqMNhFhW9",

  // ── Page Metadata ────────────────────────────────────────
  meta: {
    title: "DeeDee Haury | Private Mortgage Banker at LendWise Mortgage",
    description:
      "DeeDee Haury - Private Mortgage Banker at LendWise Mortgage Corporation. 25+ years specializing in complex mortgage scenarios. When others say no, DeeDee finds a way.",
    keywords:
      "mortgage, home loan, DeeDee Haury, LendWise, private mortgage banker, apply, refinance, purchase, California",
    ogTitle: "DeeDee Haury | LendWise Mortgage",
    ogDescription:
      "25+ years of solving the hard stuff. Work with a mortgage professional who always has an answer.",
  },
};
