/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    // Add these lines
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = { fs: false };
        }
        return config;
    },
};

module.exports = nextConfig;