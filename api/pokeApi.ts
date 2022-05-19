/** @format */

// Esta es una forma de dar typado a fetch.
function pokeApi<T>(url: string): Promise<T> {
	return fetch(`https:pokeapi.co/api/v2${url}`)
		.then((res) => res.json())
		.then((res) => res as T);
}

export default pokeApi;
