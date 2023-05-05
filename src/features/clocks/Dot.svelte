<script>
	export let digit = '0';
</script>

<svg aria-hidden="true" viewBox="0 0 100 100" width="20" xmlns="http://www.w3.org/2000/svg">
	<circle
		cx="50"
		cy="50"
		r="50"
		style={`fill: ${digit === '1' ? 'var(--circle--on)' : 'var(--circle--off)'}`}
	/>
</svg>

<style>
	circle {
		--circle--off: ButtonFace;
		--circle--on: ButtonText;

		transition: fill 200ms ease-out;
	}
</style>
