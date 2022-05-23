/** @format */
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Layout } from '../../components/layouts';

interface Props {
	id: string;
	name: string;
}

export const PokemonPage: FC<Props> = ({ id, name }) => {
	const { query } = useRouter();
	console.log(query);

	return (
		<Layout title={name}>
			<h1>
				{id} - {name}
			</h1>
		</Layout>
	);
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
// Mis rutas son dinámicas por el [id]
export const getStaticPaths: GetStaticPaths = async (ctx) => {
	return {
		paths: [
			{
				params: { id: '1' },
			},
			{
				params: { id: '2' },
			},
		],
		fallback: false, // Si el url no existiera nos envía al 404.
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	return {
		props: {
			id: 1,
			name: 'Bul',
		},
	};
};

export default PokemonPage;
