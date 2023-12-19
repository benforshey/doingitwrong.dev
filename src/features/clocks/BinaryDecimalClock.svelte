<script>
	import Dot from './Dot.svelte';
	import { binaryPerPlaceValue } from './lib';
	import { nowAndTick } from '../../utils/time';

	let { dotWidth = '1ch' } = $props();

	/** @type{Date} */
	let now = $state(new Date(Date.now()));

	nowAndTick(() => {
		now = new Date(Date.now());
	});

	let time = $derived({
		hours: binaryPerPlaceValue(now.getHours().toString().padStart(2, '0')),
		minutes: binaryPerPlaceValue(now.getMinutes().toString().padStart(2, '0')),
		seconds: binaryPerPlaceValue(now.getSeconds().toString().padStart(2, '0')),
	});
</script>

<time datetime={now.toString()}>
	<span class="column-group">
		{#each time.hours as hour}
			<span class="column">
				{#each hour.split('') as digit}
					<Dot {digit} {dotWidth} />
				{/each}
			</span>
		{/each}
	</span>

	<span class="column-group">
		{#each time.minutes as minute}
			<span class="column">
				{#each minute.split('') as digit}
					<Dot {digit} {dotWidth} />
				{/each}
			</span>
		{/each}
	</span>

	<span class="column-group">
		{#each time.seconds as second}
			<span class="column">
				{#each second.split('') as digit}
					<Dot {digit} {dotWidth} />
				{/each}
			</span>
		{/each}
	</span>
</time>

<style>
	time {
		column-gap: var(--binary-decimal-clock__column-gap, 1ch);
		display: flex;
		justify-content: space-around;
		inline-size: var(--binary-decimal-clock__inline-size, 4em);
	}

	.column-group {
		display: flex;
		column-gap: calc(var(--binary-decimal-clock__column-gap, 1ch) * 0.25);
	}
</style>
