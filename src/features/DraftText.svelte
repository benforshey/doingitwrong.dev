<script>
	import { onMount } from 'svelte';

	let base;
	let stack;

	onMount(() => {
		// base.style.width = `${stack.scrollWidth}px`;
	});
	// https://css-tricks.com/snippets/css/typewriter-effect/#top-of-site
	// https://codemyui.com/text-swap-animation/
</script>

<span class="base" bind:this={base}>
	<span class="stack" bind:this={stack}>
		<slot />
	</span>
</span>

<style>
	.base {
		display: inline-flex;
		position: relative;
	}

	.stack {
		display: flex;
		flex-direction: column;
		/* position: absolute; */
		width: fit-content;
	}

	/* .stack :global(del:not(:first-of-type)), */
	/* .stack :global(ins) { */
	/* 	opacity: 0; */
	/* } */
</style>
