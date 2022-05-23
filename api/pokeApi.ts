/** @format */
import { environment } from '../environment/environment';


// Esta es una forma de dar typado a fetch.
function pokeApi<T>(url: string): Promise<T> {
	return fetch(`${environment.baseUrl}${url}`)
		.then((res) => res.json())
		.then((res) => res as T);
}

export default pokeApi;
