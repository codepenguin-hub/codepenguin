/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	basePath: isProd ? "/codepenguin" : "",
	output: isProd ? "export" : "standalone",
};

export default nextConfig;
