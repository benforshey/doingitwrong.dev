<script>
	import Dot from './Dot.svelte';
	import { binaryPerPlaceValue } from './lib';
	import { nowAndTick } from '../../utils/time';

	/** @type{Date} */
	let now;

	nowAndTick(() => {
		now = new Date(Date.now());
	});

	$: time = {
		hours: binaryPerPlaceValue(now.getHours().toString().padStart(2, '0')),
		minutes: binaryPerPlaceValue(now.getMinutes().toString().padStart(2, '0')),
		seconds: binaryPerPlaceValue(now.getSeconds().toString().padStart(2, '0')),
	};
</script>

<time datetime={now.toString()}>
	{#each time.hours as hour}
		<span class="column">
			{#each hour.split('') as digit}
				<Dot {digit} />
			{/each}
		</span>
	{/each}

	{#each time.minutes as minute}
		<span class="column">
			{#each minute.split('') as digit}
				<Dot {digit} />
			{/each}
		</span>
	{/each}

	{#each time.seconds as second}
		<span class="column">
			{#each second.split('') as digit}
				<Dot {digit} />
			{/each}
		</span>
	{/each}
</time>

<style>
	time {
		display: flex;
	}

	.column {
		display: flex;
		flex-direction: column;
	}

	.column:nth-of-type(even) {
		margin-inline-end: 1em;
	}
</style>
