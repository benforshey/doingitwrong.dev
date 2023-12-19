<script>
	import BinaryDecimalClock from '../../features/clocks/BinaryDecimalClock.svelte';
</script>

<h1 class="sr-only">Applications</h1>

<details open>
	<summary>Binary Decimal Clock</summary>
	<p>
		There&rsquo;s something fun about playing around with reading the passage of
		time differently. Wikipedia has a helpful article on <a
			href="https://en.wikipedia.org/wiki/Binary-coded_decimal"
			rel="noopener noreferrer"
			target="_blank">binary-coded decimal</a
		> and how this can be read.
	</p>

	<BinaryDecimalClock
		--binary-decimal-clock__inline-size="50vw"
		dotWidth="8ch"
	/>
</details>
