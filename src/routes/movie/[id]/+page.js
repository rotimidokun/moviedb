export async function load({ fetch, params }) {
	const fetchProductId = async (id) => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API}&language=en-US`
		);

		const data = await res.json();

		if (res.ok) {
			return {
				data
			};
		}
	};

	return {
		movieDetail: fetchProductId(params.id)
	};
}
