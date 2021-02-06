import { ContextProps, LayoutProps } from 'types/types';
import { PostLayout } from '@layouts/post';
import { getPostBySlug, getAllPosts } from '@api';
import config from 'customconfig.js';

// Post component:
// The return value from getStaticProps is passed to the component at build time
export default function Post({...props}: LayoutProps): React.ReactElement {
	return <PostLayout
		title={props.title} 
		description={props.description}
		postProps={props.postProps}
	/>;
}

export async function getStaticProps(context: ContextProps): Promise<unknown> {
	return { 
		// slug will be passed as context
		// this function returns a PostProps object based on that slug
		props: {
			title: config.title,
			description: config.description,
			postProps: await getPostBySlug(context && context?.params?.slug),
		}
		// if you want to have additional props to build the page with, 
		// they should be retrieved with getStaticProps as well
	};
}

// getStaticPaths supplies the list of paths that has to be rendered to HTML at build time. 
// The fallback property ensures that if you visit a route that does not exist in 
// the list of paths, it will return a 404 page.
export async function getStaticPaths(): Promise<unknown> { //TO DO: fix typings
	const unmappedPaths = await getAllPosts();
	const mappedPaths = unmappedPaths.map(post => ({
		params: {
			slug:post.slug 
		}
	}));
	return {
		paths: mappedPaths,
		fallback: false
	};
}