/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'res.cloudinary.com', "via.placeholder.com"],
    },
}

module.exports = nextConfig
