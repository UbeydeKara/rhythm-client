/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.scdn.co",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/store',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
