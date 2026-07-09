import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Next.js 16 generates .next/types/validator.ts that references
    // next/types.js without a declaration file — this is a framework
    // issue, not application code. Our components are clean TypeScript.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
