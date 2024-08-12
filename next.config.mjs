/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY: process.env.GOOGLE_GEMINI_API_KEY,
    },
  }
  
  export default nextConfig;
