import type { NextConfig } from "next";
import { userAgent, userAgentFromString } from "next/server";

const nextConfig: NextConfig = {

images:{
  domains:['utfs.io'],
  remotePatterns:[{
    protocol:'https',
    hostname:'utfs.io',
    port:''
  }]
}};

export default nextConfig;
