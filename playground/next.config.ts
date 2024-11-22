import type { NextConfig } from "next";
import MillionLint from "@million/lint";

const nextConfig: NextConfig = {
  /* config options here */
};

export default MillionLint.next({ rsc: true })(nextConfig);
