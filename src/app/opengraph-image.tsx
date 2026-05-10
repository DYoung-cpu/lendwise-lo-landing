import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { companyProfile } from "@/config/company-profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Why Join LendWise Mortgage";

function fileToDataUrl(publicRelPath: string, mime: string): string {
  const rel = publicRelPath.replace(/^\//, "");
  const abs = join(process.cwd(), "public", rel);
  const buf = readFileSync(abs);
  return `data:${mime};base64,${buf.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const logoSrc = fileToDataUrl(companyProfile.company.heroLogoPath, "image/png");
  const t = companyProfile.trustBand;
  // Concatenate via template literal — Satori gotcha (lo-landing-page.md line 157)
  const credentials = `NMLS #${t.nmls}  |  DRE #${t.dre}  |  Licensed in ${t.statesLicensed.join(" · ")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A1628",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Subtle gold radial glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle, rgba(201,162,39,0.18) 0%, rgba(201,162,39,0.05) 30%, rgba(10,22,40,0) 60%)",
            display: "flex",
          }}
        />

        {/* Logo */}
        <img
          src={logoSrc}
          width="180"
          height="180"
          style={{ marginBottom: "32px", objectFit: "contain", display: "flex" }}
          alt=""
        />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: "18px",
            color: "#06B6D4",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "16px",
            display: "flex",
          }}
        >
          For Loan Officers
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "68px",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
            textAlign: "center",
            display: "flex",
          }}
        >
          Built by LOs. Engineered for Closers.
        </div>

        {/* Subhead */}
        <div
          style={{
            fontSize: "24px",
            color: "#94A3B8",
            marginBottom: "40px",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Investor breadth. In-house operations. AI tooling.
        </div>

        {/* Credentials band */}
        <div
          style={{
            fontSize: "18px",
            color: "#C9A227",
            letterSpacing: "0.1em",
            display: "flex",
          }}
        >
          {credentials}
        </div>
      </div>
    ),
    size
  );
}
