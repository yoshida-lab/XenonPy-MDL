module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  future: {
    webpack5: true
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if your project has type errors.
    ignoreBuildErrors: true
  },
  env: {}
}
