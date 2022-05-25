/** @format */
import { pokeFull } from '../api';
import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
	try {
		const data = await pokeFull<Pokemon>(`/pokemon/${nameOrId}`);
		// Creamos un objecto con los datos que necesitamos unicamente para mostrar en la vista.
		// Para que cuando se genere nuestra pagina en el servidor solo tengamos los datos que necesitamos y no un objecto enorme.
		return {
			sprites: data.sprites,
			id: data.id,
			name: data.name,
		};
	} catch (error) {
		return null;
	}
};
