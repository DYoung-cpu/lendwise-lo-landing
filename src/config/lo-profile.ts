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
  firstName: "Frankie",
  lastName: "Fahimi",
  fullName: "Frankie Fahimi",
  title: "Loan Officer",
  tagline: "Real Estate Expertise. Mortgage Excellence.",
  photoPath: "/images/team/frankie-fahimi.jpg",

  // ── Bio (hero section) ───────────────────────────────────
  heroExperience: "a decade",
  heroAchievement: "a proven track record in real estate and lending",
  heroDescription:
    "I bring something most loan officers can\u2019t \u2014 years on the real estate side. I\u2019ve sat where your agent sits, solved the problems before they become yours, and now I bring that same intensity to getting your mortgage done right.",

  // ── Bio (about section — plain text, apostrophes use \u2019) ──
  aboutBio:
    "After years as a licensed real estate professional, I made the transition to mortgage lending \u2014 and I brought everything I learned with me. I understand the pressure agents face, the timelines borrowers worry about, and the details that make or break a transaction. That dual perspective means I don\u2019t just process loans \u2014 I anticipate issues before they surface and resolve them before they become problems. Whether you\u2019re a first-time buyer, a seasoned investor, or a real estate partner looking for a lender who truly gets it, I\u2019m here. Available, dedicated, and always in your corner.",

  // ── "Why Work With Me" Cards ───────────────────────────────
  aboutCards: [
    {
      img: "/images/icons/person-check.png",
      title: "Both Sides of the Deal",
      desc: "Years in real estate means I understand your agent\u2019s challenges and your concerns as a borrower \u2014 and I bridge the gap.",
    },
    {
      img: "/images/icons/chip.png",
      title: "Technology Forward",
      desc: "I leverage AI and automation to ensure flawless execution \u2014 faster approvals, smarter processing, nothing falling through the cracks.",
    },
    {
      img: "/images/icons/globe.png",
      title: "Broad Reach",
      desc: "Serving borrowers across multiple markets with local knowledge and a nationwide lending platform.",
    },
    {
      img: "/images/icons/chip-dark.png",
      title: "Always Available",
      desc: "I don\u2019t disappear after you apply. Call, text, or email \u2014 I\u2019m here when you need me, every step of the way.",
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
  // Empty for now — section will be hidden until Frankie has testimonials
  reviews: [] as { name: string; text: string; rating: number }[],

  // ── Contact ──────────────────────────────────────────────
  phone: "(818) 929-2929",
  phoneRaw: "+18189292929",
  email: "frankie@lendwisemtg.com",
  smsRaw: "+18189292929",

  // ── Credentials ──────────────────────────────────────────
  nmls: "2808072",
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
    "https://lendwisemtg.mymortgage-online.com/loan-app/?siteId=1956469515&lar=ffahimi&workFlowId=233348",

  // ── Calendar Link ────────────────────────────────────────
  calendarUrl: "https://calendar.app.google/8nbT4V6tmso9oq7eA",

  // ── Page Metadata ────────────────────────────────────────
  meta: {
    title: "Frankie Fahimi | Loan Officer at LendWise Mortgage",
    description:
      "Frankie Fahimi - Loan Officer at LendWise Mortgage Corporation. Real Estate Expertise. Mortgage Excellence. From years in real estate to mortgage lending — I bring both sides of the deal to your corner.",
    keywords:
      "mortgage, home loan, Frankie Fahimi, LendWise, loan officer, apply, refinance, purchase, California, Florida",
    ogTitle: "Frankie Fahimi | LendWise Mortgage",
    ogDescription:
      "Real Estate Expertise. Mortgage Excellence. Work with a loan officer who understands both sides of the transaction.",
  },
};
