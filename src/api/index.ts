import matter from 'gray-matter';
import marked from 'marked';
import { PostProps } from 'types/types';

// Get all the posts from the _posts directory
export async function getAllPosts(): Promise<PostProps[]> {
	const context = require.context('../_posts', false, /\.md$/);
	const posts = [];
	for(const key of context.keys()){
		try {
			const post = key.slice(2);
			const content = await import(`../_posts/${post}`);
			const meta = matter(content.default);
			// Configure the Post object before adding it to the array
			posts.push({
				...meta.data,
				slug: post.replace('.md',''),
				title: meta.data.title,
				date: meta.data.date,
			});
		} catch(e) {console.error(`An error occurred getting posts: ${e}`);}
	}
	// Sort the posts by date
	return posts.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

// Fetch a single post for a given slug
export async function getPostBySlug(slug: string): Promise<PostProps> {
	const fileContent = await import(`../_posts/${slug}.md`);
	const meta = matter(fileContent.default);
	const content = marked(meta.content);
	return {
		slug: slug,
		title: meta.data.title, 
		date: meta.data.date,
		content: content
	};
}
