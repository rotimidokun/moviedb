<script>
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	let inputValue = '';
	let active = false;

	const cancelInActive = () => {
		if (inputValue) {
			active = true;
		} else {
			active = false;
		}
	};

	const submitSearch = () => {
		goto('/search/' + inputValue);
	};
</script>

<form on:submit|preventDefault={submitSearch} class="search">
	{#if !active}
		<label in:fly={{ y: -10, duration: 500 }} out:fly={{ y: -10, duration: 500 }} for="search_movie"
			>Search Movie</label
		>
	{/if}
	<input
		on:blur={cancelInActive}
		on:focus={() => (active = true)}
		bind:value={inputValue}
		name="search_movie"
		type="text"
	/>
	<button>Search</button>
</form>

<style>
	.search {
		position: relative;
		width: 30%;
		margin: 1rem 0.5rem;
	}

	button {
		font-size: 0.7rem;
		padding: 0rem 1rem;
		background: rgb(96, 110, 201);
		color: white;
		font-weight: bold;
		border: none;
		position: absolute;
		bottom: 50%;
		right: 0;
		transform: translate(0, 50%);
		height: 100%;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		cursor: pointer;
	}

	input {
		width: 100%;
		border: none;
		font-size: 1rem;
		font-family: 'Poppins', sans-serif;
		outline: none;
		color: rgb(255, 255, 255);
		padding: 0.5rem 5rem 0.5rem 0.7rem;
		transition: background 0.75s ease-out;
		font-weight: normal;
		background: rgb(63, 63, 63);
		border-radius: 10px;
	}

	label {
		position: absolute;
		font-size: 0.8rem;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		pointer-events: none;
		color: #fff;
		padding: 0rem 1rem;
	}
</style>
