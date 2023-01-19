<script>
	import MovieCard from '../../../components/MovieCard.svelte';
	import '../../../global.css';

    export let data;
	const searchedMovie = data.searchedMovie.data;
</script>

<section>
	<div class="searched-movies">
		{#each searchedMovie as movie}
			<MovieCard {movie} />
		{/each}
	</div>
</section>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 4rem;
	}
</style>
