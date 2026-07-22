export type LCTheme = {
  slug: string;
  name: string;
  // Backgrounds
  bg: string;
  bgAlt: string;
  bgDark: string;
  // Surfaces
  surface: string;
  border: string;
  // Text
  ink: string;
  muted: string;
  faint: string;
  // Accent
  accent: string;
  accentSoft: string;
  accentHover: string;
  // Network visualization
  netNode: string;
  netLine: string;
  netGlow: string;
  // Hero atmosphere (CSS background values)
  heroBgSize: string;
  heroBgImage: string;
  heroGlow: string;
  // Dashboard
  dashChrome: string;
  dashRow: string;
  // Label color (section eyebrows)
  label: string;
};

export const CLOUD: LCTheme = {
  slug: "cloud-intelligence",
  name: "Cloud Intelligence",
  bg: "#F5F8FB",
  bgAlt: "#EBF1F9",
  bgDark: "#0F1929",
  surface: "#FFFFFF",
  border: "#D5E1EE",
  ink: "#0C1829",
  muted: "#3E5270",
  faint: "#8696B0",
  accent: "#1A6FE8",
  accentSoft: "#ECF3FF",
  accentHover: "#1560CC",
  netNode: "#1A6FE8",
  netLine: "rgba(26,111,232,0.18)",
  netGlow: "rgba(26,111,232,0.09)",
  heroBgSize: "28px 28px",
  heroBgImage:
    "radial-gradient(circle, rgba(26,111,232,0.055) 1px, transparent 1px)",
  heroGlow:
    "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(26,111,232,0.12) 0%, transparent 65%)",
  dashChrome: "#EBF1F9",
  dashRow: "#F5F8FB",
  label: "#1A6FE8",
};

