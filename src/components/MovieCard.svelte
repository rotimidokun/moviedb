<script>
	export let movie;
	// console.log(movie);
</script>

<div class="movie-card">
    <a href={'/movie/' + movie.id}>
        <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
    </a>
	
	<div class="description">
		<h2>{movie.title}</h2>
		<p>{movie.release_date}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
        border-radius: 0.8rem;
        margin-bottom: 1rem;
        /* height: 30vh; */
        /* object-fit: cover; */
	}

    h2 {
        font-size: 1rem;
    }

    .description {
        height: 5vh;
        padding-bottom: 1rem;
    }

    .movie-card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem 0.5rem;
    }
</style>
