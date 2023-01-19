export async function load({ fetch, params }) {
	const fetchSearchMovieId = async (id) => {
		const res = await fetch(
			`https://api.themoviedb.org/3/search/multi?api_key=${import.meta.env.VITE_API}&language=en-US&query=${id}&page=1&include_adult=false`
		);

		const data = await res.json();

		if (res.ok) {
			return {
				data: data.results
			};
		}
	};

	return {
		searchedMovie: fetchSearchMovieId(params.id)
	};
}
