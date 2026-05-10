/**
 * Recruiter Map
 * =============
 * Maps the ?ref= URL parameter on join.teamlendwise.com to a recruiter
 * email so inbound form submissions route back to the LO who shared the link.
 *
 * Add a slug per LO who'll share the link with prospects. Slugs are
 * lowercased and matched case-insensitively. Unknown / missing slugs fall
 * back to David.
 *
 * Examples:
 *   join.teamlendwise.com/?ref=paul   → Paul gets the lead
 *   join.teamlendwise.com/?ref=david  → David gets the lead
 *   join.teamlendwise.com             → David (fallback)
 */

export type Recruiter = {
  name: string;
  email: string;
  // optional friendly source label written into GHL contact source field
  sourceLabel?: string;
};

export const recruiterMap: Record<string, Recruiter> = {
  david: { name: "David Young",        email: "david@lendwisemtg.com" },
  paul:  { name: "Paul Tropp",         email: "paul@amfigroup.com"   },
  gary:  { name: "Gary Sayble",        email: "gary@amfigroup.com"   },
  tony:  { name: "Tony Nasim",         email: "tony@lendwisemtg.com" },
  gady:  { name: "Gady Gabrielzadeh",  email: "gady@lendwisemtg.com" },
  jeff:  { name: "Jeff Schlesinger",   email: "Jeff@JeffSchlesinger.com" },
  orly:  { name: "Orly Hakimi",        email: "orly@lendwisemtg.com" },
  diana: { name: "Diana Soderquist",   email: "diana@lendwisemtg.com" },
  morci: { name: "Morci Dakhli",       email: "morci@lendwisemtg.com" },
  deedee:{ name: "DeeDee Haury",       email: "DeeDee@lendwisemtg.com" },
  alberto:{ name: "Alberto Martinez",  email: "Alberto@lendwisemtg.com" },
  sean:  { name: "Sean Casey",         email: "scasey@prolinemortgage.com" },
};

export const FALLBACK_RECRUITER: Recruiter = {
  name: "David Young",
  email: "david@lendwisemtg.com",
};

export function resolveRecruiter(ref: string | null | undefined): {
  recruiter: Recruiter;
  slug: string;
  matched: boolean;
} {
  const slug = (ref ?? "").trim().toLowerCase();
  if (slug && slug in recruiterMap) {
    return { recruiter: recruiterMap[slug], slug, matched: true };
  }
  return { recruiter: FALLBACK_RECRUITER, slug: slug || "default", matched: false };
}
