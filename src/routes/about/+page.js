/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return {
		head: {
			title: 'About This Site · Doing it Wrong',
		},
	};
}

export const prerender = true;
