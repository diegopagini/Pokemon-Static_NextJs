/** @format */
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { FC } from 'react';

import pokeFull from '../../api/pokeFull';
import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';

interface Props {
	pokemon: any;
}

export const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	return (
		<Layout title='asd'>
			<h1>Temporal</h1>
		</Layout>
	);
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
// Mis rutas son dinámicas por el [id]
export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

	return {
		paths: pokemons151.map((id: string) => ({
			params: { id },
		})),
		fallback: false, // Si el url no existiera nos envía al 404 con el fallback en false.
	};
};

/**
 * Función para obtener información dinámica de cada pokemon.
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string };
	const data = await pokeFull<Pokemon>(`/pokemon/${id}`);

	console.log(data);

	return {
		props: {
			data,
		},
	};
};

export default PokemonPage;
