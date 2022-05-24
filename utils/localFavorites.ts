/** @format */

/**
 * Función para guardar/eliminar un id del localStorage.
 * @param {number} id
 */
const toggleFavorite = (id: number): void => {
	let favorites: number[] = JSON.parse(
		localStorage.getItem('favorites') || '[]'
	);

	if (favorites.includes(id)) {
		favorites = favorites.filter((pokeId: number) => pokeId !== id);
	} else {
		favorites.push(id);
	}

	localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Función para comprobar si nuestro id existe en el localStorage.
 * @param {number} id
 * @returns boolean
 */
const existInFavorites = (id: number): boolean => {
	// Esta validación es necesaria porque nuestro código también corre del lado del servidor
	// y el objeto window no existe ahí.
	if (typeof window === 'undefined') return false;

	const favorites: number[] = JSON.parse(
		localStorage.getItem('favorites') || '[]'
	);

	return favorites.includes(id);
};

/**
 * Función para retornar nuestros ids del localStorage.
 * @returns number[]
 */
const pokemons = (): number[] => {
	return JSON.parse(localStorage.getItem('favorites') || '[]');
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { toggleFavorite, existInFavorites, pokemons };
