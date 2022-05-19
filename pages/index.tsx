/** @format */
import { GetStaticProps } from 'next';
import { FC } from 'react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
	pokemons: SmallPokemon[];
}

const HomePage: FC<Props> = ({ pokemons }) => {
	console.log(pokemons);

	return (
		<Layout title='Listado de Pokémons'>
			<ul>
				{/* Forma de recorrer arrays en React */}
				{pokemons.map(({ id, name }) => (
					<li key={id}>{name}</li>
				))}
			</ul>
		</Layout>
	);
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
// Esta función solo se utiliza del lado del servidor. Y solo puede ser utilizado en "paginas" y no en "componentes"
export const getStaticProps: GetStaticProps = async (ctx) => {
	const { results } = await pokeApi<PokemonListResponse>('/pokemon?limit=151');
	return {
		props: {
			pokemons: results,
		},
	};
};

export default HomePage;
