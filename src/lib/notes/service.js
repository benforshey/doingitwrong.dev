import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { matter } from 'vfile-matter';

export async function getNotes() {
	try {
		const formatter = new Intl.DateTimeFormat('en-US', {
			dateStyle: 'full',
		});
		const rawNotes = [];
		// NOTE: This is a Vercel-ism.
		const pathToNotesDir =
			process.env.NODE_ENV === 'production'
				? '.output/static/notes'
				: join(cwd(), 'static/notes');
		const entries = await readdir(pathToNotesDir, {
			recursive: true,
			withFileTypes: true,
		});

		for (const entry of entries) {
			if (entry.name.endsWith('.md')) {
				const markdownFile = await markdownPipeline.process(
					await readFile(`${entry.path}/${entry.name}`, { encoding: 'utf8' })
				);
				const frontMatter = markdownFile.data.matter;

				if (frontMatter.publishedOn) {
					frontMatter.publishedOn = formatter.format(
						new Date(frontMatter.publishedOn)
					);
				}

				if (frontMatter.updatedOn) {
					frontMatter.updatedOn = formatter.format(
						new Date(frontMatter.updatedOn)
					);
				}

				if (!(Object.keys(frontMatter).length > 0)) {
					throw new Error(
						`Note found at file ${entry.name} does not have FrontMatter. Notes must have FrontMatter!`
					);
				}

				rawNotes.push(markdownFile);
			}
		}

		rawNotes.sort((a, b) => {
			const dateStringA = a.data.matter.updatedOn ?? a.data.matter.publishedOn;
			const dateStringB = b.data.matter.updatedOn ?? b.data.matter.publishedOn;

			return new Date(dateStringB) - new Date(dateStringA);
		});

		return [null, rawNotes];
	} catch (error) {
		console.error(error);

		return [error, null];
	}
}

const includeFrontmatter = () => (tree, file) => matter(file);

const markdownPipeline = unified()
	.use(remarkParse)
	.use(remarkFrontmatter)
	.use(includeFrontmatter)
	.use(remarkGfm)
	.use(remarkRehype)
	.use(rehypeStringify);
