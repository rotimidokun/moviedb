<script>
	export let data;
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovies from '../components/SearchMovies.svelte';
	import { fly } from 'svelte/transition';

	import '../global.css';
</script>

<section in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovies />
	<PopularMovies movies={data.movies} />
</section>

<style>
    section {
        margin: 0 0 4rem 0;
    }
</style>
