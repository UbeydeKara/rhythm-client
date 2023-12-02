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
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://13.50.110.62:8080/api/v1/:path*'
            },
        ]
    }
}

module.exports = nextConfig
