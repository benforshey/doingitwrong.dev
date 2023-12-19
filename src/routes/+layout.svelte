<script>
	import { page } from '$app/stores';
	import { onNavigate } from '$app/navigation';
	import '../app.css';
	import Header from '../features/header/Header.svelte';

	onNavigate((navigation) => {
		if (document.startViewTransition) {
			return new Promise((resolve) => {
				document.startViewTransition(async () => {
					resolve();

					await navigation.complete;
				});
			});
		}
	});
</script>

<svelte:head>
	{#if $page.data.head?.title}
		<title>{$page.data.head.title}</title>
	{/if}
</svelte:head>

<div>
	<Header />

	<main class="prose dark:prose-invert mx-auto">
		<slot />
	</main>
</div>
