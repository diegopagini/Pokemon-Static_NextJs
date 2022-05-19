/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	reactStrictMode: true,
	// Configuración para permitir dominios externos para nuestras imágenes.
	images: {
		domains: ['raw.githubusercontent.com'],
	},
};

module.exports = nextConfig;
