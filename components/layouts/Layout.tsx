/** @format */
import Head from 'next/head';
import { FC } from 'react';

import { Navbar } from '../ui';

interface Props {
	children: JSX.Element;
	title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

/**
 * La prop children es la que utilizamos para renderizar otro componente dentro de este.
 */
export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'Pokemon App'}</title>
				<meta name='author' content='Diego Pagini' />
				<meta
					name='description'
					content={`Información sobre el pokémon ${title}`}
				/>
				<meta name='keywords' content={`${title}, pokemon, pokedex`} />
				<meta property='og:title' content={`Información sobre ${title}`} />
				<meta
					property='og:description'
					content={`Esta es la página sobre ${title}`}
				/>
				<meta property='og:image' content={`${origin}/imgs/banner.png`} />
			</Head>

			<Navbar />

			<main
				style={{
					padding: '0 1.25rem',
				}}
			>
				{children}
			</main>
		</>
	);
};
