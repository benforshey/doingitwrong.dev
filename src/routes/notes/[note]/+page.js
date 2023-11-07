/** @type {import('./$types').PageLoad} */
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
