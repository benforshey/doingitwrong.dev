<script>
	import { error } from '@sveltejs/kit';

	export let data;
	export const formatter = new Intl.DateTimeFormat('en-US', {
		dateStyle: 'full',
	});

	if (data.note.data.matter.isDraft) {
		error(401, 'Note is not published.');
	}

	$: note = data.note;
</script>

<article>
	<header>
		<p>
			published <time datetime={note.data.matter.publishedOn}
				>{formatter.format(new Date(note.data.matter.publishedOn))}</time
			>
		</p>
		{#if note.data.matter.updatedOn}
			<p>
				updated <time datetime={note.data.matter.updatedOn}
					>{formatter.format(new Date(note.data.matter.updatedOn))}</time
				>
			</p>
		{/if}
	</header>

	{@html note.value}
</article>
