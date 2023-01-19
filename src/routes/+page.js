export async function load({ fetch }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API}&language=en-US&page=1`
	);

	const movies = await res.json();

	if (res.ok) {
		return {
			movies: movies.results
		};
	}
}


