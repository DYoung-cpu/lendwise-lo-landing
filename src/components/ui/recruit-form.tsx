"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { companyProfile } from "@/config/company-profile";

export function RecruitForm() {
  const cta = companyProfile.cta;

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ref, setRef] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    setRef(params.get("ref") || "");
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload: Record<string, string> = {
      ref,
    };
    fd.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const res = await fetch(cta.formAction, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Something went wrong");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="cta" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-20 md:py-28 border-t border-white/10">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[3px] text-cyan-400 mb-3">{cta.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{cta.headline}</h2>
          <p className="text-slate-400">{cta.subhead}</p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-[#C9A227]/40 bg-[#C9A227]/5 p-10 text-center"
          >
            <div className="text-3xl mb-3">✓</div>
            <h3 className="text-2xl font-bold text-white mb-2">Got it.</h3>
            <p className="text-slate-300">
              A manager will reach out within one business day. Check your inbox for a reply
              from us soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            {/* honeypot */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field name="fullName" label="Full Name" required />
              <Field name="email" label="Email" type="email" required />
              <Field name="phone" label="Phone" type="tel" />
              <Field name="currentCompany" label="Current Company" />
              <Field name="nmls" label="NMLS #" />
              <Field name="statesLicensed" label="States Licensed" placeholder="CA, FL" />
              <div className="md:col-span-2">
                <Field name="volume12mo" label="12-Month Volume (approx.)" placeholder="$25M" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[2px] text-slate-400 mb-2">
                Message <span className="text-slate-600">(optional)</span>
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg bg-slate-900/80 border border-white/10 text-white px-4 py-3 text-sm focus:border-[#C9A227]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 transition-all"
                placeholder="What are you looking for? What's your biggest pain point right now?"
              />
            </div>

            {ref && (
              <p className="text-xs text-slate-500 text-center">
                Routing to <span className="text-[#C9A227] font-semibold">{ref}</span>
              </p>
            )}

            {error && (
              <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-gradient-to-r from-[#C9A227] to-[#E5C158] hover:from-[#D4AF37] hover:to-[#F0CC68] text-slate-950 font-bold py-4 px-6 text-sm uppercase tracking-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(201,162,39,0.3)]"
            >
              {submitting ? "Sending…" : "Send to a Manager"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[2px] text-slate-400 mb-2">
        {label} {required && <span className="text-[#C9A227]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg bg-slate-900/80 border border-white/10 text-white px-4 py-3 text-sm focus:border-[#C9A227]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 transition-all"
      />
    </div>
  );
}
