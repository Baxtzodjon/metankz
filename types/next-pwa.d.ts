declare module "next-pwa" {
  import { NextConfig } from "next";

  type WithPWA = (config: any) => (nextConfig: NextConfig) => NextConfig;

  const withPWA: WithPWA;
  export default withPWA;
}