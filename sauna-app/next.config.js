const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ignoreDuringBuilds: true,
}

module.exports = nextConfig

