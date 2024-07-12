import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), "src/styles")]
    },
    images: {
        remotePatterns: [
            {
                protocol:"https",
                hostname:"image.tmdb.org",
                pathname:"/t/p/w500/**"
            },
        ],
    },
};

export default nextConfig;
