/** @format */
import { environment } from '../environment/environment';


// Esta es una forma de dar typado a fetch.
function pokeFull<T>(url: string): Promise<T> {
	return fetch(`${environment.baseUrl}${url}`)
		.then((res) => res.json())
		.then((res) => res as T);
}

export default pokeFull;
