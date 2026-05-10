"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CompanyHero } from "@/components/ui/company-hero";
import { TrustBand } from "@/components/ui/trust-band";
import { BuiltGrid } from "@/components/ui/built-grid";
import { ProgramsAndInvestors } from "@/components/ui/programs-investors";
import { TeamGrid } from "@/components/ui/team-grid";
import { RecruitForm } from "@/components/ui/recruit-form";
import { StarButton } from "@/components/ui/star-button";
import { companyProfile } from "@/config/company-profile";

export default function JoinLendWisePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Header — chassis preserved from LO template, content swapped */}
      <header className="fixed top-0 left-0 right-0 z-[100]">
        <div className="relative bg-slate-950/80 backdrop-blur-xl">
          <div className="relative flex items-center justify-end px-6 h-24 md:h-44">
            {/* Logo — absolutely centered */}
            <motion.a
              href="#hero"
              className="absolute left-1/2 block overflow-hidden h-24 md:h-44"
              initial={{ opacity: 0, y: 20, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={companyProfile.company.heroLogoPath}
                alt={companyProfile.company.shortName}
                width={250}
                height={110}
                className="h-[160px] md:h-[264px] w-auto -mt-6 md:-mt-9 drop-shadow-[0_0_30px_rgba(201,162,39,0.3)]"
                priority
              />
            </motion.a>
            <motion.div
              className="hidden md:flex gap-3 pr-4 self-end pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <StarButton
                href="#built"
                lightColor="#06b6d4"
                backgroundColor="#0f172a"
                duration={7}
                className="h-10 px-5 text-sm"
              >
                What We've Built
              </StarButton>
              <StarButton
                href="#programs"
                lightColor="#10b981"
                backgroundColor="#0f172a"
                duration={8}
                className="h-10 px-5 text-sm"
              >
                Investors
              </StarButton>
              <StarButton
                href="#team"
                lightColor="#a855f7"
                backgroundColor="#0f172a"
                duration={6}
                className="h-10 px-5 text-sm"
              >
                Team
              </StarButton>
              <StarButton
                href="#cta"
                lightColor="#d4af37"
                backgroundColor="#0f172a"
                duration={5}
                className="h-10 px-5 text-sm"
              >
                Talk to a Manager
              </StarButton>
            </motion.div>
          </div>
          {/* Cyan lamp beam — preserved chassis */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <div className="relative flex justify-center h-0">
              <motion.div
                initial={{ width: "8rem", opacity: 0 }}
                animate={{ width: "100%", opacity: 0.6 }}
                transition={{ delay: 0.3, duration: 1.07, ease: "easeInOut" }}
                className="absolute top-0 h-2.5 bg-cyan-500 blur-lg"
              />
              <motion.div
                initial={{ width: "6rem", opacity: 0 }}
                animate={{ width: "100%", opacity: 0.97 }}
                transition={{ delay: 0.3, duration: 1.07, ease: "easeInOut" }}
                className="absolute top-0 h-px bg-cyan-400 blur-md"
              />
              <motion.div
                initial={{ width: "10rem", opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.07, ease: "easeInOut" }}
                className="absolute top-0 h-px bg-cyan-400 opacity-50"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Sections */}
      <CompanyHero />
      <TrustBand />
      <BuiltGrid />
      <ProgramsAndInvestors />
      <TeamGrid />
      <RecruitForm />

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-100 text-center pb-12">
        <Image
          src={companyProfile.company.footerLogoPath}
          alt={companyProfile.company.shortName}
          width={200}
          height={49}
          className="mx-auto mb-4"
        />
        <p className="text-gray-500 text-sm mb-4">
          {companyProfile.company.address}
          <br />
          {companyProfile.company.city}, {companyProfile.company.state} {companyProfile.company.zip}
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Phone:{" "}
          <a href={`tel:${companyProfile.company.phoneRaw}`} className="hover:text-gray-700">
            {companyProfile.company.phone}
          </a>
          <br />
          Email:{" "}
          <a href={`mailto:${companyProfile.company.email}`} className="hover:text-gray-700">
            {companyProfile.company.email}
          </a>
        </p>
        <p className="text-gray-500 text-sm mb-4">
          NMLS ID: #{companyProfile.company.nmls} | DRE ID: #{companyProfile.company.dre}
          <br />
          Equal Housing Lender
        </p>
        <div className="flex gap-6 justify-center text-sm text-gray-500 mb-4">
          <a href="https://lendwisemtg.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
            Privacy
          </a>
          <a href="https://lendwisemtg.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
            Terms
          </a>
          <a
            href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2702455"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            Licensing
          </a>
          <a href={`mailto:${companyProfile.company.email}`} className="hover:text-gray-700">
            Contact
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} {companyProfile.company.name}. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
