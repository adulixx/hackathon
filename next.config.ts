/** @type {import('next').NextConfig} */
import type { NextConfig } from "next"
import createMDX from "@next/mdx"
import path from "path"

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  experimental: {
    reactCompiler: true,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
