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
  firstName: "Tony",
  lastName: "Nasim",
  fullName: "Tony Nasim",
  title: "CSO / Partner",
  tagline: "Where Others Say No, I Find a Way.",
  photoPath: "/images/team/tony-nasim.jpg",

  // ── Bio (hero section) ───────────────────────────────────
  heroExperience: "20+ years",
  heroAchievement: "2,000+ loans personally funded",
  heroDescription:
    "but the number I\u2019m most proud of? The ones every other lender said no to. Complex income, unique properties, tight timelines \u2014 I find solutions where others see dead ends.",

  // ── Bio (about section — plain text, apostrophes use \u2019) ──
  aboutBio:
    "I have spent over 20 years in the mortgage industry and have personally funded more than 2,000 loans, but the number I am most proud of is the deals other lenders said no to.\n\nI have spent my career building on consistency, strong relationships, and a deep understanding of how to navigate an ever changing market. Over time, I have had the opportunity to work with a wide range of clients and develop a process that prioritizes clarity, communication, and results.\n\nMy approach is simple. I stay involved, I stay accessible, and I make sure every transaction is handled with intention from start to finish. I believe clients deserve transparency and a steady hand throughout the process, especially when making one of the most important financial decisions of their lives.\n\nAlongside my production, I am committed to helping other loan officers grow and succeed. I offer a personalized one on one mentorship program focused on building confidence, sharpening strategy, and creating long term success in this business. My goal is not just to help loan officers close more deals, but to help them build sustainable and meaningful careers.\n\nWhether you are a client looking for guidance or a loan officer ready to take your business to the next level, I bring a balanced approach rooted in experience, leadership, and a genuine investment in your success.\n\nWhen I am not working, I enjoy spending time on the basketball court with my three sons and exploring new places with my daughter.",

  // ── "Why Work With Me" Cards ───────────────────────────────
  aboutCards: [
    {
      img: "/images/icons/person-check.png",
      title: "The Fixer",
      desc: "I specialize in the loans other lenders won\u2019t touch. Complex income, unique situations \u2014 I find the path forward.",
    },
    {
      img: "/images/icons/chip.png",
      title: "Hands-On, Start to Finish",
      desc: "No handoffs, no runaround. I personally manage your file from application to closing.",
    },
    {
      img: "/images/icons/globe.png",
      title: "2,000+ Loans Funded",
      desc: "Two decades of experience means I\u2019ve seen it all \u2014 and solved it all.",
    },
    {
      img: "/images/icons/chip-dark.png",
      title: "Family First",
      desc: "I understand what home means. It\u2019s why I treat every client\u2019s decision like my own.",
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
      name: "Michael R.",
      text: "I was turned down by two banks because of my self-employment income. Tony found a program that worked and closed in three weeks. He literally saved my home purchase.",
      rating: 5,
    },
    {
      name: "Sandra & James L.",
      text: "Tony handled our jumbo refinance like it was nothing. He caught a title issue early that would have killed the deal with anyone else. Incredible attention to detail.",
      rating: 5,
    },
    {
      name: "David K.",
      text: "As an investor, I need someone who moves fast and knows the DSCR space. Tony is that guy. Five properties financed, zero issues.",
      rating: 5,
    },
    {
      name: "Rachel M.",
      text: "Tony took the time to explain every option and never pressured us. First-time buyers with a lot of anxiety, and he made it feel easy.",
      rating: 5,
    },
    {
      name: "Alex & Priya T.",
      text: "Our situation was complicated \u2014 mixed income, foreign assets, tight timeline. Tony didn\u2019t flinch. We closed on time with a great rate.",
      rating: 5,
    },
    {
      name: "Brian H.",
      text: "I\u2019ve worked with Tony on three loans over the years. Each time he finds a way to beat what I thought was the best deal. That\u2019s why I keep coming back.",
      rating: 5,
    },
    {
      name: "Carmen S.",
      text: "Tony was available nights and weekends when we needed him. He treated our loan like it was his own family\u2019s. You won\u2019t find that anywhere else.",
      rating: 5,
    },
    {
      name: "Kevin & Lisa W.",
      text: "We needed a fix-and-flip loan on a tight schedule. Tony got it done in 12 days. Other lenders told us 30 minimum. He\u2019s the real deal.",
      rating: 5,
    },
  ],

  // ── Contact ──────────────────────────────────────────────
  phone: "(818) 331-9142",
  phoneRaw: "+18183319142",
  email: "tony@lendwisemtg.com",
  smsRaw: "+18183319142",

  // ── Credentials ──────────────────────────────────────────
  nmls: "819586",
  dre: "01892824",

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
    "https://lendwisemtg.mymortgage-online.com/loan-app/?siteId=1956469515&lar=tnasim&workFlowId=233348",

  // ── Page Metadata ────────────────────────────────────────
  meta: {
    title: "Tony Nasim | CSO & Partner at LendWise Mortgage",
    description:
      "Tony Nasim - CSO & Partner at LendWise Mortgage Corporation. 20+ years, 2,000+ loans funded. Where Others Say No, I Find a Way. Apply for a home loan today.",
    keywords:
      "mortgage, home loan, Tony Nasim, LendWise, CSO, apply, refinance, purchase, complex loans",
    ogTitle: "Tony Nasim | LendWise Mortgage",
    ogDescription:
      "Where Others Say No, I Find a Way. 20+ years and 2,000+ loans funded. Work directly with a partner for expert mortgage solutions.",
  },
};
