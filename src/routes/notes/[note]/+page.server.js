import { getNotes } from '$lib/notes/service';
import { slugify } from '$lib/router/params';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const response = await fetch(`/api/notes/${params.note}`);
	const note = await response.json();

	return {
		head: {
			title: `${note.data.matter.title} · Doing it Wrong`,
		},
		note,
	};
}

/** @type {import('./$types').EntryGenerator} */
export async function entries(args) {
	const [notesError, notes] = await getNotes();

	if (notesError) {
		console.error(notesError);

		throw notesError;
	}

	const noteMeta = notes.flatMap(({ data }) => {
		return data.matter;
	});

	const noteSlugs = noteMeta.map((note) => {
		return { note: slugify(note.title.toLowerCase()) };
	});

	return noteSlugs;
}

export const prerender = true;
