<script>
    export let data;
    import PopularMovies from '../components/PopularMovies.svelte'
    import SearchMovies from '../components/SearchMovies.svelte';
    import '../global.css'
</script>


<section>
    <SearchMovies />
    <PopularMovies movies={data.movies} />
</section>
