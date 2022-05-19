/** @format */
import Head from 'next/head';
import { FC } from 'react';

import { Navbar } from '../ui';

interface Props {
	children: JSX.Element;
	title?: string;
}

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
