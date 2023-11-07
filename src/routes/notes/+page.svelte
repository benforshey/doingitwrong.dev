<script>
	import { slugify } from "$lib/router/params";

  export let data;
  export const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })

  $: notesList = data.notes.flatMap(({ data }) => {
    const {matter} = data 
    const {isDraft, ...frontMatter} = matter

    frontMatter.publishedOn = formatter.format(new Date(frontMatter.publishedOn))
    frontMatter.updatedOn = formatter.format(new Date(frontMatter.updatedOn))
    

    return isDraft ? [] : [frontMatter]
  })
</script>


<!-- todo: make this a card have a link that goes to the slug page (slugify / deSlugify)-->
<!-- todo: make a single post endpoint -->
<!-- todo: make a route parameter (prefer [title]) that reads from single endpoint via +page.js  -->
<!-- todo: if desired / necessary, take your HTML notes and convert to markdown -->
<ul>
{#each notesList as note}
  <li>
    <h2><a href={`/notes/${slugify(note.title).toLowerCase()}`}>{note.title}</a></h2>
    <p class="subtitle">{note.description}</p>
    <p>published <time datetime={note.publishedOn}>{formatter.format(new Date(note.publishedOn))}</time></p>
    {#if note.updatedOn}
    <p>updated <time datetime={note.updatedOn}>{formatter.format(new Date(note.updatedOn))}</time></p>
    {/if}
  </li>
{/each}
</ul>
