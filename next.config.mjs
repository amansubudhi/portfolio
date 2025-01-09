/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "api.microlink.io", // Microlink Image Preview
        ],
    },
    transpilePackages: ['lucide-react']
};

export default nextConfig;
