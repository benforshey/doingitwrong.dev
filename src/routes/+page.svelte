<script>
	import { slugify } from '$lib/router/params';

	export let data;
</script>

<h1>Doing it Wrong</h1>

<ul>
	{#each data.noteMeta as meta}
		<li>
			<h2>
				<a href={`/notes/${slugify(meta.title).toLowerCase()}`}>{meta.title}</a>
			</h2>
			<p class="">{meta.description}</p>
			<p>
				published <time datetime={meta.publishedOn}>{meta.publishedOn}</time>
			</p>
			{#if meta.updatedOn}
				<p>
					updated <time datetime={meta.updatedOn}>{meta.updatedOn}</time>
				</p>
			{/if}
		</li>
	{/each}
</ul>
