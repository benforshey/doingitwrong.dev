<script>
	import { onMount } from 'svelte';
	import { nanoid } from 'nanoid';

	let { headingElement = 'h2' } = $props();

	// TODO it would be great to make the selector (data-toc-id) dynamic, but you'd need to write a fn that complied with how JS internally translates dashed-names into dashedNames. Doable, if worth it.

	/** @type {Array<HTMLElement>} */
	let content = $state([]);

	onMount(() => {
		content = Array.from(document.querySelectorAll('[data-toc-id]'));

		content.forEach((item) => {
			item.id = item.id || item.dataset.tocId || nanoid();
		});
	});
</script>

<nav aria-labelledby="table-of-contents__aria-labelledby">
	<details>
		<summary
			><svelte:element
				this={headingElement}
				id="table-of-contents__aria-labelledby"
				>Table of Contents</svelte:element
			></summary
		>
		<ul>
			{#each content as item}
				<li>
					<a href={`#${item.id}`}>{item.innerText}</a>
				</li>
			{/each}
		</ul>
	</details>
</nav>

<style>
	h2 {
		display: inline;
	}
</style>
