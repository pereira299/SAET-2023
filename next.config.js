/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'res.cloudinary.com', "via.placeholder.com"],
    },
    env: {
        DATO_CMS_API_KEY: process.env.DATO_CMS_API_KEY,
    }
}

module.exports = nextConfig
