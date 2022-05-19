/** @format */
import '../styles/globals.css';

import { NextUIProvider } from '@nextui-org/react';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider>
			{/* Para agregar NextUi components. */}
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default MyApp;
