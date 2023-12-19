import { getNotes } from '$lib/notes/service';
import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const [notesError, notes] = await getNotes();

	if (notesError) {
		console.error(notesError);

		error(404, 'Notes not found.');
	}

	return json(notes);
}
