<script>
	import * as config from '../../lib/site-config.js';
</script>

<!-- TODO I think I want a simple top-level nav, especially if I use tags for everything. Probably just home, about, notes, rss. About could contain plenty of quirky stuff, like Dave's site.  -->
<nav>
	<a href="/">{config.title}</a>
	<ul class="links">
		<li><a href="/about">About Me</a></li>
		<!-- <li><a href="/adages-laws-quotes">Adages, Laws, and Quotes</a></li> -->
		<!-- <li><a href="/books">Books</a></li> -->
		<li><a href="/notes">Notes</a></li>
		<li><a href="/rss.xml" target="_blank">RSS</a></li>
	</ul>
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
	}

	@media (min-width: 48rem) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
