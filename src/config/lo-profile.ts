/**
 * LO Profile Configuration
 * ========================
 * Single source of truth for all Loan Officer personal data.
 *
 * To customize for a new LO:
 *  1. Update the fields below with the LO's info
 *  2. Drop their headshot into public/images/team/ and update photoPath
 *  3. Update the applicationUrl with their workFlowId & siteId
 *  4. Restart the dev server
 *
 * Everything else — layout, design, animations — stays untouched.
 */

export const loProfile = {
  // ── Personal ──────────────────────────────────────────────
  firstName: "David",
  lastName: "Young",
  fullName: "David Young",
  title: "CMO / Partner",
  tagline: "Your Mortgage. My Mission.",
  photoPath: "/images/team/david-young.jpg",

  // ── Bio (hero section) ───────────────────────────────────
  heroExperience: "25 years",
  heroAchievement: "hundreds of millions funded",

  // ── Bio (about section — plain text, apostrophes use \u2019) ──
  aboutBio:
    "I\u2019ve spent over 25 years in the mortgage industry, and I still take pride in what real customer service means \u2014 staying ahead of every new program, rate, and advantage that can benefit my clients. I\u2019ve owned several successful mortgage businesses serving different markets, but with LendWise, I\u2019ve built something I\u2019ve always wanted: every program under one roof, powered by the best pricing and technology in the business. Having funded hundreds of millions in loans, I understand the weight of the decisions homeowners face. Your home is your most trusted asset, and that gravity is never lost on me. When you work with me, you\u2019re working directly with an owner \u2014 no receptionist, no middleman. I\u2019m always a phone call, text, or email away.",

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
    title: "David Young | CMO & Partner at LendWise Mortgage",
    description:
      "David Young - CMO & Partner at LendWise Mortgage Corporation. Your Mortgage. My Mission. Apply for a home loan with personalized service and cutting-edge technology.",
    keywords:
      "mortgage, home loan, David Young, LendWise, CMO, apply, refinance, purchase",
    ogTitle: "David Young | LendWise Mortgage",
    ogDescription:
      "Your Mortgage. My Mission. Work directly with a partner for a transparent, fast, and personal lending experience.",
  },
};
