import { slugify } from '$lib/router/params';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const data = await fetch('/api/notes');
	const response = await data.json();

	const noteMeta = response.flatMap(({ data }) => {
		return data.matter;
	});

	return {
		head: {
			title: 'Home · Doing it Wrong',
		},
		noteMeta,
	};
}

export const prerender = true;
