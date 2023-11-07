/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const response = await fetch("/api/notes");
  const notes = await response.json();

  return {
    head: {
      title: "Notes · Doing it Wrong",
    },
    notes,
  };
}
