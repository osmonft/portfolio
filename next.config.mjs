/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Ensure private docs are bundled into the download API serverless function on Vercel
    outputFileTracingIncludes: {
      '/api/download': ['./private/docs/**/*'],
    },
  },
}

export default nextConfig
