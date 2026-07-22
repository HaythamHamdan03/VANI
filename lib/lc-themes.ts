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

export const PORCELAIN: LCTheme = {
  slug: "porcelain-command",
  name: "Porcelain Command",
  bg: "#FAFAF8",
  bgAlt: "#F5F3EF",
  bgDark: "#17161A",
  surface: "#FFFFFF",
  border: "#E8E5DF",
  ink: "#17161A",
  muted: "#595660",
  faint: "#9A98A0",
  accent: "#E5341C",
  accentSoft: "#FFF1EE",
  accentHover: "#CC2A14",
  netNode: "#E5341C",
  netLine: "rgba(229,52,28,0.18)",
  netGlow: "rgba(229,52,28,0.07)",
  heroBgSize: "40px 40px",
  heroBgImage:
    "linear-gradient(rgba(23,22,26,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(23,22,26,0.05) 1px, transparent 1px)",
  heroGlow:
    "radial-gradient(ellipse 55% 45% at 78% 25%, rgba(229,52,28,0.09) 0%, transparent 65%)",
  dashChrome: "#F5F3EF",
  dashRow: "#FAFAF8",
  label: "#E5341C",
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

export const SANDSTONE: LCTheme = {
  slug: "sandstone-ai",
  name: "Sandstone AI",
  bg: "#FAF8F3",
  bgAlt: "#F2EBE0",
  bgDark: "#1C1914",
  surface: "#FFFFFF",
  border: "#E2D9CC",
  ink: "#1A1710",
  muted: "#5C5248",
  faint: "#9A8E82",
  accent: "#C84020",
  accentSoft: "#FFF3EE",
  accentHover: "#A83318",
  netNode: "#C84020",
  netLine: "rgba(200,64,32,0.18)",
  netGlow: "rgba(200,64,32,0.07)",
  heroBgSize: "48px 48px",
  heroBgImage:
    "linear-gradient(45deg, rgba(200,64,32,0.04) 1px, transparent 1px), linear-gradient(-45deg, rgba(200,64,32,0.04) 1px, transparent 1px)",
  heroGlow:
    "radial-gradient(ellipse 55% 45% at 78% 25%, rgba(200,64,32,0.09) 0%, transparent 65%)",
  dashChrome: "#F2EBE0",
  dashRow: "#FAF8F3",
  label: "#C84020",
};

export const ALL_LC_THEMES = [PORCELAIN, CLOUD, SANDSTONE] as const;
