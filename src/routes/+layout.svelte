<script>
	import { page } from '$app/stores';
	import 'open-props/open-props.min.css'
	import 'open-props/buttons';
	import 'open-props/normalize';
	import '../app.css';
	import Footer from '../features/footer/Footer.svelte';
	import Header from '../features/header/Header.svelte';
</script>

<svelte:head>
	{#if $page.data.head?.title}
		<title>{$page.data.head.title}</title>
	{/if}
</svelte:head>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100dvh;
		max-inline-size: var(--size-xl);
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

	@media (min-width: 90rem) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
