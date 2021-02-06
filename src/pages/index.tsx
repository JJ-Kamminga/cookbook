import { DefaultLayout } from '@layouts/default';
import Head from 'next/head';
import { getAllPosts } from '@api';
import { BlogProps, StaticProps } from 'types/types';
import Link from 'next/link';
import config from 'customconfig.js';
	
export async function getStaticProps(): Promise<StaticProps> {
	const allPosts = await getAllPosts();
	return { 
		props: {
			posts: allPosts,
			title: config.title,
			description: config.description
		}
	};
}
	
export default function Home({posts, title, description}: BlogProps) : React.ReactElement {

	return (
		<div>
			<Head>
				<title>harmonic.on</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DefaultLayout title={title} description={description}>
				<p>List of recipes</p>
				<ul>
					{posts.map(function(post, idx) {
						return (
							<li key={idx}>
								<Link href={'/posts/'+post.slug}>
									<a>{post.title}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</DefaultLayout>
		</div>
	);
}
