import { onDestroy } from 'svelte';
import invariant from 'tiny-invariant';

function nowAndTick(callback = () => {}, milliseconds = 1000) {
	invariant(
		typeof milliseconds === 'number',
		'You must pass in a number of milliseconds.'
	);

	callback();

	const id = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(id);
	});
}

export { nowAndTick };
