export function deSlug(param = '') {
	return param.replaceAll('-', ' ') || '';
}

export function slugify(param = '') {
	return param.replaceAll(' ', '-') || '';
}
