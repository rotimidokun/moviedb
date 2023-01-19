export async function load({ fetch }) {
	const res = await fetch(
		'https://api.themoviedb.org/3/movie/popular?api_key=d208da60b0cf1d437a7556b63cee6831&language=en-US&page=1'
	);

	const movies = await res.json();

	if (res.ok) {
		return {
			movies: movies.results
		};
	}
}


