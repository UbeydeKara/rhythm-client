/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost']
    },
    // temporary linking
    async redirects() {
        return [
            {
                source: '/',
                destination: '/artists',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
