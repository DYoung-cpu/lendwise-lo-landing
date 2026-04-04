/**
 * Recruitment Landing Page Configuration
 * =======================================
 * Content for teamlendwise.com — the "Join LendWise" recruitment hub.
 */

export const recruitConfig = {
  // ── Meta ──────────────────────────────────────────────────
  meta: {
    title: "Join LendWise Mortgage | The Future of Mortgage Origination",
    description:
      "LendWise Mortgage is building the first AI-powered mortgage platform. Join a team where technology works for you — not against you.",
    ogTitle: "Join LendWise Mortgage",
    ogDescription:
      "AI-powered pre-approvals, automated marketing, competitive comp. See why top originators are making the move.",
    keywords: [
      "loan officer jobs",
      "mortgage careers",
      "join lendwise",
      "mortgage originator",
      "AI mortgage",
      "lendwise mortgage",
    ],
  },

  // ── Hero ──────────────────────────────────────────────────
  hero: {
    headline: "The Future of Mortgage\nIs Already Here",
    subheadline:
      "LendWise is the first lender building AI into every step — from pre-approval to closing. We're looking for originators who want to close more, work smarter, and own their future.",
    ctaText: "Let's Talk",
    ctaUrl: "https://calendar.app.google/MmCe5UPSeuca7PCKA",
  },

  // ── Value Props ───────────────────────────────────────────
  valueProps: [
    {
      icon: "Zap",
      title: "AI Pre-Approvals in Minutes",
      description:
        "Your clients or realtors text a request and get a pre-approval letter — no phone tag, no paperwork delays. You close deals while others are still playing phone tag.",
    },
    {
      icon: "Target",
      title: "Marketing Done For You",
      description:
        "Personalized social media content, email campaigns, and branded marketing assets with your face and name — all generated and managed by AI.",
    },
    {
      icon: "DollarSign",
      title: "Competitive Compensation",
      description:
        "W-2 or 1099 — your choice. Backed by a platform designed so you spend more time closing and less time waiting on operations.",
    },
    {
      icon: "Cpu",
      title: "Technology That Actually Works",
      description:
        "Automated loan review, AI-powered document processing, and a tech stack that eliminates the busywork that kills production.",
    },
    {
      icon: "Users",
      title: "You Are Our Client",
      description:
        "We understand that loan officers are the lifeblood of a mortgage company. Our entire platform is built around making YOU more successful.",
    },
    {
      icon: "TrendingUp",
      title: "Built for the Next Cycle",
      description:
        "The mortgage landscape is showing real signs of a breakout. Originators positioned with the right technology and support will win big.",
    },
  ],

  // ── Demo Video ────────────────────────────────────────────
  demo: {
    headline: "See It In Action",
    subheadline:
      "Watch how a pre-approval request goes from text message to approval letter — without a single phone call.",
    // Video can be a URL to hosted video, YouTube embed, or local path
    videoUrl: null as string | null, // Set when video is hosted
    videoPoster: null as string | null,
  },

  // ── Stats ─────────────────────────────────────────────────
  stats: [
    { value: "Minutes", label: "Pre-Approval Time" },
    { value: "50", label: "States Licensed" },
    { value: "AI", label: "Powered Platform" },
    { value: "24/7", label: "Technology Support" },
  ],

  // ── Contact / CTA ─────────────────────────────────────────
  contact: {
    name: "David Young",
    title: "CMO / Partner — Business Development & Strategic Growth",
    email: "david@lendwisemtg.com",
    phone: "(310) 954-7772",
    phoneRaw: "+13109547772",
    calendarUrl: "https://calendar.app.google/MmCe5UPSeuca7PCKA",
    nmls: "62043",
    dre: "01371572",
  },

  // ── Company Info ──────────────────────────────────────────
  company: {
    name: "LendWise Mortgage",
    nmls: "2702455",
    dre: "02282825",
    address: "21800 Oxnard St #220, Woodland Hills, CA 91367",
    website: "https://www.lendwisemtg.com",
  },

  // ── Social Links ──────────────────────────────────────────
  social: {
    linkedin: "https://www.linkedin.com/company/lendwisemtg",
    instagram: "https://www.instagram.com/lendwise_mortgage",
    facebook:
      "https://www.facebook.com/profile.php?id=61584196554458",
    tiktok: "https://www.tiktok.com/@lendwisemortgage",
  },
};
