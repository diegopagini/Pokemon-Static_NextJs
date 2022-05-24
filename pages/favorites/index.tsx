/** @format */
import { useEffect, useState } from 'react';

import { Layout } from '../../components/layouts';
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavouritesPage = () => {
	const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

	/**
	 * useEffect solo se ejecuta la primera vez que la página es llamada.
	 */
	useEffect(() => {
		setFavoritePokemons(localFavorites.pokemons);
	}, []);

	return (
		<Layout title='Pokemons - Favoritos'>
			{favoritePokemons.length === 0 ? (
				<NoFavorites />
			) : (
				<FavoritePokemons favoritePokemons={favoritePokemons} />
			)}
		</Layout>
	);
};

export default FavouritesPage;
