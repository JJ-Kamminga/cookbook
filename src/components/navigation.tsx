interface NavigationProps {
    children?: React.ReactNodeArray | React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({children}: NavigationProps) => {
	return (
		<nav>
			<style jsx>{`
                nav {
                    background-color: var(--blue);
                }
            `}</style>
			this is the nagivation component
			{children}
		</nav>
	);
};

export { Navigation };