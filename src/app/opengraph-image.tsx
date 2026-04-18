import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { loProfile } from "@/config/lo-profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${loProfile.fullName} | ${loProfile.company.shortName} Mortgage`;

function fileToDataUrl(publicRelPath: string, mime: string): string {
  const rel = publicRelPath.replace(/^\//, "");
  const abs = join(process.cwd(), "public", rel);
  const buf = readFileSync(abs);
  return `data:${mime};base64,${buf.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const photoSrc = fileToDataUrl(loProfile.photoPath, "image/jpeg");
  const logoSrc = fileToDataUrl("/images/lendwise-hero-logo.png", "image/png");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0A1628",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Left panel - navy with LO details */}
        <div
          style={{
            width: "720px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
            backgroundColor: "#0A1628",
          }}
        >
          {/* Logo */}
          <img
            src={logoSrc}
            width="220"
            height="80"
            style={{ marginBottom: "36px", objectFit: "contain" }}
            alt=""
          />

          {/* Name */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.05,
              marginBottom: "14px",
              letterSpacing: "-0.02em",
            }}
          >
            {loProfile.fullName}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "26px",
              fontWeight: 500,
              color: "#C9A227",
              marginBottom: "18px",
            }}
          >
            {loProfile.title}
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "22px",
              color: "#94A3B8",
              marginBottom: "28px",
              lineHeight: 1.35,
            }}
          >
            {loProfile.tagline}
          </div>

          {/* Credentials */}
          <div
            style={{
              fontSize: "16px",
              color: "#64748B",
              letterSpacing: "0.05em",
            }}
          >
            {`NMLS #${loProfile.nmls}${loProfile.dre ? `  |  DRE #${loProfile.dre}` : ""}`}
          </div>
        </div>

        {/* Right panel - LO photo */}
        <div
          style={{
            width: "480px",
            height: "100%",
            display: "flex",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={photoSrc}
            width="480"
            height="630"
            style={{
              width: "480px",
              height: "630px",
              objectFit: "cover",
              objectPosition: "center top",
            }}
            alt=""
          />
          {/* Soft gradient edge */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "80px",
              height: "100%",
              background:
                "linear-gradient(to right, #0A1628 0%, rgba(10,22,40,0) 100%)",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
