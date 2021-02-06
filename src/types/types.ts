
interface BlogProps {
    posts: PostProps[];
    title: string;
    description: string;
  }

interface LayoutProps {
    title?: string;
    description?: string;
    children?: React.ReactNodeArray | React.ReactNode;
    postProps?: PostProps;
    //content?: string;
}

interface PostProps {
    slug: string;
    title: string;
    date: Date | string;
    content?: string;
    excerpt?: string;
}

interface StaticProps {
	props: BlogProps;
}

type ContextProps = {
    params: {
        slug: string;
    }
};


export type { BlogProps, ContextProps, LayoutProps, PostProps, StaticProps };