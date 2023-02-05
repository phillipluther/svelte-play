import { json } from '@sveltejs/kit';
import { getMarkdownPosts } from '$lib/utils';

export async function GET() {
	try {
		const posts = await getMarkdownPosts();
		// TODO … sorting? filtering?
		return json(posts);
	} catch (err) {
		console.error('Caught error (add error handling)');
		throw err;
	}
}
