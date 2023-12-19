<script>
	let {
		digit = '0',
		dotWidth = '1ch',
		dotOnClass = 'fill-cyan-700 dark:fill-cyan-500',
		dotOffClass = 'fill-stone-300 dark:fill-stone-600',
	} = $props();
</script>

<svg
	aria-hidden="true"
	viewBox="0 0 100 100"
	width={dotWidth}
	xmlns="http://www.w3.org/2000/svg"
>
	<circle
		cx="50"
		cy="50"
		r="50"
		class={digit === '1' ? dotOnClass : dotOffClass}
	/>
</svg>

<style>
	circle {
		transition: fill 200ms ease-out;
		aspect-ratio: 1/1;
	}
</style>
