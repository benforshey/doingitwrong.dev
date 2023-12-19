<script>
	import { page } from '$app/stores';
	import * as config from '$lib/site-config.js';
	import BinaryDecimalClock from '../clocks/BinaryDecimalClock.svelte';
</script>

<header class="flex justify-between items-center h-16 p-4">
	<a href="/">{config.title}</a>

	<BinaryDecimalClock />

	<nav class="">
		<ul class="flex gap-x-4">
			<li>
				<a href="/" aria-current={$page.url.pathname === '/' ? 'page' : false}
					>home</a
				>
			</li>
			<li>
				<a
					href="/about"
					aria-current={$page.url.pathname === '/about' ? 'page' : false}
					>about</a
				>
			</li>
			<!-- <li> -->
			<!-- 	<a -->
			<!-- 		href="/notes" -->
			<!-- 		aria-current={$page.url.pathname === '/notes' ? 'page' : false} -->
			<!-- 		>notes</a -->
			<!-- 	> -->
			<!-- </li> -->
			<li>
				<a
					href="/books"
					aria-current={$page.url.pathname === '/books' ? 'page' : false}
					>books</a
				>
			</li>
			<!-- <li> -->
			<!-- 	<a -->
			<!-- 		href="/apps" -->
			<!-- 		aria-current={$page.url.pathname === '/apps' ? 'page' : false}>apps</a -->
			<!-- 	> -->
			<!-- </li> -->
			<li>
				<a
					href="https://github.com/benforshey"
					target="_blank"
					rel="noopener noreferrer">my GitHub</a
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	/* TODO: use a pseudo element dot, below */
	/* TODO: set up hover, focus styles in tailwind */
	a[aria-current='page'] {
		font-weight: 700;
		view-transition-name: active-page;
	}
</style>
