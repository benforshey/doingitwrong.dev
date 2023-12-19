import { getNotes } from '$lib/notes/service';
import { deSlug } from '$lib/router/params';
import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const [notesError, notes] = await getNotes();
	const title = deSlug(params.note);

	if (notesError) {
		console.error(notesError);

		error(404, 'Notes not found.');
	}

	const [note] = notes.filter((note) => {
		return note.data.matter.title.toLowerCase() === title.toLowerCase();
	});

	if (!note) {
		error(404, 'Note not found.');
	}

	return json(note);
}
