import { DefaultLayout } from '@layouts/default';
import Link from 'next/link';
import { LayoutProps } from 'types/types';

const PostLayout: React.FC<LayoutProps> = ({title, description, postProps}: LayoutProps) => {
	return (
		<DefaultLayout title={title} description={description}>
			<article>
				<h1>{title}</h1>
				<div dangerouslySetInnerHTML={
					{__html:postProps?.content || ''}
				}/>
				<div><Link href='/'><a>Home</a></Link></div> 
			</article>
		</DefaultLayout>
	);
};

export { PostLayout };